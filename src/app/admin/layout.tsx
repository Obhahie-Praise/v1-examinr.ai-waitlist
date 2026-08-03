import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: "Examinr.ai Admin",
  description: "Administration dashboard for Examinr.ai",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-app-bg text-text-accent">
      <AdminSidebar />
      <main className="flex-1 min-w-0 md:max-w-5xl md:mx-auto">{children}</main>
    </div>
  );
}
