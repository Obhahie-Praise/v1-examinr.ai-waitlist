import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken, COOKIE_NAME } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";

async function authenticate(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export async function GET(request: NextRequest) {
  void request;
  if (!(await authenticate())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const users = await prisma.waitlistUser.findMany({
      select: { email: true, utm: true, joinedAt: true },
      orderBy: { joinedAt: "asc" },
    });

    const rows = [
      ["Position", "Email", "UTM", "Joined"].join(","),
      ...users.map((u, i) => {
        const position = i + 1;
        const email = `"${u.email}"`;
        const utm = u.utm ? `"${u.utm}"` : "";
        const joined = u.joinedAt.toISOString();
        return [position, email, utm, joined].join(",");
      }),
    ].join("\n");

    return new NextResponse(rows, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to export data." },
      { status: 500 }
    );
  }
}
