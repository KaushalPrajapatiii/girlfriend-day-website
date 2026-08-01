"use client";

import { useState, useRef } from "react";
import { FaMusic, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112185.mp3"
      />
      <button
        onClick={toggleAudio}
        className="w-12 h-12 rounded-full glass-pill flex items-center justify-center text-[#FF4D8D] shadow-lg border border-pink-200 hover:scale-110 transition-transform cursor-pointer"
        aria-label="Toggle background romantic music"
        title={isPlaying ? "Mute Background Music" : "Play Romantic Background Music"}
      >
        {isPlaying ? (
          <FaVolumeUp className="w-5 h-5 animate-pulse" />
        ) : (
          <FaVolumeMute className="w-5 h-5 text-gray-400" />
        )}
      </button>
    </div>
  );
}
