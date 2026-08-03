"use client";

import { type Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { siGithub, siGmail, siX, siTiktok, siWhatsapp } from "simple-icons";

// ─── Animation variants ────────────────────────────────────────────────────────

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    label: "GITHUB",
    icon: siGithub,
    href: "https://github.com/Obhahie-Praise",
    aria: "Visit GitHub profile",
  },
  {
    label: "EMAIL",
    icon: siGmail,
    href: "mailto:obhahiepraise@gmail.com",
    aria: "Send an email",
  },
  {
    label: "X (Twitter)",
    icon: siX,
    href: "https://x.com/praizedevx",
    aria: "Visit X (Twitter) profile",
  },
  {
    label: "TIKTOK",
    icon: siTiktok,
    href: "https://www.tiktok.com/@praise_d_builder",
    aria: "Visit TikTok profile",
  },
  {
    label: "WHATSAPP",
    icon: siWhatsapp,
    href: "https://wa.link/zdk363",
    aria: "Chat on WhatsApp",
  },
];

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer className="w-full flex justify-center pt-12">
      <div
        ref={footerRef}
        className="w-full max-w-full rounded-t-[60px] bg-white/[0.02] backdrop-blur-md px-8 py-20 md:px-15 md:py-40 flex flex-col"
      >
        {/* Top Area: Two Columns on Desktop */}
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-12 md:gap-8 mb-20 md:mb-32">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left gap-1 md:max-w-[593px]">
            <motion.p
              custom={0.1}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-primary md:text-[16px] text-sm font-medium text-white-text/80"
            >
              Built by a student. For students.
            </motion.p>
            <motion.h2
              custom={0.2}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-primary text-[55px] md:text-[96px] font-medium text-white-text leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="font-display italic text-[55px] md:text-[96px] text-white-text inline-block transform translate-y-1">
                Praise.
              </span>
            </motion.h2>
            <motion.p
              custom={0.3}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-display italic md:text-[20px] text-base text-text-accent tracking-[6%]"
            >
              Built with ☕ and too many late nights.
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right md:max-w-[594px] gap-4">
            <motion.p
              custom={0.4}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-primary text-[16px] md:text-base leading-[114%] tracking-normal md:tracking-[-3%] text-white-text"
            >
              I&apos;m a student who got tired of scattered notes, unpredictable exams, and AI that doesn&apos;t understand school life.
            </motion.p>
            <motion.p
              custom={0.5}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-primary text-[16px] md:text-base leading-relaxed text-white-text tracking-normal md:tracking-[-3%]"
            >
              So I&apos;m building the platform I wish I had.
            </motion.p>
            <motion.p
              custom={0.6}
              variants={FADE_UP}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-primary text-[15px] md:text-base leading-relaxed text-white-text tracking-normal md:tracking-[-3%]"
            >
              If Examinr.ai sounds useful to you, I&apos;d love to hear from you.
            </motion.p>
          </div>
        </div>

        {/* Divider and Connect Label */}
        <motion.div
          custom={0.7}
          variants={FADE_UP}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-4 w-full mb-4.5"
        >
          <span className="font-display italic text-2xl text-white-text whitespace-nowrap">
            Let&apos;s connect.
          </span>
          <div className="w-[149.16px] h-[1px] bg-text-accent" />
        </motion.div>

        {/* Bottom Area: Socials and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-4">
          {/* Social Links */}
          <motion.div
            custom={0.8}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
                className="group font-display relative text-xs md:text-[22px] font-medium text-white-text transition-colors duration-300 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-sm inline-block"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[1.2em] h-[1.2em]"
                  >
                    <title>{link.icon.title}</title>
                    <path d={link.icon.path} />
                  </svg>
                </motion.span>
                {/* Custom underline that fades in on hover */}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3B82F6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            custom={0.9}
            variants={FADE_UP}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start md:items-end text-left md:text-right gap-1"
          >
            <span className="font-display text-[16px] font-medium text-white-text/80">
              &copy; 2026 Examinr.ai
            </span>
            <span className="font-display text-[16px] text-white-text/80">
              Designed &amp; developed by Praise.
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
