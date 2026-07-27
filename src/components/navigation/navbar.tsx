"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "For Students", href: "/#for-students" },
  { label: "For Institutions", href: "/#for-institutions" },
  { label: "Research", href: "/research" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none`}
      >
        <motion.nav
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8,
            opacity: { duration: 0.25 },
          }}
          className={cn(
            "pointer-events-auto flex items-center justify-between",
            isScrolled
              ? "mt-6 px-6 py-2.5 w-full md:mx-0 mx-4 max-w-2xl rounded-full bg-app-bg/70 backdrop-blur-md border border-light-border shadow-lg shadow-black/20"
              : "w-full max-w-[1440px] px-6 md:px-[130px] py-[40px] bg-transparent border-transparent",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 gap-2 text-text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md"
          >
            <motion.div layout className="flex items-center gap-2">
              <motion.span
                layout
                className={cn(
                  "font-semibold tracking-tight transition-all",
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
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Links - shrink on Scroll */}
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`${isScrolled ? "gap-3" : "gap-6"} hidden md:flex justify-center items-center w-fit absolute left-1/2 -translate-x-1/2`}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${isScrolled ? "text-xs whitespace-nowrap text-nowrap" : "text-sm"} font-medium text-text-accent hover:text-text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md px-2 py-1`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Right Actions: CTA & Hamburger */}
          <motion.div layout className="flex items-center gap-4">
            
            <motion.button
              layout
              className={cn(
                "hidden md:inline-flex items-center justify-center rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium transition-all hover:bg-text-highlight/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg focus-visible:ring-text-highlight active:scale-95",
                isScrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm",
              )}
            >
              Join waitlist
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              layout
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-text-highlight rounded-md"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] h-screen bg-app-bg flex flex-col p-6"
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
              {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-light-dull-text hover:text-text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-light-dull-text/20">
                <button className="w-full py-2.5 rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium text-lg transition-all hover:bg-text-highlight/90 active:scale-95">
                  Join the Waitlist
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
