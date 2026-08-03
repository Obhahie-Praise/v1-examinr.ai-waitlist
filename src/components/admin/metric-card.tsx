interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
}

export function MetricCard({ title, value, subtitle, icon }: MetricCardProps) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-[16px] p-6 flex flex-col gap-4 hover:bg-white/[0.05] transition-colors duration-200">
      <div className="flex items-center justify-between">
        <p className="text-light-dull-text text-sm font-primary font-medium">
          {title}
        </p>
        <span className="text-[#3B82F6] opacity-70">{icon}</span>
      </div>
      <div>
        <p className="text-white-text text-2xl md:text-3xl font-primary font-semibold tracking-tight">
          {value}
        </p>
        {subtitle && (
          <p className="text-light-dull-text text-xs font-primary mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
