"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useVelocity,
  useSpring,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";

interface DecorativeStarProps {
  size: number;
  style?: React.CSSProperties;
  delay?: number;
}

export function DecorativeStar({ size, style, delay }: DecorativeStarProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scroll velocity animation
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  const rotation = useMotionValue(0);
  const baseSpeed = 10; // degrees per second
  const velocityFactor = 0.15; // how much scroll velocity affects rotation

  useAnimationFrame((t, delta) => {
    if (shouldReduceMotion) return;
    
    const velocity = smoothVelocity.get();
    let currentSpeed = baseSpeed;
    
    // When scrolling down, velocity is positive -> rotation accelerates.
    // When scrolling up, velocity is negative -> rotation decelerates and reverses if fast enough.
    if (velocity !== 0) {
      currentSpeed += velocity * velocityFactor;
    }
    
    rotation.set(rotation.get() + currentSpeed * (delta / 1000));
  });

  return (
    <motion.div
      className="absolute pointer-events-none select-none blur-[3px] -z-100"
      style={{
        ...style,
        rotate: rotation,
      }}
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
