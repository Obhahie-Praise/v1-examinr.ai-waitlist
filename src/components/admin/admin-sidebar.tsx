"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Settings, LogOut } from "lucide-react";
import { logoutAdmin } from "@/app/admin/actions";
import { clsx } from "clsx";

const NAV_ITEMS = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/settings", label: "Settings", icon: Settings, exact: false },
];

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <aside className="flex flex-col w-full md:w-[220px] md:min-h-screen shrink-0">
      {/* Logo */}
      <div className="px-4 py-4">
        <span className="font-display text-xl text-white-text">Examinr.ai</span>
        <p className="text-xs text-light-dull-text font-primary mt-0.5">Admin</p>
      </div>

      {/* Nav */}
      <nav className="flex md:flex-col flex-row gap-1 px-3 py-4 flex-1 overflow-x-auto md:overflow-visible">
        {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-primary text-xs transition-colors duration-200 whitespace-nowrap shrink-0",
                active
                  ? "bg-link-select text-white-text"
                  : "text-light-dull-text hover:text-white-text hover:bg-white/4"
              )}
            >
              <Icon size={15} strokeWidth={1.4} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
