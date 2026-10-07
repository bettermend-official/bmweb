"use client";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

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
        "For users, BetterMend brings the neighborhood right to their mobile screen. Features include flexible categorization, unified checkouts, and custom delivery configurations.",
      points: [
        "Checkout from up to 3 shops in one order.",
        "Browse by shop name or browse by specific product subcategories.",
        "Real-time GPS delivery tracking with direct agent communication.",
      ],
    },
    vendor: {
      title: "Empower Neighborhood Merchants",
      description:
        "Local shops get standard merchant tools to handle ordering, manage live inventories, set custom discounts, and review earnings dashboards.",
      points: [
        "Access centralized product catalogs for single-click stock management.",
        "Accept or reject orders based on dynamic real-time inventory levels.",
        "Clear financial analytics representing daily totals and payouts.",
      ],
    },
    delivery: {
      title: "Fair, Optimized Driver Earnings",
      description:
        "Delivery partners utilize a dedicated application with integrated maps, order multi-stop assignment, and fair distance pricing rules.",
      points: [
        "Transparent logistics pricing: Base ₹30 for 3.5 km, ₹5 extra per km.",
        "Mapbox and Google Maps navigation integrated natively.",
        "Flexible shifts — toggle availability when you want to take requests.",
      ],
    },
    manager: {
      title: "Local Sector Governance",
      description:
        "Sectors represent geographic zones governed by local Admins. They are responsible for vetting merchants, resolving zone disputes, and maintaining healthy service parameters.",
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
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight font-heading mb-3">
          One Platform, Four <br className="hidden sm:inline" /> Integrated Apps
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          Link customers, local merchants, delivery fleets, and sector managers together for one seamless regional marketplace.
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
              className={`px-5 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all ${isActive
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

          {/* Left: 3 Mobile App Screens Mockup (Significantly Enlarged Image inside same box) */}
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

          {/* Right: Content Text (Compact Spacing) */}
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
                  {pt}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
