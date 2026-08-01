"use client";

import {
  type Variants,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Plus, Send } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { DecorativeStar } from "@/components/ui/decorative-star";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingPill {
  label: string;
  delay: number;
  duration: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITY_PILLS: FloatingPill[] = [
  { label: "Analysis", delay: 0, duration: 9 },
  { label: "Quizzes", delay: 1.3, duration: 11 },
  { label: "Notes", delay: 0.7, duration: 8 },
  { label: "Video tutorials", delay: 2.1, duration: 10 },
  { label: "Memory tricks", delay: 1.8, duration: 12 },
  { label: "Flash cards", delay: 0.4, duration: 9 },
];

// Pill positions arranged in an orbital pattern around a centre prompt
const PILL_POSITIONS = [
  { top: "8%", left: "4%" },
  { top: "12%", right: "6%" },
  { top: "42%", left: "0%" },
  { top: "42%", right: "0%" },
  { top: "72%", left: "8%" },
  { top: "72%", right: "8%" },
];

// ─── Animation variants ────────────────────────────────────────────────────────

// Variant factory — delay is passed via `custom` on each motion element.
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────



// ── Card 1 illustration — sidebar navigation mock ──────────────────────────────

function SidebarIllustration() {
  const navItems = [
    { label: "Dashboard", active: false },
    { label: "Resources", active: true },
    { label: "Past papers", active: false },
    { label: "Analytics", active: false },
  ];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Sidebar */}
      <Image src={"/sidebar.svg"} alt="sidebar" width={400} height={210} />
      <p className="text-[12px] absolute top-[87px] right-[0px] bg-linear-to-r from-[#FFFFFF] to-[#3B82F6] bg-clip-text text-transparent">
        Everything you are looking for
      </p>
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
          className="absolute px-2.5 min-w-15.5 text-center py-1 rounded-[6px] text-[10px] font-primary font-medium whitespace-nowrap bg-text-highlight text-white-text backdrop-blur-sm"
          style={PILL_POSITIONS[i]}
          animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
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
          <div className="px-2 py-1.5 rounded-md gap-4 flex items-center min-w-36 bg-chat-input shadow-[0_0_24px_rgba(59,130,246,0.12)] text-[12px] font-primary font-medium text-white/80">
            <div className="space-x-1 flex items-center font-normal">
              <Plus size={12} className="text-text-accent" />
              <span className="">Organisation of Life</span>
            </div>
            <Send size={12} className="text-text-accent" />
          </div>
          {/* Subtle glow behind prompt */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ boxShadow: "0 0 32px rgba(59,130,246,0.1)" }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Card 3 illustration — institution selector ─────────────────────────────────

function InstitutionIllustration() {
  const institutions = ["Your school", "WAEC", "Miracle centers"];

  return (
    <div
      className="relative w-full rounded-2xl border border-white/[0.07] bg-[#0A111D]/80 backdrop-blur-sm p-3"
      style={{ height: "168px" }}
    >
      <p className="text-[10px] font-primary text-text-accent uppercase tracking-widest mb-3">
        Your institutes
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {institutions.map((name, i) => (
          <button
            key={name}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-primary font-medium transition-colors ${
              i === 0
                ? "text-white-text bg-[#3B82F6]"
                : "bg-chat-input text-white-text"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="border-t border-white/[0.05] pt-3">
        <p className="text-[12px] bg-linear-to-r from-[#FFFFFF] to-[#3B82F6] bg-clip-text text-transparent">
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
      className="relative w-full max-w-[1350px] mx-auto flex flex-col items-end"
    >
      {/* ── Section Header ── */}
      <div className="relative flex flex-col items-end text-right mb-16 md:mb-8 w-fit">
        {/* Decorative stars */}
        <DecorativeStar
          size={42.63}
          style={{ top: "-6px", left: "40px" }}
          delay={0}
        />
        <DecorativeStar
          size={68.83}
          style={{ top: "10px", left: "351px" }}
          delay={3.2}
        />

        {/* Heading */}
        <motion.h2
          custom={0.1}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-display font-normal text-5xl md:text-6xl lg:text-[64px] leading-[1.15] max-w-3xl bg-linear-to-l from-[#3B82F6] via-[#9DC1FB] to-[#3B82F6] bg-clip-text text-transparent"
        >
          Stop studying harder.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.2}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-5 font-primary font-medium uppercase tracking-[-3%] text-[20px] text-white-text/70"
        >
          START{" "}
          <span className="bg-linear-to-r from-[#3B82F6] to-white bg-clip-text text-transparent">
            STUDYING SMARTER
          </span>
        </motion.p>
      </div>

      {/* ── Feature Cards ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.heading}
            custom={card.delay}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -4,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="relative rounded-[30px] border border-light-border bg-white/3 backdrop-blur-md overflow-hidden p-7 md:p-6 flex flex-col gap-5 group transition-all duration-300 hover:border-[#3B82F6]/20 will-change-transform"
          >
            {/* Radial glow on hover */}
            <div
              className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.07) 0%, transparent 70%)",
              }}
            />

            {/* Text content */}
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="font-primary font-medium text-lg md:text-xl leading-[-2%] text-white-text">
                {card.heading}
              </h3>
              <p className="font-primary font-medium text-[16px] text-white-text">
                {card.supportingLine}
              </p>
            </div>
            {/* Illustration */}
            <div className="relative z-10 w-full">{card.illustration}</div>
            {/* Body */}
            <p className="relative z-10 font-primary text-sm md:text-[14px] leading-relaxed text-text-accent mt-auto">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
