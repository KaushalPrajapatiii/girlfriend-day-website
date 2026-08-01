"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getCalculatedTime = (): TimeElapsed => {
  // Start Date: May 13th, 2026 (Month index 4 = May)
  const start = new Date(2026, 4, 13, 0, 0, 0).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
};

export default function LoveCounter() {
  const [time, setTime] = useState<TimeElapsed>(getCalculatedTime);

  useEffect(() => {
    setTime(getCalculatedTime());

    const timer = setInterval(() => {
      setTime(getCalculatedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative py-16 sm:py-20 px-4 w-full max-w-4xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        className="p-6 sm:p-12 rounded-3xl glass-card text-center space-y-8 border border-white/90 shadow-xl bg-white/90"
      >
        <div className="space-y-3">
          <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]">
            Time Together
          </span>
          <h2 className="font-serif-playfair text-3xl sm:text-4xl font-bold text-[#222222]">
            Loving You Every Second
          </h2>
          <p className="font-sans-outfit text-gray-600 text-sm sm:text-base">
            Every single second since 13th May 2026 has been pure bliss.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-pink-200/80 shadow-md flex flex-col items-center justify-center space-y-1"
            >
              <span className="font-serif-playfair text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FF4D8D] to-[#6A1B9A] bg-clip-text text-transparent">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-sans-outfit text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
