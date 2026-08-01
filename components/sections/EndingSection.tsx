"use client";

import { motion } from "motion/react";
import { FaHeart, FaMoon, FaStar } from "react-icons/fa";

export default function EndingSection() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#140A1A] via-[#1F0C2B] to-[#0D0512] text-white flex flex-col items-center justify-center px-4 overflow-hidden z-10 py-16">
      {/* Night Sky Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-12 left-1/4 text-yellow-200 text-xs animate-pulse">★</div>
        <div className="absolute top-24 right-1/3 text-amber-100 text-sm animate-pulse" style={{ animationDelay: "1s" }}>★</div>
        <div className="absolute top-1/3 left-10 text-white text-xs animate-pulse" style={{ animationDelay: "2s" }}>✨</div>
        <div className="absolute bottom-1/3 right-12 text-yellow-100 text-sm animate-pulse" style={{ animationDelay: "1.5s" }}>★</div>
        <div className="absolute bottom-20 left-1/3 text-[#FF7EB3] text-xs animate-pulse" style={{ animationDelay: "0.5s" }}>✦</div>
      </div>

      {/* Floating Glowing Lanterns */}
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-10 h-14 rounded-full bg-amber-400/40 blur-sm shadow-[0_0_20px_#f59e0b]"
      />
      <motion.div
        animate={{ y: [0, -35, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/5 w-8 h-12 rounded-full bg-rose-400/40 blur-sm shadow-[0_0_25px_#f43f5e]"
      />

      {/* Crescent Moon */}
      <div className="absolute top-8 right-8 text-amber-100/80 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]">
        <FaMoon className="w-10 h-10 sm:w-16 sm:h-16" />
      </div>

      {/* Ending Message Container */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        className="relative max-w-3xl w-full p-8 sm:p-14 rounded-3xl glass-card-dark text-center space-y-8 border border-pink-500/30 shadow-2xl bg-black/40 backdrop-blur-md"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/20 text-[#FF4D8D] flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(255,77,141,0.5)]">
          <FaHeart className="animate-pulse" />
        </div>

        <h2 className="font-serif-playfair text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent leading-tight">
          Happy Girlfriend Day ❤️
        </h2>

        <p className="font-serif-playfair text-xl sm:text-3xl text-pink-100 font-light italic leading-relaxed">
          "Thank you for existing. I love you."
        </p>

        <div className="pt-6 border-t border-pink-500/20 flex flex-col items-center gap-2">
          <span className="font-sans-outfit text-xs font-semibold uppercase tracking-widest text-pink-300/70">
            Forever Yours
          </span>
          <div className="flex items-center gap-2 text-amber-200 text-xs">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
