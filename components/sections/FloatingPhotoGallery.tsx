"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { POLAROID_PHOTOS } from "@/data/memories";

export default function FloatingPhotoGallery() {
  return (
    <section className="relative py-16 sm:py-24 px-4 w-full max-w-6xl mx-auto z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <span className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]">
          Snapshot Memories
        </span>

        <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]">
          Moments Frozen in Time
        </h2>

        <p className="font-sans-outfit text-gray-600 max-w-md mx-auto text-sm sm:text-base">
          Our cherished memories together.
        </p>
      </div>

      {/* Grid of Polaroid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-2">
        {POLAROID_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 1, y: 0, rotate: photo.rotation }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 30,
              boxShadow: "0 25px 50px -12px rgba(255, 77, 141, 0.35)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-4 pb-6 rounded-lg shadow-xl border border-pink-100/50 cursor-pointer transform transition-all group"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-gray-100 mb-4">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Polaroid Bottom Text */}
            <div className="text-center space-y-1 px-1">
              <h3 className="font-serif-playfair font-bold text-lg text-gray-800">
                {photo.title}
              </h3>
              <p className="font-handwriting text-xl text-[#FF4D8D]">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
