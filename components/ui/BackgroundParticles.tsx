"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    // Generate static particle coords on client side to prevent hydration mismatches
    const generated = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.35 + 0.15,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Aurora Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#FF4D8D]/15 to-[#FF7EB3]/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-[#6A1B9A]/15 to-[#FF4D8D]/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating Animated Hearts */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: `${p.y}%`, x: `${p.x}%`, opacity: 0, scale: 0.5 }}
          animate={{
            y: [`${p.y}%`, `${(p.y - 25 + 100) % 100}%`],
            x: [`${p.x}%`, `${(p.x + (p.id % 2 === 0 ? 5 : -5) + 100) % 100}%`],
            opacity: [0, p.opacity, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute select-none text-[#FF4D8D]/30"
          style={{ fontSize: `${p.size}px` }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
