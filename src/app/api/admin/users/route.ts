import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken, COOKIE_NAME } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";

const PAGE_SIZE = 20;

async function authenticate(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export async function GET(request: NextRequest) {
  if (!(await authenticate())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  try {
    const [total, users] = await Promise.all([
      prisma.waitlistUser.count(),
      prisma.waitlistUser.findMany({
        select: { id: true, email: true, utm: true, joinedAt: true },
        orderBy: { joinedAt: "asc" },
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
    ]);

    const totalPages = Math.ceil(total / PAGE_SIZE);
    const offset = (page - 1) * PAGE_SIZE;

    // Attach global position (offset + index + 1, 1-indexed)
    const usersWithPosition = users.map((u, i) => ({
      ...u,
      position: offset + i + 1,
      joinedAt: u.joinedAt.toISOString(),
    }));

    return NextResponse.json(
      { users: usersWithPosition, total, page, totalPages },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    );
  }
}
