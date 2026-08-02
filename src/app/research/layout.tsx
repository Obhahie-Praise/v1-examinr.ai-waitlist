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
      <main className="flex-1">{children}</main>
    </div>
  );
}
