"use client";

import { type Variants, motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingPill {
  label: string;
  delay: number;
  duration: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITY_PILLS: FloatingPill[] = [
  { label: "Analysis",       delay: 0,    duration: 9  },
  { label: "Quizzes",        delay: 1.3,  duration: 11 },
  { label: "Notes",          delay: 0.7,  duration: 8  },
  { label: "Video tutorials",delay: 2.1,  duration: 10 },
  { label: "Memory tricks",  delay: 1.8,  duration: 12 },
  { label: "Flash cards",    delay: 0.4,  duration: 9  },
];

// Pill positions arranged in an orbital pattern around a centre prompt
const PILL_POSITIONS = [
  { top: "8%",  left: "4%"   },
  { top: "12%", right: "6%"  },
  { top: "42%", left: "0%"   },
  { top: "42%", right: "0%"  },
  { top: "72%", left: "8%"   },
  { top: "72%", right: "8%"  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

// Variant factory — delay is passed via `custom` on each motion element.
const FADE_UP: Variants = {
  hidden:              { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function DecorativeStar({
  size,
  style,
  delay,
}: {
  size: number;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={style}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -4, 0],
              opacity: [0.55, 0.85, 0.55],
            }
      }
      transition={{
        duration: 14,
        delay: delay ?? 0,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <Image src="/star.svg" alt="" width={size} height={size} />
    </motion.div>
  );
}

// ── Card 1 illustration — sidebar navigation mock ──────────────────────────────

function SidebarIllustration() {
  const navItems = [
    { label: "Dashboard",  active: false },
    { label: "Resources",  active: true  },
    { label: "Past papers", active: false },
    { label: "Analytics",  active: false },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm overflow-hidden flex" style={{ height: "168px" }}>
      {/* Sidebar */}
      <div className="w-[108px] border-r border-white/[0.06] flex flex-col py-3 px-2 gap-1 shrink-0">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-primary font-medium transition-colors ${
              item.active
                ? "bg-[#3B82F6]/20 text-[#3B82F6]"
                : "text-white/30"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Main area */}
      <div className="flex-1 p-3 flex flex-col gap-2">
        {/* Search bar with glow highlight */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/40 rounded-lg px-2.5 py-1.5 shadow-[0_0_12px_rgba(59,130,246,0.18)]">
            {/* Search icon */}
            <svg className="w-3 h-3 text-[#3B82F6] shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5L14 14" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-primary text-[#9DC1FB]">Everything you are looking for</span>
          </div>
          {/* Glow pulse */}
          <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: "0 0 20px rgba(59,130,246,0.14)" }} />
        </div>

        {/* Resource list items */}
        {["High-yield topics", "Exam pattern analysis", "Priority modules"].map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/50 shrink-0" />
            <span className="text-[9px] font-primary text-white/40">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Card 2 illustration — prompt surrounded by floating capability tags ─────────

function PromptIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full" style={{ height: "168px" }}>
      {/* Floating pills */}
      {CAPABILITY_PILLS.map((pill, i) => (
        <motion.span
          key={pill.label}
          className="absolute px-2.5 py-1 rounded-full text-[9px] font-primary font-medium whitespace-nowrap border border-[#3B82F6]/20 bg-[#3B82F6]/08 text-[#9DC1FB] backdrop-blur-sm"
          style={PILL_POSITIONS[i]}
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -5, 0] }
          }
          transition={{
            duration: pill.duration,
            delay: pill.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {pill.label}
        </motion.span>
      ))}

      {/* Central prompt bubble */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="px-4 py-2.5 rounded-xl border border-[#3B82F6]/30 bg-[#0A111D]/90 shadow-[0_0_24px_rgba(59,130,246,0.12)]">
            <span className="text-[11px] font-primary font-medium text-white/80">Organisation of Life</span>
          </div>
          {/* Subtle glow behind prompt */}
          <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: "0 0 32px rgba(59,130,246,0.1)" }} />
        </div>
      </div>
    </div>
  );
}

// ── Card 3 illustration — institution selector ─────────────────────────────────

function InstitutionIllustration() {
  const institutions = ["UPSS", "WAEC", "Miracle centers"];

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm p-4" style={{ height: "168px" }}>
      <p className="text-[9px] font-primary text-white/35 uppercase tracking-widest mb-3">Your institutes</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {institutions.map((name, i) => (
          <button
            key={name}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-primary font-medium border transition-colors ${
              i === 0
                ? "border-[#3B82F6]/40 bg-[#3B82F6]/12 text-[#3B82F6]"
                : "border-white/[0.08] bg-white/[0.03] text-white/40"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="border-t border-white/[0.05] pt-3">
        <p className="text-[9px] font-primary text-white/30 leading-relaxed">
          Join the institutes and access their resources
        </p>
      </div>
    </div>
  );
}

// ─── Feature card data ─────────────────────────────────────────────────────────

interface FeatureCard {
  heading: string;
  supportingLine: string;
  body: string;
  illustration: React.ReactNode;
  delay: number;
}

// ─── Main component ────────────────────────────────────────────────────────────

export function Students() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const cards: FeatureCard[] = [
    {
      heading: "Stop studying everything.",
      supportingLine: "Study what matters.",
      body: "Instead of reviewing everything equally, Examinr analyzes years of examination patterns to identify the topics most likely to appear and the areas you should prioritise first.",
      illustration: <SidebarIllustration />,
      delay: 0.25,
    },
    {
      heading: "One prompt.",
      supportingLine: "An entire study session.",
      body: "Generate notes, quizzes, essay questions, flashcards, memory tricks and video recommendations from one request.",
      illustration: <PromptIllustration />,
      delay: 0.35,
    },
    {
      heading: "One classroom shouldn't define your education.",
      supportingLine: "Learn beyond your institution.",
      body: "Access trusted resources shared by schools, educators, universities, and the wider learning community—all in one place.",
      illustration: <InstitutionIllustration />,
      delay: 0.45,
    },
  ];

  return (
    <section
      id="for-students"
      ref={sectionRef}
      className="relative w-full max-w-[1120px] mx-auto px-6 py-24 md:py-32 flex flex-col items-end"
    >
      {/* ── Section Header ── */}
      <div className="relative flex flex-col items-end text-right mb-16 md:mb-20 w-full">
        {/* Decorative stars */}
        <DecorativeStar size={20} style={{ top: "-10px", left: "20px"  }} delay={0}   />
        <DecorativeStar size={13} style={{ top: "-4px",  left: "-12px" }} delay={3.2} />
        <DecorativeStar size={16} style={{ top: "20px",  right: "-30px"}} delay={1.5} />
        <DecorativeStar size={11} style={{ top: "-6px",  right: "-60px"}} delay={4.0} />
        <DecorativeStar size={9}  style={{ bottom: "8px",left: "40px"  }} delay={2.8} />

        {/* Heading */}
        <motion.h2
          custom={0.1}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display font-normal text-5xl md:text-6xl lg:text-[64px] leading-[1.15] text-white-text max-w-3xl"
        >
          <span className="text-[#3B82F6]">Stop</span> studying harder.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-5 font-primary font-medium uppercase tracking-[0.12em] text-sm text-white-text/70"
        >
          START{" "}
          <span className="text-[#3B82F6]">STUDYING SMARTER</span>
        </motion.p>
      </div>

      {/* ── Feature Cards ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {cards.map((card) => (
          <motion.div
            key={card.heading}
            custom={card.delay}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative rounded-[30px] border border-white/[0.07] bg-[#0D1929]/80 backdrop-blur-md overflow-hidden p-7 md:p-8 flex flex-col gap-5 group transition-all duration-300 hover:border-[#3B82F6]/20 will-change-transform"
          >
            {/* Radial glow on hover */}
            <div
              className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.07) 0%, transparent 70%)",
              }}
            />

            {/* Illustration */}
            <div className="relative z-10 w-full">
              {card.illustration}
            </div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="font-display font-normal text-2xl md:text-[26px] leading-[1.25] text-white-text">
                {card.heading}
              </h3>
              <p className="font-primary font-medium text-base text-[#3B82F6]">
                {card.supportingLine}
              </p>
            </div>

            {/* Body */}
            <p className="relative z-10 font-primary text-sm md:text-[15px] leading-relaxed text-white-text/50 mt-auto">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
