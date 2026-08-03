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
    // Fetch all users (joinedAt + utm) for analytics
    // We aggregate server-side to avoid sending raw IDs/emails to the client
    const users = await prisma.waitlistUser.findMany({
      select: { joinedAt: true, utm: true },
      orderBy: { joinedAt: "asc" },
    });

    // Group by day for growth chart (cumulative)
    const growthByDay = new Map<string, number>();
    let cumulative = 0;
    for (const u of users) {
      const day = u.joinedAt.toISOString().slice(0, 10); // YYYY-MM-DD
      cumulative++;
      growthByDay.set(day, cumulative);
    }
    const growthData = Array.from(growthByDay.entries()).map(([date, count]) => ({
      date,
      count,
    }));

    // Group by day + source for UTM sources chart
    const sourcesByDay = new Map<string, Map<string, number>>();
    for (const u of users) {
      if (!u.utm) continue;
      const day = u.joinedAt.toISOString().slice(0, 10);
      if (!sourcesByDay.has(day)) {
        sourcesByDay.set(day, new Map());
      }
      const dayMap = sourcesByDay.get(day)!;
      dayMap.set(u.utm, (dayMap.get(u.utm) ?? 0) + 1);
    }

    // Collect all unique sources
    const allSources = Array.from(
      new Set(users.map((u) => u.utm).filter(Boolean) as string[])
    );

    // Build date-keyed array with all sources filled in (0 if no signups that day)
    const allDays = Array.from(
      new Set([
        ...growthByDay.keys(),
        ...sourcesByDay.keys(),
      ])
    ).sort();

    // Carry forward cumulative counts per source
    const sourceCumulatives: Record<string, number> = {};
    for (const s of allSources) sourceCumulatives[s] = 0;

    const sourcesData = allDays.map((day) => {
      const dayMap = sourcesByDay.get(day);
      const entry: Record<string, string | number> = { date: day };
      for (const s of allSources) {
        if (dayMap?.has(s)) {
          sourceCumulatives[s] += dayMap.get(s)!;
        }
        entry[s] = sourceCumulatives[s];
      }
      return entry;
    });

    return NextResponse.json(
      { growthData, sourcesData, allSources },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch analytics." },
      { status: 500 }
    );
  }
}
