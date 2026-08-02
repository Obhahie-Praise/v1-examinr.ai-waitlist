import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ─── GET /api/waitlist — returns the live waitlist count ──────────────────────

export async function GET() {
  try {
    const count = await prisma.waitlistUser.count();
    return NextResponse.json({ count }, { status: 200 });
  } catch {
    // Fail gracefully — the count display should never break the page.
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}

// ─── POST /api/waitlist — registers a new waitlist entry ─────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { email?: string; utm?: string };
    const { email, utm } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    const normalised = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalised)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Upsert — if the email already exists we silently succeed rather than
    // exposing which addresses are on the list.
    await prisma.waitlistUser.upsert({
      where: { email: normalised },
      update: {},
      create: {
        email: normalised,
        utm: utm ?? null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
