"use client";

import { FaHeart, FaStar, FaFeather, FaInfinity } from "react-icons/fa6";

export default function LoveDoodlesSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 w-full max-w-5xl mx-auto text-center z-10">
      {/* Background Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-[#FF4D8D]/20 via-[#FF7EB3]/15 to-[#6A1B9A]/20 blur-3xl pointer-events-none -translate-x-1/2 left-1/2" />

      {/* Main Glass Card with Doodles */}
      <div className="relative p-8 sm:p-16 rounded-3xl glass-card border border-pink-200/90 shadow-2xl space-y-8 bg-white/95 overflow-hidden">
        {/* Floating Doodle Icons in Corners */}
        <div className="absolute top-4 left-6 text-pink-400/80 text-xl sm:text-2xl animate-pulse">
          <FaStar />
        </div>
        <div className="absolute top-6 right-8 text-[#FF4D8D]/80 text-xl sm:text-2xl animate-bounce">
          <FaHeart />
        </div>
        <div className="absolute bottom-6 left-8 text-purple-400/80 text-xl sm:text-2xl animate-bounce">
          <FaInfinity />
        </div>
        <div className="absolute bottom-4 right-6 text-rose-400/80 text-xl sm:text-2xl animate-pulse">
          <FaFeather />
        </div>

        {/* Handcrafted SVG Doodle Sparkle Lines */}
        <div className="flex justify-center items-center gap-3 text-[#FF4D8D]">
          <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#FF4D8D]" />
          <FaHeart className="w-6 h-6 animate-ping text-[#FF4D8D]" />
          <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#FF4D8D]" />
        </div>

        {/* Bold Pink Message */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif-playfair text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF4D8D] via-[#FF7EB3] to-[#6A1B9A] bg-clip-text text-transparent leading-tight tracking-tight uppercase">
            You Are My Favorite Part of Every Single Day ✨
          </h2>

          <p className="font-sans-outfit text-base sm:text-xl text-gray-700 font-medium leading-relaxed pt-2">
            In a room full of art, I would still stare at you. Thank you for being my home, my laugh, and my favorite person in the entire world.
          </p>
        </div>

        {/* 3 Cute Handwritten Doodle Quote Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-pink-50/90 border border-pink-200/70 shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF4D8D]">
              <FaHeart className="w-3 h-3" />
              <span>Doodle Note #1</span>
            </div>
            <p className="font-handwriting text-lg sm:text-xl text-gray-800">
              "Forever isn't long enough when I'm spending it with you."
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/90 border border-purple-200/70 shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#6A1B9A]">
              <FaStar className="w-3 h-3" />
              <span>Doodle Note #2</span>
            </div>
            <p className="font-handwriting text-lg sm:text-xl text-gray-800">
              "My heart is and always will be yours."
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/90 border border-rose-200/70 shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500">
              <FaHeart className="w-3 h-3" />
              <span>Doodle Note #3</span>
            </div>
            <p className="font-handwriting text-lg sm:text-xl text-gray-800">
              "You make my world infinitely brighter every single second."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
