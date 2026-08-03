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

// Basic cuid validation — starts with "c" and is alphanumeric
const CUID_REGEX = /^c[a-z0-9]{24,}$/;

export async function DELETE(request: NextRequest) {
  if (!(await authenticate())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let ids: unknown;
  try {
    const body = await request.json();
    ids = body?.ids;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json(
      { error: "ids must be a non-empty array." },
      { status: 400 }
    );
  }

  // Validate all IDs before touching the database
  const validIds = (ids as unknown[]).filter(
    (id): id is string => typeof id === "string" && CUID_REGEX.test(id)
  );

  if (validIds.length !== ids.length) {
    return NextResponse.json(
      { error: "One or more IDs are invalid." },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.waitlistUser.deleteMany({
      where: { id: { in: validIds } },
    });

    return NextResponse.json({ deleted: result.count }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete users." },
      { status: 500 }
    );
  }
}
