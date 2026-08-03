import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAdminToken, COOKIE_NAME } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";

async function authenticate(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export async function GET(request: NextRequest) {
  if (!(await authenticate(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Total users
    const totalUsers = await prisma.waitlistUser.count();

    // Acquisition rate: signups in the last 7 days vs the 7 days before that
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    const [recentCount, previousCount] = await Promise.all([
      prisma.waitlistUser.count({
        where: { joinedAt: { gte: sevenDaysAgo } },
      }),
      prisma.waitlistUser.count({
        where: { joinedAt: { gte: fourteenDaysAgo, lt: sevenDaysAgo } },
      }),
    ]);

    let acquisitionRate: string;
    if (previousCount === 0 && recentCount === 0) {
      acquisitionRate = "No data";
    } else if (previousCount === 0) {
      acquisitionRate = `+${recentCount} this week`;
    } else {
      const pct = Math.round(((recentCount - previousCount) / previousCount) * 100);
      const sign = pct >= 0 ? "+" : "";
      acquisitionRate = `${sign}${pct}% vs last week`;
    }

    // Highest UTM source
    const utmGroups = await prisma.waitlistUser.groupBy({
      by: ["utm"],
      _count: { utm: true },
      where: { utm: { not: null } },
      orderBy: { _count: { utm: "desc" } },
      take: 1,
    });

    const highestUtm =
      utmGroups.length > 0 && utmGroups[0].utm
        ? { source: utmGroups[0].utm, count: utmGroups[0]._count.utm }
        : null;

    return NextResponse.json(
      { totalUsers, acquisitionRate, highestUtm },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch metrics." },
      { status: 500 }
    );
  }
}
