"use client";

import { type Variants, motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ─── Animation variants ────────────────────────────────────────────────────────

// Variant factory — delay passed via `custom` on each motion element.
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

// ── Card 1 illustration — resource list with access levels ─────────────────────

function ResourceListIllustration() {
  const resources = [
    { name: "Biology",       access: "Public",       icon: "📄" },
    { name: "Mock Exam",     access: "SSS Only",     icon: "📋" },
    { name: "Teacher Guide", access: "Science Dept", icon: "📘" },
    { name: "Assignment",    access: "Private Class",icon: "📝" },
  ];

  return (
    <div
      className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm overflow-hidden"
      style={{ height: "168px" }}
    >
      <div className="p-3 flex flex-col gap-1.5">
        {resources.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]"
          >
            <div className="flex items-center gap-2">
              {/* Bookmark-style icon */}
              <svg
                className="w-3 h-3 text-[#3B82F6] shrink-0"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5z" />
              </svg>
              <span className="text-[10px] font-primary text-white/60">{r.name}</span>
            </div>
            <span className="text-[8px] font-primary text-white/30 whitespace-nowrap">
              {r.access}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Card 2 illustration — bar chart of most difficult topics ───────────────────

function AnalyticsIllustration() {
  const topics = [
    { label: "Cell Division", width: "78%", delay: 0   },
    { label: "Genetics",      width: "60%", delay: 0.3 },
    { label: "Ecology",       width: "44%", delay: 0.6 },
  ];

  return (
    <div
      className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm p-4"
      style={{ height: "168px" }}
    >
      <p className="text-[9px] font-primary text-white/35 uppercase tracking-widest mb-3">
        Most Difficult Topics
      </p>

      <div className="flex flex-col gap-3.5">
        {topics.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            {/* Bar */}
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#3B82F6]"
                initial={{ width: 0 }}
                animate={{ width: t.width }}
                transition={{ duration: 0.8, delay: t.delay + 0.4, ease: "easeOut" }}
              />
            </div>
            {/* Label */}
            <span className="text-[9px] font-primary text-white/40 w-[64px] shrink-0">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Card 3 illustration — CBT exam dashboard ────────────────────────────────────

function ExamDashboardIllustration() {
  const stats = [
    { label: "Questions", value: "40"     },
    { label: "Students",  value: "284"    },
    { label: "Time",      value: "60 min" },
  ];

  return (
    <div
      className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm p-4"
      style={{ height: "168px" }}
    >
      {/* Exam header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-primary font-medium text-white/70">
          UPSS Mock CBT
        </span>
        <span className="px-2 py-0.5 rounded-full text-[8px] font-primary font-medium bg-[#3B82F6]/15 border border-[#3B82F6]/25 text-[#3B82F6]">
          Ongoing
        </span>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center justify-between">
            <span className="text-[9px] font-primary text-white/35">{s.label}</span>
            <span
              className={`text-[10px] font-primary font-medium ${
                i === 0 ? "text-white/70" : "text-white/50"
              }`}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card data ──────────────────────────────────────────────────────────────────

interface FeatureCard {
  heading: string;
  supportingLine: string;
  body: string;
  illustration: React.ReactNode;
  delay: number;
}

// ─── Main component ─────────────────────────────────────────────────────────────

export function Institutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const cards: FeatureCard[] = [
    {
      heading: "Every resource.",
      supportingLine: "Exactly where it belongs.",
      body: "Upload once. Publish trusted materials to the right learners. Control who can access every note, PDF, assignment or guide—whether it's public, institution-wide or private.",
      illustration: <ResourceListIllustration />,
      delay: 0.25,
    },
    {
      heading: "Learning leaves clues.",
      supportingLine: "We help you read them.",
      body: "Every study session reveals patterns. Discover struggling topics, identify learning gaps, and understand what students need before the examination arrives.",
      illustration: <AnalyticsIllustration />,
      delay: 0.35,
    },
    {
      heading: "One platform.",
      supportingLine: "Every examination.",
      body: "Create CBTs, publish online assessments, generate questions with AI and manage examinations from one place.",
      illustration: <ExamDashboardIllustration />,
      delay: 0.45,
    },
  ];

  return (
    <section
      id="for-institutions"
      ref={sectionRef}
      className="relative w-full max-w-[1200px] mx-auto px-6 py-24 md:py-32 flex flex-col items-start"
    >
      {/* ── Section Header ── */}
      <div className="relative flex flex-col items-start text-left mb-16 md:mb-20 w-full">
        {/* Decorative stars */}
        <DecorativeStar size={22} style={{ top: "-14px", left: "160px" }} delay={0}   />
        <DecorativeStar size={13} style={{ top: "-6px",  left: "220px" }} delay={2.8} />
        <DecorativeStar size={16} style={{ top: "24px",  left: "-24px" }} delay={1.5} />
        <DecorativeStar size={10} style={{ top: "-8px",  left: "-48px" }} delay={4.1} />
        <DecorativeStar size={9}  style={{ bottom: "6px",left: "280px" }} delay={3.3} />

        {/* Heading */}
        <motion.h2
          custom={0.1}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display font-normal text-5xl md:text-6xl lg:text-[64px] leading-[1.15] text-white-text max-w-3xl"
        >
          <span className="text-[#3B82F6]">Stop</span> teaching alone.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-5 font-primary font-medium uppercase tracking-[0.12em] text-sm text-white-text/70"
        >
          BUILD A SMARTER{" "}
          <span className="text-[#3B82F6]">LEARNING ECOSYSTEM</span>
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
