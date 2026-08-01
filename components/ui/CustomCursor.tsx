"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TrailHeart {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<TrailHeart[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail item occasionally
      if (Math.random() > 0.6) {
        const newTrail: TrailHeart = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setTrails((prev) => [...prev.slice(-12), newTrail]);
      }

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "BUTTON" || target.tagName === "A" || target.closest(".cursor-pointer"))) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden sm:block">
      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[#FF4D8D] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 shadow-[0_0_10px_rgba(255,77,141,0.5)]"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(255,77,141,0.2)" : "rgba(255,77,141,0.05)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Heart Cursor Trails */}
      {trails.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.8, scale: 0.8, x: t.x - 6, y: t.y - 6 }}
          animate={{ opacity: 0, scale: 0.2, y: t.y - 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed text-[10px] text-[#FF4D8D] pointer-events-none"
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
