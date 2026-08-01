"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";
import { VIDEO_HIGHLIGHTS, VideoHighlight } from "@/data/videos";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaHeart } from "react-icons/fa";

interface VideoCardProps {
  item: VideoHighlight;
  index: number;
}

function VideoCard({ item, index }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onTap={togglePlay}
      className="relative rounded-3xl overflow-hidden glass-card border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer touch-manipulation aspect-[9/16] w-full max-w-xs mx-auto"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Top Tag & Mute Control */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider border border-white/30">
          {item.tag}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/30 hover:bg-black/60 transition-colors cursor-pointer touch-manipulation"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4 text-pink-400" />}
        </button>
      </div>

      {/* Center Play Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center text-xl shadow-2xl group-hover:scale-110 transition-transform border border-white/40">
            <FaPlay className="ml-1" />
          </div>
        </div>
      )}

      {/* Bottom Info & Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 text-white">
        <div className="flex items-center gap-2">
          <FaHeart className="w-4 h-4 text-[#FF4D8D] animate-pulse" />
        </div>

        <h3 className="font-serif-playfair text-xl font-bold">
          {item.title}
        </h3>

        <p className="font-sans-outfit text-xs text-gray-200 font-light line-clamp-2">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoHighlights() {
  return (
    <section className="relative py-24 px-4 w-full max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-[#FF4D8D]"
        >
          Moving Memories
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#222222]"
        >
          Video Highlights Reel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans-outfit text-gray-600 max-w-md mx-auto"
        >
          Tap any reel card to watch your beautiful smiles and precious moments come alive in motion.
        </motion.p>
      </div>

      {/* Grid of Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {VIDEO_HIGHLIGHTS.map((video, index) => (
          <VideoCard key={video.id} item={video} index={index} />
        ))}
      </div>
    </section>
  );
}
