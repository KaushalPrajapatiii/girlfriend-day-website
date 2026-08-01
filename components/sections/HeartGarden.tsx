"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";

interface GardenElement {
  id: number;
  x: number;
  y: number;
  type: "flower" | "heart" | "butterfly" | "sparkle";
  symbol: string;
  size: number;
}

export default function HeartGarden() {
  const [elements, setElements] = useState<GardenElement[]>([]);
  const gardenRef = useRef<HTMLDivElement>(null);

  const handleGardenClick = (event: PointerEvent | MouseEvent | TouchEvent) => {
    if (!gardenRef.current) return;
    const rect = gardenRef.current.getBoundingClientRect();
    const point =
      "clientX" in event
        ? event
        : (event as TouchEvent).changedTouches[0];
    const x = point.clientX - rect.left;
    const y = point.clientY - rect.top;

    const symbols = [
      { type: "flower" as const, symbol: "🌸" },
      { type: "flower" as const, symbol: "🌷" },
      { type: "heart" as const, symbol: "💖" },
      { type: "butterfly" as const, symbol: "🦋" },
      { type: "sparkle" as const, symbol: "✨" },
    ];

    const count = Math.floor(Math.random() * 3) + 3;
    const newItems: GardenElement[] = [];

    for (let i = 0; i < count; i++) {
      const pick = symbols[Math.floor(Math.random() * symbols.length)];
      newItems.push({
        id: Date.now() + Math.random(),
        x: x + (Math.random() * 80 - 40),
        y: y + (Math.random() * 80 - 40),
        type: pick.type,
        symbol: pick.symbol,
        size: Math.floor(Math.random() * 24) + 20,
      });
    }

    setElements((prev) => [...prev.slice(-40), ...newItems]);
  };

  return (
    <section className="relative py-24 px-4 w-full max-w-5xl mx-auto z-10">
      <div className="text-center space-y-4 mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]"
        >
          Interactive Canvas
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]"
        >
          The Garden of Our Love
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans-outfit text-gray-600 max-w-md mx-auto"
        >
          Click anywhere in the meadow below to bloom flowers, release butterflies, and sprinkle sparkles.
        </motion.p>
      </div>

      {/* Interactive Garden Box */}
      <motion.div
        ref={gardenRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onTap={handleGardenClick}
        className="relative h-96 sm:h-[450px] w-full rounded-3xl glass-card overflow-hidden cursor-crosshair touch-manipulation border border-pink-200/80 shadow-2xl flex items-center justify-center select-none"
      >
        <div className="text-center space-y-2 pointer-events-none opacity-40">
          <p className="font-serif-playfair text-2xl text-pink-700 font-semibold">
            ✨ Click to plant love here ✨
          </p>
          <p className="font-sans-outfit text-xs text-gray-500">
            Flowers, hearts, and butterflies bloom wherever you click.
          </p>
        </div>

        {/* Bloomed Elements */}
        <AnimatePresence>
          {elements.map((item) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0,
                x: item.x - item.size / 2,
                y: item.y - item.size / 2,
              }}
              animate={{
                opacity: [0, 1, 0.9],
                scale: [0, 1.4, 1],
                y: item.type === "butterfly" || item.type === "heart" ? item.y - 40 : item.y,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute pointer-events-none drop-shadow-md"
              style={{
                left: 0,
                top: 0,
                fontSize: `${item.size}px`,
              }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
