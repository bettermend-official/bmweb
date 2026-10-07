"use client";
import { useState } from "react";
import Image from "next/image";

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState("user");

  const tabs = [
    { id: "user", label: "USER APP" },
    { id: "vendor", label: "VENDOR APP" },
    { id: "delivery", label: "DELIVERY PARTNER" },
    { id: "manager", label: "SECTOR MANAGER" },
  ];

  const content = {
    user: {
      title: "Tailored Shopping Experience",
      description:
        "BetterMend brings nearby shops and everyday essentials to your phone. Browse products by category, add items from multiple shops to one cart, and complete your purchase with a single checkout.",
      points: [
        "Track your delivery in real time with live GPS updates from your delivery partner.",
      ],
    },
    vendor: {
      title: "Empower Neighborhood Merchants",
      description:
        "BetterMend helps neighborhood merchants manage orders, products, and earnings in one place.",
      points: [
        "Manage products and stock using a shared product catalog.",
        "Accept or reject orders based on current stock.",
        "Create discounts and offers for customers.",
        "Review sales, earnings, and payouts in a clear dashboard.",
      ],
    },
    delivery: {
      title: "Fair, Optimized Driver Earnings",
      description:
        "The BetterMend delivery partner app helps drivers manage deliveries and navigate efficiently.",
      points: [
        "See clear pricing based on delivery distance.",
        "Get delivery requests with routes planned for multiple stops.",
        "Use integrated map navigation to find destinations.",
        "Choose when to go online and receive delivery requests.",
      ],
    },
    manager: {
      title: "Sector Governance",
      description:
        "Sectors represent geographic sectors governed by Admins. They are responsible for vetting merchants, resolving sector disputes, and maintaining healthy service parameters.",
      points: [
        "Onboard local shops and approve catalog pricing lists.",
        "Monitor active deliveries and assign sector backups if issues arise.",
        "Sector map polygon definitions for custom regional delivery rules.",
      ],
    },
  };

  const current = content[activeTab];

  return (
    <section id="ecosystem" className="py-8 px-4 sm:px-6 w-full max-w-[1302px] mx-auto">

      {/* Header Info */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight font-heading mb-3">
          One Platform, Four <br className="hidden sm:inline" /> Integrated Apps
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans mb-2 font-medium">
          BetterMend is built around a simple idea: the services people use every day should be easier to find, easier to access and easier to manage. From transportation and local delivery to skilled professionals and essential digital services, BetterMend brings different parts of everyday life together in one connected ecosystem. Simple is better.
        </p>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
          One platform. Multiple services. One simpler experience.
        </p>
      </div>

      {/* 4 Tabs Pill Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all cursor-pointer ${isActive
                  ? "bg-[#030C54] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Deep Navy Hero Card (Compact Height) */}
      <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[37px] py-5 sm:py-6 lg:py-6 px-6 sm:px-10 lg:px-12 text-white shadow-2xl overflow-hidden w-full lg:min-h-[350px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

          {/* Left: 3 Mobile App Screens Mockup */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[340px] lg:h-[370px] -my-2 sm:-my-4 lg:-my-6 flex items-center justify-center">
            <div className="relative w-full h-full scale-110 sm:scale-120 lg:scale-130 xl:scale-135 transform origin-center transition-transform duration-300">
              <Image
                src="/experience.png"
                alt="BetterMend App UI Mockup"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Content Text */}
          <div className="lg:col-span-6 space-y-3.5 text-left lg:pl-2">
            <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-black font-heading text-white tracking-tight leading-tight">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
              {current.description}
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
              {current.points.map((pt, idx) => (
                <p key={idx} className="block">
                  • {pt}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
