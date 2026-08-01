"use client";

import { motion } from "motion/react";
import { PROMISES } from "@/data/promises";

export default function PromiseSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 w-full max-w-4xl mx-auto z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]">
          Sacred Vows
        </span>

        <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]">
          My Promises to You
        </h2>

        <p className="font-sans-outfit text-gray-600 max-w-md mx-auto text-sm sm:text-base">
          Written from the bottom of my heart, set in stone for our future.
        </p>
      </div>

      {/* Notebook Paper Sheet Container */}
      <div className="notebook-paper p-6 sm:p-14 rounded-3xl border border-amber-200/80 space-y-8 sm:space-y-10 relative overflow-hidden">
        {/* Red Vertical Margin Line indicator */}
        <div className="absolute top-0 bottom-0 left-8 sm:left-14 w-0.5 bg-rose-300/60" />

        {PROMISES.map((item) => (
          <div key={item.id} className="pl-6 sm:pl-10 space-y-2 relative">
            <div className="flex items-center gap-3">
              <span className="font-serif-playfair text-xs sm:text-sm font-bold text-[#FF4D8D] bg-pink-100 px-2 py-0.5 rounded">
                Promise {item.number}
              </span>
              <h3 className="font-serif-playfair text-lg sm:text-2xl font-bold text-[#222222]">
                {item.title}
              </h3>
            </div>

            <p className="font-handwriting text-xl sm:text-3xl text-indigo-950 leading-relaxed pt-1">
              "{item.promise}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
