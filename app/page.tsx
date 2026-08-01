"use client";

import { useState } from "react";
import LenisProvider from "@/components/ui/LenisProvider";
import BackgroundParticles from "@/components/ui/BackgroundParticles";
import CustomCursor from "@/components/ui/CustomCursor";
import AudioPlayer from "@/components/ui/AudioPlayer";

import LoadingScreen from "@/components/sections/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import StoryTimeline from "@/components/sections/StoryTimeline";
import FloatingPhotoGallery from "@/components/sections/FloatingPhotoGallery";
import VideoHighlights from "@/components/sections/VideoHighlights";
import LoveCounter from "@/components/sections/LoveCounter";
import ReasonsSection from "@/components/sections/ReasonsSection";
import HeartGarden from "@/components/sections/HeartGarden";
import SecretLetters from "@/components/sections/SecretLetters";
import PromiseSection from "@/components/sections/PromiseSection";
import FinalLetter from "@/components/sections/FinalLetter";
import FinalSurprise from "@/components/sections/FinalSurprise";
import EndingSection from "@/components/sections/EndingSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#FFF8FC] font-sans-outfit antialiased selection:bg-[#FF4D8D]/20 overflow-x-hidden">
        {/* Passcode Lock Screen Overlay */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {/* Custom Heart Cursor & Ambient Background */}
        <CustomCursor />
        <BackgroundParticles />
        <AudioPlayer />

        {/* Main One-Scroll Experience */}
        <main className="relative z-10 space-y-12 sm:space-y-20 pb-10">
          <HeroSection />
          <StoryTimeline />
          <FloatingPhotoGallery />
          <VideoHighlights />
          <LoveCounter />
          <ReasonsSection />
          <HeartGarden />
          <SecretLetters />
          <PromiseSection />
          <FinalLetter />
          <FinalSurprise />
          <EndingSection />
        </main>
      </div>
    </LenisProvider>
  );
}
