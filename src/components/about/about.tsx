"use client";

import { type Variants, motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FloatingPill {
  label: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const BLUE_PILLS: FloatingPill[] = [
  { label: "Past data analysis",   top: "58%",  left: "8%",  delay: 0,    duration: 9  },
  { label: "Finds patterns",       top: "68%",  left: "40%", delay: 1.2,  duration: 11 },
  { label: "Practice",             top: "76%",  left: "18%", delay: 2.4,  duration: 8  },
  { label: "Predictable outcomes", top: "65%",  left: "62%", delay: 0.8,  duration: 10 },
  { label: "Personalized journey", top: "82%",  left: "50%", delay: 1.8,  duration: 12 },
];

const PURPLE_PILLS: FloatingPill[] = [
  { label: "Uniformed resource indexing", top: "55%",  left: "4%",  delay: 0.4,  duration: 10 },
  { label: "Access endless resources",    top: "68%",  left: "35%", delay: 1.6,  duration: 9  },
  { label: "Lock in what matters",        top: "78%",  left: "8%",  delay: 0.9,  duration: 11 },
  { label: "Institute grade resources",   top: "72%",  left: "55%", delay: 2.1,  duration: 8  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

// Simple variant — delay is passed via the `transition` prop on each element.
const FADE_UP: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

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

function Pill({
  pill,
  color,
}: {
  pill: FloatingPill;
  color: "blue" | "purple";
}) {
  const shouldReduceMotion = useReducedMotion();

  const blueClasses =
    "bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-[#9DC1FB]";
  const purpleClasses =
    "bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#D8B4FE]";

  return (
    <motion.span
      className={`absolute px-3 py-1.5 rounded-full text-xs font-primary font-medium whitespace-nowrap backdrop-blur-sm ${
        color === "blue" ? blueClasses : purpleClasses
      }`}
      style={{ top: pill.top, left: pill.left }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -6, 0],
            }
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
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full max-w-[1350px] mx-auto flex flex-col items-center"
    >
      {/* ── Section Header ── */}
      <div className="relative flex flex-col items-center text-center mb-16 md:mb-20">
        {/* Decorative stars */}
        <DecorativeStar size={22} style={{ top: "-12px", left: "-36px" }}  delay={0}   />
        <DecorativeStar size={14} style={{ top: "-4px",  left: "-68px" }}  delay={3.5} />
        <DecorativeStar size={18} style={{ top: "16px",  right: "-40px" }} delay={1.8} />
        <DecorativeStar size={12} style={{ top: "-8px",  right: "-72px" }} delay={4.2} />
        <DecorativeStar size={10} style={{ bottom: "8px", left: "-52px" }} delay={2.6} />

        {/* Heading */}
        <motion.h2
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display font-normal text-5xl md:text-6xl lg:text-[64px] leading-[1.15] bg-linear-to-l from-[#3B82F6] via-[#9DC1FB] to-[#3B82F6] bg-clip-text text-transparent"
        >
          Building the future of
          confident learning.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 font-primary font-medium uppercase tracking-[-3%] text-[20px] text-white-text/70"
        >
          STUDY WITH AI WITH{" "}
          <span className="bg-linear-to-r from-[#3B82F6] to-white bg-clip-text text-transparent">PREDICTIVE INTELLIGENCE</span>
        </motion.p>
      </div>

      {/* ── Card Grid ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-4 md:gap-6">
        {/* ── Card 1 — Large Left ── */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="relative rounded-[30px] border border-light-border bg-white/3 backdrop-blur-md overflow-hidden min-h-[480px] md:min-h-[560px] p-8 md:p-10 flex flex-col group transition-all duration-300 hover:border-[#3B82F6]/20"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(59,130,246,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Card content */}
          <div className="relative z-10 flex flex-col flex-1">
            <h3 className="font-display font-normal text-3xl md:text-4xl leading-[1.2] text-white-text mb-4">
              Education has been reactive for{" "}
              <span className="text-[#3B82F6]">DECADES.</span>
            </h3>

            <p className="font-primary font-medium text-xl md:text-2xl text-white-text mb-5">
              We&apos;re making it{" "}
              <span className="text-[#3B82F6]">predictive.</span>
            </p>

            <p className="font-primary text-sm md:text-[15px] leading-relaxed text-white-text/50 max-w-[480px]">
              Examinr analyzes years of examination patterns, combines them with
              institution-approved resources, and turns them into personalized
              learning experiences that help students prepare with greater
              direction and confidence.
            </p>
          </div>

          {/* Floating pills */}
          <div className="absolute inset-0 pointer-events-none">
            {BLUE_PILLS.map((pill) => (
              <Pill key={pill.label} pill={pill} color="blue" />
            ))}
          </div>
        </motion.div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* ── Card 2 — Top Right ── */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="relative rounded-[30px] border border-light-border bg-white/3 backdrop-blur-md overflow-hidden min-h-[300px] md:min-h-[340px] p-7 md:p-8 flex flex-col group transition-all duration-300 hover:border-[#A855F7]/20"
          >
            {/* Purple radial glow */}
            <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <h3 className="font-display font-normal text-2xl md:text-[28px] leading-[1.2] text-white-text mb-3">
                Stop searching.
                <br />
                Start preparing{" "}
                <span className="text-[#A855F7]">intelligently.</span>
              </h3>

              <p className="font-primary text-sm md:text-[15px] leading-relaxed text-white-text/50">
                One platform where institutions publish trusted resources, AI
                identifies recurring examination patterns, and students focus on
                what matters most.
              </p>
            </div>

            {/* Floating pills */}
            <div className="absolute inset-0 pointer-events-none">
              {PURPLE_PILLS.map((pill) => (
                <Pill key={pill.label} pill={pill} color="purple" />
              ))}
            </div>
          </motion.div>

          {/* ── Card 3 — Bottom Right ── */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="relative rounded-[30px] border border-light-border bg-white/3 backdrop-blur-md p-7 md:p-8 flex flex-col group transition-all duration-300 hover:border-[#22C55E]/20"
          >
            {/* Green radial glow */}
            <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 80%, rgba(34,197,94,0.07) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="font-display font-normal text-2xl md:text-[26px] leading-[1.25] text-white-text mb-2">
                The future of learning isn&apos;t more{" "}
                <span className="relative inline-block text-[#22C55E]">
                  content
                  {/* Scribble underline — SVG drawn inline to match design style */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 80 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5 C14 2, 28 7.5, 42 4 C56 1, 68 6.5, 78 4"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                —
              </h3>

              <p className="font-display font-normal text-xl md:text-[22px] text-white-text/80 mb-4">
                It&apos;s better direction.
              </p>

              <p className="font-primary text-sm md:text-[15px] leading-relaxed text-white-text/50">
                Students don&apos;t need another chatbot. They need an
                intelligent system that understands examinations, trusted
                resources, and how they learn best.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
