"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BackgroundWave() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] w-full z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute opacity-[0.25] blur-sm w-[110vw] h-[40vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          animate={{
            x: ["-2%", "2%", "-2%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/wave_accent.svg"
            alt=""
            fill
            className="object-contain object-center scale-y-[0.7]"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
