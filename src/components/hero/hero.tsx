"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-32 z-10 text-center">
      
      <div className="container mx-auto px-6 flex flex-col items-center max-w-[1200px]">
        
        {/* Badge */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-light-border/20 bg-dark-select/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-text-highlight" />
          <span className="text-sm font-medium text-white-text/80">Early Access Waitlist</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } },
          }}
          initial="hidden"
          animate="visible"
          className="font-display font-normal text-5xl md:text-7xl lg:text-[80px] leading-[1.2] text-text-accent max-w-4xl mb-7"
        >
          Building the future of <span className="text-text-highlight">exam preparation.</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
          }}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-light-dull-text max-w-[550px] leading-relaxed mb-9 font-primary"
        >
          An intelligent study companion designed to communicate confidence, clarity, and innovation. Secure your spot on the waitlist today.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-linear-to-b from-[#3B82F6] to-[#052353] text-white font-medium transition-all hover:brightness-110 shadow-lg shadow-text-highlight/20 border border-transparent">
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center px-6 py-3.5 rounded-[10px] bg-transparent border border-light-border/20 text-white-text font-medium transition-all hover:bg-white/5">
            Learn More
          </button>
        </motion.div>

        {/* Application Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl shadow-[#3B82F6]/10 border border-light-border/10"
        >
          <Image
            src="/hero.svg"
            alt="Examinr.ai Application Preview"
            width={1280}
            height={832}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
