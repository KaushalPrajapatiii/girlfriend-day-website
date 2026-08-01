"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaHeart, FaLock, FaUnlock, FaBackspace } from "react-icons/fa";

interface PasscodeLockProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: PasscodeLockProps) {
  const CORRECT_PIN = "120526";
  const [pin, setPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isError, setIsError] = useState(false);

  const unlockVault = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  const handleKeyPress = (num: string) => {
    if (pin.length >= 6 || isUnlocked) return;
    const nextPin = pin + num;
    setPin(nextPin);
    setIsError(false);

    if (nextPin.length === 6) {
      if (nextPin === CORRECT_PIN) {
        unlockVault();
      } else {
        setIsError(true);
        setTimeout(() => {
          setPin("");
          setIsError(false);
        }, 700);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setIsError(false);
  };

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8FC] via-[#FFEAF4] to-[#F7E6FF] text-[#222222] px-4 touch-manipulation"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 bg-[#FF4D8D]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

          {/* Passcode Box */}
          <motion.div
            animate={isError ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-xs sm:max-w-sm p-6 sm:p-8 rounded-3xl bg-white/95 border border-white/90 shadow-2xl text-center space-y-5 sm:space-y-6"
          >
            {/* Header Lock Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-tr from-[#FF4D8D] to-[#FF7EB3] text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg animate-bounce pointer-events-none">
              {isUnlocked ? <FaUnlock /> : <FaLock />}
            </div>

            <div className="space-y-1">
              <h2 className="font-serif-playfair text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF4D8D] via-[#FF7EB3] to-[#6A1B9A] bg-clip-text text-transparent tracking-widest uppercase">
                SURPRISE ✨
              </h2>
              <p className="font-sans-outfit text-xs text-pink-700/80 font-medium">
                Enter the date we first met (DDMMYY) ❤️
              </p>
            </div>

            {/* PIN Dots Display */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 py-1 sm:py-2">
              {Array.from({ length: 6 }).map((_, i) => {
                const isFilled = i < pin.length;
                return (
                  <motion.div
                    key={i}
                    animate={{ scale: isFilled ? 1.2 : 1 }}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-colors ${
                      isFilled
                        ? "bg-[#FF4D8D] border-[#FF4D8D] shadow-[0_0_10px_rgba(255,77,141,0.6)]"
                        : isError
                        ? "bg-rose-500 border-rose-500"
                        : "border-pink-300 bg-white/50"
                    }`}
                  >
                    {isFilled && <FaHeart className="w-2 h-2 sm:w-2.5 sm:h-2.5 mx-auto text-white mt-0.5" />}
                  </motion.div>
                );
              })}
            </div>

            {/* Error Message */}
            {isError && (
              <p className="text-xs font-bold text-rose-500 animate-pulse">
                Incorrect date! Try again baby 💕
              </p>
            )}

            {/* Numpad Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                <button
                  key={num}
                  type="button"
                  onPointerDown={() => handleKeyPress(num)}
                  className="w-14 h-14 mx-auto rounded-full bg-white/90 hover:bg-[#FF4D8D] hover:text-white text-[#222222] font-serif-playfair text-xl font-bold border border-pink-200/80 shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none touch-manipulation"
                >
                  {num}
                </button>
              ))}

              <div className="w-14 h-14" />

              <button
                type="button"
                onPointerDown={() => handleKeyPress("0")}
                className="w-14 h-14 mx-auto rounded-full bg-white/90 hover:bg-[#FF4D8D] hover:text-white text-[#222222] font-serif-playfair text-xl font-bold border border-pink-200/80 shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none touch-manipulation"
              >
                0
              </button>

              <button
                type="button"
                onPointerDown={handleBackspace}
                className="w-14 h-14 mx-auto rounded-full bg-pink-100 hover:bg-pink-200 text-[#FF4D8D] font-bold border border-pink-200/80 shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none touch-manipulation"
                title="Backspace"
              >
                <FaBackspace className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
