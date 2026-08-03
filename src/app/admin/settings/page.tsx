import { Shield, User, FolderOpen, Clock } from "lucide-react";

const INFO_ITEMS = [
  { label: "Administrator", value: "Praise", icon: User },
  { label: "Role", value: "Owner", icon: Shield },
  { label: "Project", value: "Examinr.ai Waitlist", icon: FolderOpen },
  { label: "Session Duration", value: "48 hours per device", icon: Clock },
];

export default function AdminSettingsPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl text-white-text">
          Settings
        </h1>
        <p className="text-light-dull-text text-sm font-primary mt-1">
          Administrator information
        </p>
      </div>

      <div className="max-w-lg flex flex-col gap-3">
        {INFO_ITEMS.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-[14px] px-5 py-4"
          >
            <div className="w-8 h-8 rounded-[8px] bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
              <Icon size={15} className="text-[#3B82F6]" />
            </div>
            <div className="flex flex-col">
              <p className="text-light-dull-text text-xs font-primary">{label}</p>
              <p className="text-white-text text-sm font-primary font-medium mt-0.5">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-light-dull-text/50 text-xs font-primary mt-8">
        Settings functionality will be expanded in a future release.
      </p>
    </div>
  );
}
