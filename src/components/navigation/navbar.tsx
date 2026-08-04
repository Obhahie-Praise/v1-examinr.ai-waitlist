"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "For Students", href: "/#for-students" },
  { label: "For Institutions", href: "/#for-institutions" },
  { label: "Research", href: "/research" },
];

// Shared press interaction for all CTA buttons — consistent across the page.
const BUTTON_TRANSITION = { duration: 0.15, ease: "easeOut" } as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json() as Promise<{ count: number }>)
      .then((data) => setWaitlistCount(data.count))
      .catch(() => setWaitlistCount(0));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px", // Detect sections crossing the upper-middle of viewport
      },
    );

    const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("/#")).map(
      (l) => l.href.substring(2),
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const displayCount = waitlistCount !== null ? waitlistCount : 231;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none`}
      >
        {/*
         * Entrance animation uses a fast tween (ease-out, 250ms) instead of a spring.
         * This avoids overshoot and keeps the motion GPU-friendly (opacity + translateY only).
         * The `layout` prop is intentionally omitted from inner wrappers to prevent
         * unnecessary layout recalculation on every scroll-triggered class swap.
         */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto will-change-transform flex items-center justify-between",
            isScrolled
              ? "mt-6 px-6 py-2.5 w-full md:mx-0 mx-4 max-w-2xl rounded-full bg-app-bg/70 backdrop-blur-sm border border-light-border shadow-lg shadow-black/20 transition-all duration-200 ease-out"
              : "w-full max-w-[1440px] px-6 md:px-[130px] py-[40px] bg-transparent border-transparent transition-all duration-200 ease-out",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 gap-2 text-text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md"
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "font-semibold tracking-tight transition-all duration-200 ease-out",
                  isScrolled ? "text-lg" : "text-xl",
                )}
              >
                <Image
                  src={
                    isScrolled
                      ? "/examinr-logo-collasped.svg"
                      : "/examinr-logo.svg"
                  }
                  width={isScrolled ? 80 : 183}
                  height={isScrolled ? 18 : 42}
                  alt="Examinr Logo"
                  className="hidden md:block"
                />
                <Image
                  src="/examinr-logo-collasped.svg"
                  width={80}
                  height={18}
                  alt="Examinr Logo"
                  className="block md:hidden"
                />
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div
            className={`${isScrolled ? "gap-2" : "gap-6"} hidden md:flex justify-center items-center w-fit absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-out`}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href.startsWith("/#") &&
                activeSection === link.href.substring(2);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    isScrolled
                      ? "text-xs whitespace-nowrap text-nowrap"
                      : "text-sm",
                    "font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md px-2 py-1",
                    isActive
                      ? "bg-linear-to-b from-[#3B82F6] to-white bg-clip-text text-transparent"
                      : "text-text-accent hover:text-white-text",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: CTA & Hamburger */}
          <div className="flex items-center gap-4">
            {!isScrolled && (
              <div className="text-xs hidden md:flex items-center gap-6">
                <div className="w-fit h-fit flex items-center relative">
                  <span className="w-4.5 h-4.5 rounded-full border-app-bg border z-[1000] relative overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src="/user-1.jpg"
                      alt=""
                      fill
                      sizes="18px"
                      className="object-cover"
                    />
                  </span>
                  <span className="w-4.5 h-4.5 rounded-full border-app-bg border absolute left-2.25 z-[1000] overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src="/user-2.jpg"
                      alt=""
                      fill
                      sizes="18px"
                      className="object-cover"
                    />
                  </span>
                  <span className="w-4.5 h-4.5 rounded-full border-app-bg border absolute left-4.5 z-[1000] overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src="/user-3.jpg"
                      alt=""
                      fill
                      sizes="18px"
                      className="object-cover"
                    />
                  </span>
                </div>
                {displayCount}+ already waiting
              </div>
            )}

            {/*
             * CTA button uses whileHover + whileTap for consistent press feedback.
             * Scale slightly up on hover, scale down on press — premium tactile feel.
             * Shadow reduction on press reinforces the "pressed" physical metaphor.
             */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96, boxShadow: "none" }}
              transition={BUTTON_TRANSITION}
            >
              <Link
                href={"/#waitlist"}
                className={cn(
                  "hidden md:inline-flex items-center justify-center rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg focus-visible:ring-text-highlight will-change-transform",
                  isScrolled ? "px-4.5 py-2 text-xs" : "px-4 py-2.5 text-sm",
                )}
              >
                {" "}
                Join waitlist
              </Link>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              transition={BUTTON_TRANSITION}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] h-fit bg-app-bg/50 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <Link
                href="/"
                className="flex items-center gap-2 text-text-highlight"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/examinr-logo-collasped.svg"
                  width={80}
                  height={18}
                  alt="Examinr Logo"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-xl font-medium">
              {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => {
                const isActive =
                  link.href.startsWith("/#") &&
                  activeSection === link.href.substring(2);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "bg-linear-to-r from-[#3B82F6] to-white bg-clip-text text-transparent"
                        : "text-light-dull-text hover:text-text-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-8 pt-8 border-t border-light-dull-text/20">
                <motion.button
                  whileTap={{ scale: 0.96, boxShadow: "none" }}
                  transition={BUTTON_TRANSITION}
                  className="w-full"
                >
                  <Link href={'/#waitlist'} className="block w-full py-2.5 rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium text-lg transition-colors hover:brightness-110 will-change-transform">Join waitlist</Link>
                 
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
