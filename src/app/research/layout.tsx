import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examinr.ai Research",
  description: "Research, technical articles, and educational insights from Examinr.ai.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-text-accent">
      <header className="p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-light-dull-text">
          Examinr.ai / Research Route
        </p>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
