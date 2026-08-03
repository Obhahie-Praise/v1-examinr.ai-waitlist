"use client";

import { useEffect, useState, useCallback } from "react";
import { Users, TrendingUp, Tag } from "lucide-react";
import { MetricCard } from "@/components/admin/metric-card";
import { GrowthChart } from "@/components/admin/growth-chart";
import { SourcesChart } from "@/components/admin/sources-chart";
import { WaitlistTable } from "@/components/admin/waitlist-table";

interface Metrics {
  totalUsers: number;
  acquisitionRate: string;
  highestUtm: { source: string; count: number } | null;
}

interface Analytics {
  growthData: { date: string; count: number }[];
  sourcesData: Record<string, string | number>[];
  allSources: string[];
}

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [metricsLoading, setMetricsLoading] = useState(true);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  const fetchMetrics = useCallback(async () => {
    setMetricsLoading(true);
    try {
      const res = await fetch("/api/admin/metrics");
      if (res.ok) setMetrics(await res.json());
    } finally {
      setMetricsLoading(false);
    }
  }, []);

  const fetchAnalytics = useCallback(async () => {
    setAnalyticsLoading(true);
    try {
      const res = await fetch("/api/admin/analytics");
      if (res.ok) setAnalytics(await res.json());
    } finally {
      setAnalyticsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    fetchAnalytics();
  }, [fetchMetrics, fetchAnalytics]);

  // Called after a deletion to refresh metrics + analytics without full reload
  const handleDataChange = () => {
    fetchMetrics();
    fetchAnalytics();
  };

  return (
    <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-8">
      {/* Page title */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl text-white-text">
          Overview
        </h1>
        <p className="text-light-dull-text text-sm font-primary mt-1">
          Waitlist at a glance
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          title="Total Users"
          value={metricsLoading ? "—" : (metrics?.totalUsers.toLocaleString() ?? "—")}
          subtitle="Registered waitlist signups"
          icon={<Users size={18} />}
        />
        <MetricCard
          title="Acquisition Rate"
          value={metricsLoading ? "—" : (metrics?.acquisitionRate ?? "—")}
          subtitle="This week vs last week"
          icon={<TrendingUp size={18} />}
        />
        <MetricCard
          title="Top Source"
          value={
            metricsLoading
              ? "—"
              : metrics?.highestUtm
              ? metrics.highestUtm.source
              : "No source data"
          }
          subtitle={
            metrics?.highestUtm
              ? `${metrics.highestUtm.count} signup${metrics.highestUtm.count !== 1 ? "s" : ""}`
              : "No UTM data recorded yet"
          }
          icon={<Tag size={18} />}
        />
      </div>

      {/* Analytics charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {analyticsLoading ? (
          <>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6 h-[320px] animate-pulse" />
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6 h-[320px] animate-pulse" />
          </>
        ) : (
          <>
            <GrowthChart data={analytics?.growthData ?? []} />
            <SourcesChart
              data={analytics?.sourcesData ?? []}
              sources={analytics?.allSources ?? []}
            />
          </>
        )}
      </div>

      {/* Waitlist table */}
      <WaitlistTable onDataChange={handleDataChange} />
    </div>
  );
}
