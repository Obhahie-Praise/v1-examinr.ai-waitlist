import type { Metadata } from "next";

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
    <div className="flex min-h-screen flex-col bg-app-bg text-text-accent">
      <header className="p-8 border-b border-light-dull-text/20">
        <p className="text-sm font-semibold uppercase tracking-widest text-light-dull-text">
          Examinr.ai / Admin Route
        </p>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
