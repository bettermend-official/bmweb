"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import {
  Car,
  Wrench,
  ShoppingBag,
  CheckCircle2,
  Star,
  ArrowRight,
  X,
  Sparkles,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState("transportation");
  const [activeModal, setActiveModal] = useState(null);
  const [toast, setToast] = useState(null);

  const allServices = [
    // 1. Transport
    {
      id: "transportation",
      num: "01",
      icon: Car,
      title: "Transport",
      image: "/transpot.png",
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
      icon: Wrench,
      title: "Workers",
      image: "/workers.png",
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
      icon: Globe,
      title: "E-Services",
      image: "/eservice.png",
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
      icon: ShoppingBag,
      title: "Delivery",
      image: "/delivery.png",
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

  const handleBookNow = (serviceName) => {
    setActiveModal(null);
    setToast({
      message: `Booking request initiated for ${serviceName}! Please check the mobile app to confirm dispatch.`,
      type: "success",
    });
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Navbar */}
      <Navbar activePage="services" />

      {/* 2. Hero Header Banner (Large & Impactful) */}
      <section className="pt-[105px] sm:pt-[125px] pb-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
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

          <div className="relative z-10 max-w-3xl text-left space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black uppercase tracking-tight leading-[1.0] font-heading font-montserrat">
              Our Urban <br /> Services
            </h1>
            <p className="text-sm sm:text-lg lg:text-[19px] text-white/90 leading-relaxed font-roboto font-normal pt-1 max-w-2xl">
              From instant intra-city rides to verified local technicians, digital public utilities, and multi-vendor delivery—explore all 4 core service tiers.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Interactive Split-Showcase Section (Clean Single-Screen Fit) */}
      <section className="py-3 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden">
          
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          {/* Section Header Bar */}
          <div className="mb-6 pb-3 border-b border-white/15 relative z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-wide">
                Available Service Offerings
              </h2>
              <p className="text-xs sm:text-sm text-white/75 mt-1">
                Explore our 4 core urban service tiers. Click any offering to preview.
              </p>
            </div>
          </div>

          {/* Interactive 2-Column Showcase (Equal Height Alignment) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch relative z-10">
            
            {/* Left Column: 4 Service Selector Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              {allServices.map((svc) => {
                const IconComponent = svc.icon;
                const isActive = activeService.id === svc.id;

                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`w-full p-4 sm:p-4.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 border ${
                      isActive
                        ? "bg-white text-slate-900 shadow-xl border-white translate-x-1"
                        : "bg-white/5 hover:bg-white/10 text-white/90 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-[#030C54] text-white shadow-sm"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[11px] font-mono font-bold ${isActive ? "text-blue-600" : "text-white/40"}`}>
                            {svc.num}
                          </span>
                          <h3 className="text-sm sm:text-base font-black uppercase font-heading truncate">
                            {svc.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
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
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-[28px] overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-100 animate-fadeIn">
              
              {/* Spotlight Image Area */}
              <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Spotlight Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-2xl font-black text-slate-950 font-heading">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4 line-clamp-2">
                    {activeService.shortDesc}
                  </p>

                  {/* Features 2x2 grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {activeService.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                      >
                        <span className="truncate block">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spotlight Action Bar */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-start">
                  <button
                    onClick={() => setActiveModal(activeService)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. How It Works 3-Step Process (White Rounded Card) */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-8 sm:p-12 border border-slate-200/80 shadow-sm text-slate-900">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950">
              How BetterMend Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-lg font-heading mb-4 shadow-md">
                1
              </div>
              <h4 className="text-base font-black text-slate-950 mb-1.5 font-heading">
                Choose Service or Shop
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select a local ride, book verified technicians, or add items from up to 3 shops in a single checkout.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-lg font-heading mb-4 shadow-md">
                2
              </div>
              <h4 className="text-base font-black text-slate-950 mb-1.5 font-heading">
                Instant Sector Dispatch
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our smart regional algorithm assigns the nearest available taxi driver, skilled worker, or courier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#030C54] text-white flex items-center justify-center font-black text-lg font-heading mb-4 shadow-md">
                3
              </div>
              <h4 className="text-base font-black text-slate-950 mb-1.5 font-heading">
                Track Live & Pay Fair
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow real-time GPS coordinates on your phone, enjoy standardized pricing, and pay via UPI or Cards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Detail Modal Dialog */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-white text-slate-900 border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Header info */}
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="text-2xl font-black font-heading text-slate-950">
                {activeModal.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {activeModal.fullDesc}
            </p>

            {/* Detailed Features list */}
            <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                Included Features & Standards
              </span>
              {activeModal.features.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => handleBookNow(activeModal.title)}
                className="w-full py-3 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Request / Book on Mobile App
              </button>
              <Link
                href="/contact"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-center"
              >
                Speak with Desk
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* 6. Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}
