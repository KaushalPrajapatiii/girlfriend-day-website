"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { REASONS } from "@/data/reasons";
import { FaHeart, FaSyncAlt } from "react-icons/fa";

export default function ReasonsSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative py-24 px-4 w-full max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]"
        >
          100 Reasons
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]"
        >
          Why I Love You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans-outfit text-gray-600 max-w-md mx-auto"
        >
          Click any card to flip it open and discover another reason why you mean the world to me.
        </motion.p>
      </div>

      {/* Grid of 100 3D Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {REASONS.map((item) => {
          const isFlipped = flippedCards[item.id] || false;

          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="h-44 w-full cursor-pointer touch-manipulation perspective-1000 group"
            >
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-full h-full rounded-2xl transition-all duration-300 transform-style-3d shadow-md hover:shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl glass-card border border-pink-200/80 p-5 flex flex-col items-center justify-center space-y-3 backface-hidden select-none"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-10 h-10 rounded-full bg-pink-100/80 text-[#FF4D8D] flex items-center justify-center font-bold text-sm">
                    #{item.id}
                  </div>
                  <span className="font-serif-playfair text-sm font-semibold text-gray-700 text-center">
                    Reason #{item.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-pink-500 font-medium">
                    <FaSyncAlt className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Tap to reveal</span>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#FF4D8D] via-[#FF7EB3] to-[#6A1B9A] text-white p-5 flex flex-col items-center justify-center text-center backface-hidden select-none"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <FaHeart className="w-5 h-5 mb-2 text-white/90 animate-bounce" />
                  <p className="font-sans-outfit text-xs sm:text-sm font-medium leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
