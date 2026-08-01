"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function FinalLetter() {
  const fullText = `My dearest love,\n\nWords often fall short when I try to explain how much you mean to me. From the moment you entered my life, everything took on brighter colors, sweeter melodies, and deeper meaning. You are my confidante, my biggest supporter, and my best friend.\n\nThank you for every smile you've given me, every warm hug, and every quiet moment we've shared. On this Girlfriend Day, I want to remind you that my love for you grows stronger with every passing sunrise.\n\nHere's to us, our endless laughs, and a lifetime of beautiful memories together.\n\nWith all my love, forever & always. ❤️`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-4 w-full max-w-3xl mx-auto z-10">
      <div className="text-center space-y-4 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]"
        >
          Personal Note
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]"
        >
          My Letter to You
        </motion.h2>
      </div>

      {/* Unfolding Digital Letter Sheet */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#FFFDF9] p-8 sm:p-14 rounded-3xl border border-amber-200 shadow-2xl space-y-6 relative overflow-hidden text-left"
      >
        <div className="flex items-center justify-between border-b border-pink-200/60 pb-4 mb-6">
          <div className="flex items-center gap-2 text-[#FF4D8D]">
            <FaHeart className="w-5 h-5 animate-pulse" />
            <span className="font-serif-playfair font-semibold text-lg text-gray-800">
              For My Soulmate
            </span>
          </div>
          <span className="font-sans-outfit text-xs font-medium text-gray-400">
            Happy Girlfriend Day
          </span>
        </div>

        {/* Typed Handwriting Text */}
        <div className="font-handwriting text-2xl sm:text-3xl text-gray-800 leading-relaxed whitespace-pre-line min-h-[300px]">
          {displayedText}
          <span className="inline-block w-1.5 h-7 ml-1 bg-[#FF4D8D] animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
