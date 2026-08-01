"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BackgroundWave() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] w-full z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-[140vw] h-[40vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          animate={{
            x: ["-3%", "3%", "-3%"],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/wave_accent.svg"
            alt=""
            fill
            className="object-contain object-center scale-y-[0.75]"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
