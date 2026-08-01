"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { FaHeart, FaTimes, FaGift } from "react-icons/fa";

export default function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleButtonClick = () => {
    // Screen Shake effect trigger
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);

    // Trigger Canvas Confetti & Fireworks
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#FF4D8D", "#FF7EB3", "#6A1B9A", "#FFD700", "#FF1493"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    setIsOpen(true);
  };

  return (
    <section className={`relative py-24 px-4 w-full max-w-4xl mx-auto text-center z-10 ${isShaking ? "animate-bounce" : ""}`}>
      <div className="p-8 sm:p-16 rounded-3xl glass-card border border-pink-200 shadow-2xl space-y-8">
        <div className="space-y-3">
          <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]">
            Curiosity Warning
          </span>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]">
            One Final Secret
          </h2>
          <p className="font-sans-outfit text-gray-600 max-w-md mx-auto">
            You were specifically told not to push this button... but will you risk it anyway?
          </p>
        </div>

        {/* Large Glowing Secret Button */}
        <div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#FF4D8D] via-[#FF7EB3] to-[#6A1B9A] text-white font-bold text-xl sm:text-2xl shadow-[0_0_30px_rgba(255,77,141,0.6)] hover:shadow-[0_0_50px_rgba(255,77,141,0.9)] hover:scale-105 active:scale-95 transition-all cursor-pointer touch-manipulation flex items-center justify-center gap-3 mx-auto"
          >
            <FaGift className="w-7 h-7 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Don't Click Me! 💖</span>
          </button>
        </div>
      </div>

      {/* Cute Surprise Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full p-8 sm:p-10 rounded-3xl bg-white shadow-2xl border-2 border-pink-300 text-center space-y-6"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#FF4D8D] to-[#FF7EB3] text-white flex items-center justify-center text-3xl shadow-xl animate-bounce">
                <FaHeart />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-playfair text-3xl font-bold text-[#222222]">
                  I Knew You Couldn't Resist!
                </h3>
                <p className="font-sans-outfit text-gray-600 leading-relaxed text-sm sm:text-base">
                  You caught the secret surprise! You are the most curious, beautiful, and amazing girlfriend in the entire world.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-pink-50 text-[#FF4D8D] font-bold text-sm">
                🎉 Reward: 1,000,000 Unlimited Hugs & Kisses Redeemable Forever!
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-full bg-[#FF4D8D] hover:bg-[#FF2A74] text-white font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                Accept Reward & Close ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
