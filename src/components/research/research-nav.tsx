"use client";

import React from "react";

export type PaperId = "vision";

interface ResearchNavProps {
  activePaperId: PaperId;
  onSelectPaper: (id: PaperId) => void;
}

export function ResearchNav({ activePaperId, onSelectPaper }: ResearchNavProps) {
  const papers = [
    { id: "vision", label: "01 \u2014 Vision" },
  ];

  return (
    <nav className="flex flex-col gap-4">
      <h3 className="font-display text-xl text-white-text/50 uppercase tracking-widest mb-2 hidden md:block">
        Research
      </h3>
      <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
        {papers.map((paper) => {
          const isActive = activePaperId === paper.id;
          
          return (
            <li key={paper.id} className="shrink-0">
              <button
                onClick={() => onSelectPaper(paper.id as PaperId)}
                className={`text-left text-sm md:text-base font-primary font-medium transition-all duration-300 py-2 px-4 md:px-0 rounded-full md:rounded-none ${
                  isActive
                    ? "text-[#3B82F6] md:bg-transparent bg-[#3B82F6]/10"
                    : "text-white-text/50 hover:text-white-text/80"
                }`}
              >
                {paper.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
