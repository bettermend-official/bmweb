"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import {
  FaCarSide,
  GrUserWorker,
  FaInternetExplorer,
  TbTruckDelivery,
} from "@/components/Icons";

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState("transportation");

  const allServices = [
    // 1. Transport
    {
      id: "transportation",
      num: "01",
      icon: FaCarSide,
      title: "Transport",
      image: "/trasport.jpeg",
      badge: "Instant Rides & Fleet",
      rating: "4.9",
      trips: "120K+ rides",
      tag: "BIKES, AUTOS, 4 & 7-SEATER CARS",
      shortDesc:
        "Convenient rides including bikes, autos, and 4-seater and 7-seater cars for daily commuting and local travel.",
      fullDesc:
        "BetterMend's intra-city and regional transportation network gives you instant access to verified local taxi operators, sedans, luxury passenger vans, and auto dispatches with zero surge pricing and live GPS telemetry.",
      features: [
        "Bikes, autos, prime sedans & 7-seater cars",
        "Instant 5-minute local sector dispatch",
        "Zero surge pricing on daily commuting",
        "Live turn-by-turn GPS telemetry & SOS support",
      ],
    },

    // 2. Workers
    {
      id: "workers",
      num: "02",
      icon: GrUserWorker,
      title: "Workers",
      image: "/worker.jpeg",
      badge: "Background Verified",
      rating: "4.9",
      trips: "85K+ jobs done",
      tag: "VERIFIED BLUE-COLLAR EXPERTS",
      shortDesc:
        "Verified electricians, plumbers, tutors, and freelancers available on demand, ensuring quality and trust.",
      fullDesc:
        "Solve household electrical, plumbing, carpentry, tutoring, and freelance technical requirements on demand. Every service professional on the BetterMend network is vetted by local Sector Admins and standardized on pricing.",
      features: [
        "Verified electricians, plumbers & freelancers",
        "On-demand emergency doorstep dispatch within 60 mins",
        "Fixed transparent rate cards for all services",
        "30-day post-service quality guarantee",
      ],
    },

    // 3. E-Services
    {
      id: "eservices",
      num: "03",
      icon: FaInternetExplorer,
      title: "E-Services",
      image: "/e service.jpeg",
      badge: "Citizen Utility Hub",
      rating: "4.9",
      trips: "250K+ bills settled",
      tag: "DIGITAL BILLS & CIVIC PORTAL",
      shortDesc:
        "E-governance, bill payments, bookings, and professional appointments all accessible through one unified app.",
      fullDesc:
        "One-stop digital hub for civic and public utility access. Handle electricity board payments (KSEB), water authority dues (KWA), municipal taxes, public certificates, and doctor/expert appointments without queues.",
      features: [
        "KSEB electricity, KWA water & municipal tax settlements",
        "E-governance registrations & civic document support",
        "Instant official digital receipts with zero extra fees",
        "Doctor & professional appointment scheduling",
      ],
    },

    // 4. Delivery
    {
      id: "delivery",
      num: "04",
      icon: TbTruckDelivery,
      title: "Delivery",
      image: "/delivery.jpeg",
      badge: "Multi-Shop Cart",
      rating: "4.9",
      trips: "500K+ orders delivered",
      tag: "10-30 MIN HYPERLOCAL DISPATCH",
      shortDesc:
        "Fast and reliable delivery of groceries, food, medicines, and essentials directly from local shops to users in 10-30 minutes.",
      fullDesc:
        "The revolutionary multi-vendor delivery feature: grab vegetables from Shop A, bakery snacks from Shop B, and medicine from Shop C in one checkout. A single delivery courier collects everything in sequence and delivers in 10-30 minutes.",
      features: [
        "Combine up to 3 neighborhood stores in 1 cart",
        "Guaranteed 10-30 minute doorstep delivery",
        "Fresh groceries, hot food & sealed pharmacy items",
        "Real-time live GPS courier rider telemetry",
      ],
    },
  ];

  const activeService =
    allServices.find((s) => s.id === activeServiceId) || allServices[0];

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">

      {/* 1. Navbar */}
      <Navbar activePage="services" />

      {/* 2. Hero Header Banner (Large & Impactful) */}
      <section className="pt-[80px] sm:pt-[105px] md:pt-[120px] pb-2 sm:pb-3 px-3 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">

          {/* Faded Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/heroimage.png"
              alt="Our Urban Services Background"
              fill
              priority
              className="object-cover object-right opacity-25 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030C54] via-[#030C54]/90 to-[#030C54]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030C54] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl text-left space-y-3 sm:space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-[72px] font-black uppercase tracking-tight leading-[1.0] font-heading font-montserrat">
              Our Urban <br /> Services
            </h1>
            <p className="text-xs sm:text-base lg:text-[19px] text-white/90 leading-relaxed font-roboto font-normal pt-1 max-w-2xl">
              From instant intra city rides to verified local technicians, digital public utilities, and multi vendor delivery explore all 4 core service tiers.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Interactive Split-Showcase Section (Clean Single-Screen Fit) */}
      <section className="py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden">

          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          {/* Section Header Bar */}
          <div className="mb-5 sm:mb-6 pb-3 border-b border-white/15 relative z-10 text-left">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase font-heading tracking-wide">
                Available Service Offerings
              </h2>
              <p className="text-xs sm:text-sm text-white/75 mt-1">
                Explore our 4 core urban service tiers. Click any offering to preview.
              </p>
            </div>
          </div>

          {/* Interactive 2-Column Showcase (Equal Height Alignment) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch relative z-10">

            {/* Left Column: 4 Service Selector Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 sm:gap-3">
              {allServices.map((svc) => {
                const IconComponent = svc.icon;
                const isActive = activeService.id === svc.id;

                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 border ${
                      isActive
                        ? "bg-white text-slate-900 shadow-xl border-white translate-x-1"
                        : "bg-white/5 hover:bg-white/10 text-white/90 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-[#030C54] text-white shadow-sm"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-black uppercase font-heading truncate">
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#030C54] text-white"
                            : "text-white/40"
                        }`}
                      >
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Featured Spotlight Preview Card (7 cols) */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-100 animate-fadeIn">

              {/* Spotlight Image Area */}
              <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              {/* Spotlight Body */}
              <div className="p-4.5 sm:p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-2xl font-black text-slate-950 font-heading">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-3 sm:mb-4 line-clamp-2">
                    {activeService.shortDesc}
                  </p>

                  {/* Features 2x2 grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-3 sm:mb-4">
                    {activeService.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                      >
                        <span className="truncate block">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spotlight Action Bar */}
                <div className="pt-3 sm:pt-3.5 border-t border-slate-100 flex items-center justify-start">
                  <Link
                    href={`/services/${activeService.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] cursor-pointer text-center"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. How It Works 3-Step Process (White Rounded Card) */}
      <section className="py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[38px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm text-slate-900">

          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase font-heading text-slate-950">
              How BetterMend Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-base sm:text-lg font-heading mb-3 sm:mb-4 shadow-md">
                1
              </div>
              <h4 className="text-sm sm:text-base font-black text-slate-950 mb-1.5 font-heading">
                Choose Service or Shop
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select a local ride, book verified technicians, or add items from up to 3 shops in a single checkout.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-base sm:text-lg font-heading mb-3 sm:mb-4 shadow-md">
                2
              </div>
              <h4 className="text-sm sm:text-base font-black text-slate-950 mb-1.5 font-heading">
                Instant Sector Dispatch
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our smart regional algorithm assigns the nearest available taxi driver, skilled worker, or courier.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-base sm:text-lg font-heading mb-3 sm:mb-4 shadow-md">
                3
              </div>
              <h4 className="text-sm sm:text-base font-black text-slate-950 mb-1.5 font-heading">
                Track Live & Pay Fair
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow real-time GPS coordinates on your phone, enjoy standardized pricing, and pay via UPI or Cards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}
