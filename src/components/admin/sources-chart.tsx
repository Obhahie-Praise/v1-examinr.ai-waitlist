"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Colour palette — deterministic so each source always gets the same colour
const SOURCE_COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#EF4444",
  "#06B6D4",
  "#84CC16",
];

function getColor(index: number): string {
  return SOURCE_COLORS[index % SOURCE_COLORS.length];
}

interface SourcesChartProps {
  data: Record<string, string | number>[];
  sources: string[];
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[220px] gap-3">
      <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <path d="M10 7V10M10 13H10.01" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="text-light-dull-text text-sm font-primary">No source data</p>
      <p className="text-light-dull-text/60 text-xs font-primary">
        UTM data will appear here once signups come in
      </p>
    </div>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function SourcesChart({ data, sources }: SourcesChartProps) {
  if (sources.length === 0 || data.length < 2) {
    return (
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6">
        <p className="text-light-dull-text text-sm font-primary font-medium mb-4">
          Acquisition Sources
        </p>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6">
      <p className="text-white-text text-sm font-primary font-medium mb-6">
        Acquisition Sources
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
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
          />
          <Legend
            wrapperStyle={{
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
              color: "#616161",
              paddingTop: "16px",
            }}
          />
          {sources.map((source, i) => (
            <Line
              key={source}
              type="monotone"
              dataKey={source}
              stroke={getColor(i)}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
