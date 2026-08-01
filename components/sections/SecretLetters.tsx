"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { SECRET_MESSAGES, SecretMessage } from "@/data/messages";
import { FaEnvelope, FaEnvelopeOpen, FaTimes, FaHeart } from "react-icons/fa";

export default function SecretLetters() {
  const [selectedMessage, setSelectedMessage] = useState<SecretMessage | null>(null);

  return (
    <section className="relative py-24 px-4 w-full max-w-6xl mx-auto z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]"
        >
          Sealed With Love
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]"
        >
          Secret Envelopes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans-outfit text-gray-600 max-w-md mx-auto"
        >
          Click any floating envelope to unseal a private heartfelt message written just for you.
        </motion.p>
      </div>

      {/* Grid of Floating Envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SECRET_MESSAGES.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onTap={() => setSelectedMessage(msg)}
            className="p-8 rounded-3xl glass-card cursor-pointer touch-manipulation flex flex-col items-center justify-center space-y-4 text-center border border-white/80 group hover:border-[#FF4D8D]/50 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF4D8D] to-[#FF7EB3] flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#6A1B9A] uppercase tracking-wider">
                Letter #{msg.id}
              </span>
              <h3 className="font-serif-playfair text-xl font-bold text-[#222222]">
                {msg.preview}
              </h3>
            </div>

            <span className="text-xs font-medium text-pink-500 flex items-center gap-1">
              <span>Open Letter</span> &rarr;
            </span>
          </motion.div>
        ))}
      </div>

      {/* Opened Envelope Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-white shadow-2xl border border-pink-200 space-y-6 text-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer touch-manipulation"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 text-[#FF4D8D] flex items-center justify-center text-2xl">
                <FaEnvelopeOpen />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#FF4D8D] uppercase tracking-widest">
                  From: {selectedMessage.sender}
                </span>
                <h3 className="font-serif-playfair text-2xl font-bold text-[#222222]">
                  {selectedMessage.preview}
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 font-sans-outfit text-gray-700 leading-relaxed text-sm sm:text-base text-left italic">
                "{selectedMessage.content}"
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-pink-600">
                <FaHeart className="w-3.5 h-3.5 text-[#FF4D8D]" />
                <span>Sealed with an eternal kiss</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
