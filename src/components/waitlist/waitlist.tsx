"use client";

import {
  type Variants,
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { CheckCircle, X, Share2, Copy, Check } from "lucide-react";
import { DecorativeStar } from "@/components/ui/decorative-star";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BenefitCard {
  title: string;
  titleContinuation?: string;
  body: string;
  delay: number;
  decoration: React.ReactNode;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BUTTON_TRANSITION = { duration: 0.15, ease: "easeOut" } as const;

// ─── Animation variants ────────────────────────────────────────────────────────

// Variant factory — delay is passed via the `custom` prop.
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────

// ─── Card decorations ─────────────────────────────────────────────────────────

// Card 1 — subtle blue vertical accent bar on the left edge.
function EarlyAccessDecoration() {
  return (
    <div
      className="absolute top-0 left-0 h-full w-[3px] rounded-l-[30px]"
      style={{
        background:
          "linear-gradient(to bottom, #3B82F6 0%, #3B82F6 50%, transparent 100%)",
        opacity: 0.5,
      }}
    />
  );
}

// Card 2 — floating blue geometric shapes (diamond + circle pair).
function FeedbackDecoration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute top-5 right-5 pointer-events-none select-none">
      {/* Outer ring */}
      <motion.div
        className="w-10 h-10 rounded-full border border-[#3B82F6]/25 flex items-center justify-center"
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Inner diamond */}
        <div
          className="w-4 h-4 bg-[#3B82F6]/15 border border-[#3B82F6]/30"
          style={{ transform: "rotate(45deg)" }}
        />
      </motion.div>
      {/* Small satellite dot */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#3B82F6]/40"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.5,
        }}
      />
    </div>
  );
}

