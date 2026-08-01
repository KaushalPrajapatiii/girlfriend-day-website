"use client";

import { motion } from "motion/react";
import { MILESTONES } from "@/data/memories";

export default function StoryTimeline() {
  return (
    <section className="relative py-16 sm:py-32 px-4 w-full max-w-5xl mx-auto z-10">
      {/* Section Heading */}
      <div className="text-center space-y-4 mb-12 sm:mb-20">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]">
          Our Journey
        </span>

        <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]">
          The Story of Us
        </h2>

        <p className="font-sans-outfit text-gray-600 max-w-md mx-auto text-sm sm:text-base">
          Every milestone that brought two hearts together into one beautiful story.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Central Connecting Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF4D8D] via-[#FF7EB3] to-[#6A1B9A] -translate-x-1/2 opacity-40 rounded-full" />

        <div className="space-y-10 sm:space-y-24">
          {MILESTONES.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 1, y: 0 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#FF4D8D] shadow-[0_0_15px_rgba(255,77,141,0.4)] flex items-center justify-center text-lg z-20">
                  <span>{item.icon}</span>
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:px-6 mt-2 sm:mt-0">
                  <div className="p-6 sm:p-8 rounded-2xl glass-card hover:shadow-xl transition-shadow space-y-3 border border-white/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF4D8D] uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                    </div>

                    <h3 className="font-serif-playfair text-2xl font-bold text-[#222222]">
                      {item.title}
                    </h3>

                    <p className="font-sans-outfit text-sm font-semibold text-[#6A1B9A]">
                      {item.subtitle}
                    </p>

                    <p className="font-sans-outfit text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
