"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaChevronDown, FaHeart } from "react-icons/fa";

export default function HeroSection() {
  const fullText = "Happy Girlfriend Day ❤️";
  const [typedText, setTypedText] = useState(fullText);

  useEffect(() => {
    // Start empty and type fast, fallback to full text
    setTypedText("");
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden z-10">
      {/* Background Radial Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-300/30 via-rose-200/20 to-purple-300/20 blur-[130px] pointer-events-none" />

      {/* Main Glass Content Card */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        className="relative max-w-4xl w-full mx-auto p-6 sm:p-14 rounded-3xl glass-card text-center space-y-6 sm:space-y-8"
      >
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-medium text-[#FF4D8D]">
          <FaHeart className="w-3.5 h-3.5 animate-pulse text-[#FF4D8D]" />
          <span>Made Especially For You</span>
        </div>

        {/* Typing Headline */}
        <h1 className="font-serif-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#222222]">
          {typedText || fullText}
        </h1>

        {/* Subheading */}
        <p className="font-sans-outfit text-lg sm:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
          This website was made for only <span className="font-semibold text-[#FF4D8D]">one person</span> in the universe.
        </p>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-10 flex flex-col items-center gap-2 text-pink-600/80 hover:text-[#FF4D8D] transition-colors cursor-pointer group"
        aria-label="Scroll down to begin our love story"
      >
        <span className="font-sans-outfit text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
        <div className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center border border-pink-200 group-hover:scale-110 transition-transform shadow-sm">
          <FaChevronDown className="w-3.5 h-3.5" />
        </div>
      </button>
    </section>
  );
}
