"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Wave */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <motion.div
          animate={{
            y: ["0%", "-2%", "0%"],
            rotate: [0, 1, 0, -1, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="w-[120%] h-[120%] relative flex justify-center items-center"
        >
          <Image
            src="/wave_accent.svg"
            alt="Background Wave"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-start gap-6 max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-light-border/20 bg-dark-select/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-text-highlight animate-pulse" />
            <span className="text-sm font-medium text-white-text/80">Early Access Waitlist</span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-text-accent"
          >
            Building the future of <span className="text-text-highlight">exam preparation.</span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="text-lg md:text-xl text-light-dull-text max-w-lg leading-relaxed"
          >
            An intelligent study companion designed to communicate confidence, clarity, and innovation. Secure your spot on the waitlist today.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="flex items-center gap-4 pt-4"
          >
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium transition-all hover:bg-text-highlight/90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-text-highlight/20">
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content / Illustration */}
        <motion.div 
          className="flex-1 w-full max-w-lg md:max-w-none relative flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: ["-2%", "2%", "-2%"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="relative w-full aspect-square max-w-[500px]"
          >
            <Image
              src="/hero.svg"
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