// Card 3 — abstract blue arc / partial ring positioned lower-right.
function MomentumDecoration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute bottom-6 right-6 pointer-events-none select-none">
      <motion.svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={shouldReduceMotion ? {} : { rotate: [0, 12, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        style={{ originX: "50%", originY: "50%" }}
      >
        {/* Outer partial arc */}
        <circle
          cx="26"
          cy="26"
          r="22"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeOpacity="0.2"
          strokeDasharray="50 90"
          strokeLinecap="round"
        />
        {/* Inner partial arc, offset */}
        <circle
          cx="26"
          cy="26"
          r="14"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeOpacity="0.15"
          strokeDasharray="30 58"
          strokeDashoffset="15"
          strokeLinecap="round"
        />
        {/* Centre dot */}
        <circle cx="26" cy="26" r="3" fill="#3B82F6" fillOpacity="0.25" />
      </motion.svg>
    </div>
  );
}

// ─── Avatar stack ─────────────────────────────────────────────────────────────

// Five small overlapping user avatars — purely decorative.
const AVATAR_IMAGES = [
  "/user-1.jpg",
  "/user-2.jpg",
  "/user-3.jpg",
  "/user-4.jpg",
  "/user-5.jpg",
];

function AvatarStack() {
  return (
    <div className="flex items-center" aria-hidden="true">
      {AVATAR_IMAGES.map((src, i) => (
        <div
          key={src}
          className="w-7 h-7 rounded-full border-2 border-[#0E1318] flex items-center justify-center -ml-2 first:ml-0 shrink-0 relative overflow-hidden"
          style={{ zIndex: i }}
        >
          <Image src={src} alt="" fill sizes="28px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

// ─── Success Modal ────────────────────────────────────────────────────────────

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  position: number | null;
  email: string;
}

function SuccessModal({ open, onClose, position, email }: SuccessModalProps) {
  const getQueuePosition = (pos: number | null) => {
    return pos !== null ? pos : 231;
  };
  const [copied, setCopied] = useState(false);
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://examinr-ai.vercel.app?utm=user";

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be unavailable — fail silently.
    }
  }, [shareUrl]);

  const handleShare = useCallback(async () => {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: "Examinr.ai — Join the waitlist",
          text: "I just joined the Examinr.ai waitlist. They’re building a better way to study, and I’m excited to see where they take it. Join me: ",
          url: shareUrl,
        });
      } catch {
        // User cancelled or share unavailable — fall back to copy.
        await handleCopy();
      }
    } else {
      await handleCopy();
    }
  }, [shareUrl, handleCopy]);

  // Close on Escape key press.
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />
          

          {/* Panel */}
          <motion.div
            key="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="You are on the waitlist!"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-6 pointer-events-none"
          >
            
            <div className="relative pointer-events-auto w-full max-w-[537px] rounded-[28px] border overflow-hidden border-white/[0.08] bg-app-bg backdrop-blur-md p-8 md:p-10 flex flex-col items-center text-center shadow-2xl shadow-black/40 sm:scale-100 scale-90">
            <div className="absolute left-1/2 -translate-x-1/2 top-[31px] -z-100 w-full">
            <Image src={'/circle.png'} width={475} height={475} alt="circle" priority/>
          </div>
          <Image src={'/circle.png'} width={475} height={475} alt="circle" className="absolute top-[20px] left-1/2 -translate-x-1/2 -z-1000 blur-[50px]" />
              {/* Check icon */}
              <div className="mb-6 relative">
                
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ boxShadow: "0 0 32px rgba(59,130,246,0.18)" }}
                />
              </div>

              {/* Heading */}
              <h3 className="pt-20 font-display font-normal text-2xl md:text-[48px] text-white-text mb-3 tracking-[-3%]">
                {"You're on the waitlist!"}
              </h3>

              {/* Supporting text */}
              <p className="font-primary text-sm md:text-[15px] leading-relaxed text-white-text/70 max-w-[300px] mb-5">
                Thanks for signing up. <br /> We’ll notify you once the beta is ready.
              </p>

              {/* Extra detail */}
              <div className="grid grid-cols-2 gap-27.5 mb-5">
                <div className="">
                  <p className="tracking-[-3%] text-nowrap font-normal text-text-accent">Your email</p>
                  <p className="font-display text-[18px] tracking-[7%] text-white-text">{email}</p>
                </div>
                <div className="">
                  <p className="tracking-[-3%] text-nowrap font-normal text-text-accent">Position on queue</p>
                  <p className="font-display text-[24px] tracking-[7%] text-white-text">#{getQueuePosition(position)}</p>
                </div>
              </div>
              <p className="text-xs mb-0.5">Help us grow the waitlist</p>

              {/* Share + Copy actions */}
              <div className="flex flex-col items-center gap-2 w-full">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96, boxShadow: "none" }}
                  transition={BUTTON_TRANSITION}
                  onClick={handleShare}
                  className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] bg-gradient-to-b from-[#3B82F6] to-[#052353] text-white text-sm font-medium transition-colors hover:brightness-110 will-change-transform"
                >
                  <Share2 className="w-4 h-4" />
                  Share the waitlist
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={BUTTON_TRANSITION}
                  onClick={handleCopy}
                  className="flex-1 w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] border border-white/[0.1] bg-white/[0.04] text-white/70 text-sm font-medium transition-colors hover:bg-white/[0.07] will-change-transform"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy link
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function Waitlist() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [utm, setUtm] = useState<string | undefined>(undefined);

  // Fetch live waitlist count once on mount.
  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json() as Promise<{ count: number }>)
      .then((data) => setWaitlistCount(data.count))
      .catch(() => setWaitlistCount(0));
  }, []);

  // Capture and persist utm parameter.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlUtm = params.get("utm");
      if (urlUtm) {
        sessionStorage.setItem("waitlist_utm", urlUtm);
        setUtm(urlUtm);
      } else {
        const storedUtm = sessionStorage.getItem("waitlist_utm");
        if (storedUtm) {
          setUtm(storedUtm);
        }
      }
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      if (!email.trim()) {
        setError("Please enter your email address.");
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), utm }),
        });

        const data = (await response.json()) as {
          success?: boolean;
          error?: string;
        };

        if (!response.ok || !data.success) {
          setError(data.error ?? "Something went wrong. Please try again.");
        } else {
          setSubmittedEmail(email.trim());
          setEmail("");
          setModalOpen(true);
          // Optimistically increment the count for a better perceived experience.
          setWaitlistCount((prev) => (prev !== null ? prev + 1 : null));
        }
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [email],
  );

  // ─── Benefit cards data ──────────────────────────────────────────────────────

  const benefitCards: BenefitCard[] = [
    {
      title: "Early access.",
      titleContinuation: "Start before everyone else.",
      body: "Waitlist members will be among the first to access the Examinr AI beta and experience new features before public release.",
      delay: 0.45,
      decoration: <EarlyAccessDecoration />,
    },
    {
      title: "Your feedback",
      titleContinuation: "shapes Examinr.",
      body: "Every beta session helps improve Examinr. Your suggestions influence new features, workflows and learning experiences before launch.",
      delay: 0.55,
      decoration: <FeedbackDecoration />,
    },
    {
      title: "Every signup",
      titleContinuation: "builds momentum.",
      body: "Growing the waitlist helps Examinr prove demand to schools, partners and investors, allowing us to launch with more resources and reach more students.",
      delay: 0.65,
      decoration: <MomentumDecoration />,
    },
  ];

  const displayCount = waitlistCount !== null ? waitlistCount : 231;

  return (
    <>
      {/* ── Success Modal ── */}
      <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} position={waitlistCount} email={submittedEmail} />

      <section
        id="waitlist"
        ref={sectionRef}
        className="relative w-full max-w-[1350px] mx-auto flex flex-col items-center pb-50"
      >
        {/* ── Section Header ── */}
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-[32px]">
          {/* Decorative stars */}
          <DecorativeStar
            size={68.83}
            style={{ top: "10px", left: "31px" }}
            delay={0}
          />
          <DecorativeStar
            size={45.63}
            style={{ top: "-6px", left: "490px" }}
            delay={3.5}
          />

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-display font-normal text-5xl md:text-6xl lg:text-[64px] leading-[1.15] max-w-3xl bg-linear-to-l from-[#3B82F6] via-[#9DC1FB] to-[#3B82F6] bg-clip-text text-transparent"
          >
            Ready to study differently?
          </motion.h2>

          {/* Supporting paragraph */}
          <motion.p
            custom={0.2}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-[32px] font-primary text-base md:text-[16px] text-text-accent max-w-[549px] leading-relaxed"
          >
            Be among the first students and institutions shaping the future of
            predictive learning.
          </motion.p>
        </div>

        {/* ── Waitlist Form ── */}
        <motion.div
          custom={0.3}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-[540px]"
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:rounded-[10px] sm:bg-[#1E4F9F]/10 sm:border-[0.5px] sm:border-white/[0.09] text-white-text text-[14px] sm:focus-within:border-[#3B82F6]/50 sm:focus-within:ring-1 sm:focus-within:ring-[#3B82F6]/30 transition-all duration-200 ease-out"
          >
            {/* Email input */}
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Your email address"
              required
              autoComplete="email"
              aria-label="Your email address"
              aria-describedby={error ? "waitlist-error" : undefined}
              className="flex-1 px-5 py-3 sm:py-0 font-primary placeholder:text-white/30 focus:outline-none rounded-[10px] sm:rounded-none bg-[#1E4F9F]/10 sm:bg-transparent border-[0.5px] border-white/[0.09] sm:border-transparent focus:border-[#3B82F6]/50 sm:focus:border-transparent focus:ring-1 focus:ring-[#3B82F6]/30 sm:focus:ring-0 transition-all duration-200 ease-out"
            />

            {/* Submit button — matches the exact button style used site-wide. */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={isSubmitting ? {} : { scale: 1.03 }}
              whileTap={isSubmitting ? {} : { scale: 0.96, boxShadow: "none" }}
              transition={BUTTON_TRANSITION}
              className="sm:w-fit w-full px-5 py-3 sm:py-2.5 rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white text-[14px] font-medium transition-colors hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed will-change-transform whitespace-nowrap"
            >
              {isSubmitting ? "Joining..." : "Join waitlist"}
            </motion.button>
          </form>

          {/* Error message */}
          {error && (
            <motion.p
              id="waitlist-error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-xs font-primary text-red-400"
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        {/* ── Supporting waitlist information ── */}
        <motion.div
          custom={0.38}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-2 flex flex-col items-center gap-2 text-center"
        >
          <p className="text-xs font-primary text-white/80">
            Early beta opens to the first wave of waitlist members!
          </p>

          {/* Avatar stack + live count */}
          <div className="flex items-center gap-3">
            <AvatarStack />
            <span className="text-sm font-primary font-medium text-white/60">
              {displayCount}+ already waiting
            </span>
          </div>
        </motion.div>

        {/* ── Benefit Cards ── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mt-16 md:mt-20">
          {benefitCards.map((card) => (
            <motion.div
              key={card.title}
              custom={card.delay}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative rounded-[30px] border border-light-border bg-white/3 backdrop-blur-md overflow-hidden p-7 md:p-6 flex flex-col gap-2.5 group transition-all duration-300 hover:border-[#3B82F6]/20 will-change-transform"
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Decorative accents */}
              {card.title === "Early access." ? (
                <Image
                  src="/early_access.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="absolute top-0 left-0 opacity-10"
                />
              ) : card.title === "Your feedback" ? (
                <Image
                  src="/feedback.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="absolute left-[99.54px] top-[17.54px] opacity-10"
                />
              ) : (
                <Image
                  src="/momentum.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="absolute left-[242px] bottom-0 opacity-10"
                />
              )}

              {/* Text */}
              <div className="relative z-10 flex flex-col gap-1.5">
                <h3 className="font-primary font-medium text-2xl md:text-[24px] leading-[1.25] text-white-text">
                  {card.title}
                </h3>
                {card.titleContinuation && (
                  <p className="font-primary font-medium text-[15px] text-white-text">
                    {card.titleContinuation}
                  </p>
                )}
              </div>

              <p className="relative z-10 font-primary text-sm md:text-[14px] leading-relaxed text-text-accent">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
