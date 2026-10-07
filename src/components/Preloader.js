"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing BetterMend...");
  const [fadeExit, setFadeExit] = useState(false);

  useEffect(() => {
    // 1. Preload key critical images in background during loading
    const criticalImages = [
      "/heroimage.png",
      "/phlotofbettermend.jpg",
      "/vision_mission_city.jpg",
      "/ecosystem_user_app.jpg",
      "/ecosystem_control_room.jpg",
      "/ecosystem_delivery_rider.jpg",
      "/ecosystem_merchant_pos.jpg",
      "/ecosystem_local_community.jpg",
      "/experience.png",
      "/transpot.png",
      "/delivery.png",
      "/eservice.png",
      "/workers.png",
      "/bettermend wordmark.png",
      "/logo.png",
    ];

    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    // 2. Smooth 5-second progress counter (5000ms total duration)
    const startTime = Date.now();
    const duration = 5000; // 5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(calculatedProgress);

      if (calculatedProgress < 30) {
        setStatusText("Initializing hyperlocal network...");
      } else if (calculatedProgress < 65) {
        setStatusText("Optimizing regional services & assets...");
      } else if (calculatedProgress < 95) {
        setStatusText("Connecting smart infrastructure...");
      } else {
        setStatusText("Welcome to BetterMend");
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setFadeExit(true);
        setTimeout(() => {
          setLoading(false);
        }, 700); // Allow fade-out transition to complete
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020617] text-white select-none transition-all duration-700 ease-out ${
        fadeExit ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#030C54]/60 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/15 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Center Preloader Content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center space-y-8">
        
        {/* Brand Wordmark with breathing glow animation */}
        <div className="relative h-12 sm:h-14 w-52 sm:w-60 flex items-center justify-center">
          <Image
            src="/bettermend wordmark.png"
            alt="BetterMend"
            fill
            priority
            className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] animate-pulse"
          />
        </div>

        {/* Dynamic Progress Bar Box */}
        <div className="w-full space-y-3">
          
          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-[#38bdf8] rounded-full transition-all duration-75 ease-linear shadow-[0_0_15px_rgba(56,189,248,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage & Status Text */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 font-medium">
            <span className="text-slate-300">{statusText}</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>

        </div>

        {/* Sleek Subtitle Tag */}
        <div className="flex items-center gap-2 text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping inline-block" />
          <span>Building Smarter Rurban Services</span>
        </div>

      </div>
    </div>
  );
}
