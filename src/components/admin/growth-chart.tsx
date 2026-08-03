"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface GrowthDataPoint {
  date: string;
  count: number;
}

interface GrowthChartProps {
  data: GrowthDataPoint[];
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[220px] gap-3">
      <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 15L8 9L12 12L17 5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-light-dull-text text-sm font-primary">
        Not enough data yet
      </p>
    </div>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function GrowthChart({ data }: GrowthChartProps) {
  if (data.length < 2) {
    return (
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6">
        <p className="text-light-dull-text text-sm font-primary font-medium mb-4">
          Waitlist Growth
        </p>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6">
      <p className="text-white-text text-sm font-primary font-medium mb-6">
        Waitlist Growth
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fill: "#616161", fontSize: 11, fontFamily: "var(--font-primary)" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#616161", fontSize: 11, fontFamily: "var(--font-primary)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0E1318",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
            }}
            labelFormatter={(label) =>
              typeof label === "string" ? formatDate(label) : String(label ?? "")
            }
            formatter={(val) => [val ?? 0, "Users"]}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#growthGradient)"
            dot={false}
            activeDot={{ r: 4, fill: "#3B82F6" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
