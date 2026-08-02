"use client";

import React, { useState } from "react";
import { ResearchNav, PaperId } from "@/components/research/research-nav";
import { VisionPaper } from "@/components/research/papers/vision-paper";

export default function ResearchPage() {
  const [activePaperId, setActivePaperId] = useState<PaperId>("vision");

  const renderActivePaper = () => {
    switch (activePaperId) {
      case "vision":
        return <VisionPaper />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-app-bg pt-32 pb-24 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 relative">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-[250px] shrink-0 md:sticky md:top-32 h-fit">
          <ResearchNav activePaperId={activePaperId} onSelectPaper={setActivePaperId} />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-full">
          {renderActivePaper()}
        </main>

      </div>
    </div>
  );
}
