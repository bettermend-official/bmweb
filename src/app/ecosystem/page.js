"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import {
  Smartphone,
  Store,
  Bike,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  Radio,
  Share2,
  TrendingUp,
  Clock,
  Compass,
  Database,
  Lock,
  ChevronRight,
  X,
  Sparkles,
  Users,
  Boxes,
  Activity,
  Award,
  Package,
  MapPin,
  Eye,
  CreditCard,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  User,
  Truck,
  Car,
} from "lucide-react";

export default function EcosystemPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [toast, setToast] = useState(null);

  const appCards = [
    {
      id: "user",
      badge: "USER APP",
      badgeRight: "iOS & Android",
      image: "/userapp.jpeg",
      tag: "CONSUMER APPLICATION",
      title: "USER APP",
      description:
        "Consolidated shopping from up to 3 neighborhood shops in one cart, instant local cab hailing, and verified on-demand home pros.",
      bullets: [
        "Multi-store consolidated cart",
        "Instant taxi & cab booking",
        "Fixed-rate home technicians",
        "Live GPS courier tracking",
      ],
      platformText: "iOS & Android App",
      buttonText: "EXPLORE USER APP",
      link: "/#download",
      modalSpecs: {
        target: "Consumers & Household Residents",
        capabilities: [
          "Combined multi-merchant cart checkout with single delivery fee",
          "One-tap intra-city taxi, auto, and outstation van booking",
          "Verified electrician, plumber, and handyman dispatch within 60 mins",
          "Live GPS telemetry with direct masked driver communication",
        ],
        techStack: "React Native / Swift / Kotlin with Mapbox live navigation",
      },
    },
    {
      id: "vendor",
      badge: "MERCHANT APP",
      badgeRight: "Tablet POS",
      image: "/vendorapp.jpeg",
      tag: "MERCHANT POS & WEB",
      title: "VENDOR APP",
      description:
        "Empowering local shop owners with unified product catalogs, real-time inventory management, one-click order fulfillment, and daily settlements.",
      bullets: [
        "Centralized catalog syncing",
        "Real-time sound & push alerts",
        "Barcode / SKU scan support",
        "Instant daily bank payouts",
      ],
      platformText: "Android Tablet & Web POS",
      buttonText: "EXPLORE VENDOR APP",
      link: "/catalog",
      modalSpecs: {
        target: "Local Kirana Stores, Bakeries, Supermarkets & Pharmacies",
        capabilities: [
          "Instant single-click addition from centralized master product database",
          "Audio chimes and barcode scanning for rapid bagging verification",
          "Dynamic inventory sync with low-stock automatic pausing",
          "Direct T+1 automated bank settlement with zero hidden aggregator cuts",
        ],
        techStack: "Android Tablet POS / Next.js Web Console / Thermal Bluetooth Print",
      },
    },
    {
      id: "delivery",
      badge: "DRIVER APP",
      badgeRight: "Rider Hub",
      image: "/deliverypartner.jpeg",
      tag: "FLEET LOGISTICS",
      title: "DELIVERY PARTNER",
      description:
        "Smart multi-stop route optimization, fair distance-based pay floor, transparent earnings dashboard, and instant UPI withdrawals.",
      bullets: [
        "Base ₹30 for 3.5km + ₹5/km",
        "Multi-stop route optimizer",
        "100% rider tips retained",
        "Instant shift-end UPI payouts",
      ],
      platformText: "Android Fleet Hub",
      buttonText: "BECOME A PARTNER",
      link: "/contact",
      modalSpecs: {
        target: "Bike Couriers, Taxi Drivers & Local Logistics Fleets",
        capabilities: [
          "Intelligent multi-stop pickup routing to minimize waiting times",
          "Guaranteed floor pricing: Base ₹30 up to 3.5 km + ₹5 extra per km",
          "100% retention of tips and surge incentives",
          "Shift-end instant cashout directly to any registered UPI ID",
        ],
        techStack: "Android Background Telemetry / Mapbox GPS Routing / UPI SDK",
      },
    },
    {
      id: "manager",
      badge: "GOVERNANCE",
      badgeRight: "Enterprise Web",
      image: "/sectormanager.jpeg",
      tag: "REGIONAL MANAGEMENT",
      title: "SECTOR MANAGER",
      description:
        "Autonomous regional governance console for local admins to onboard merchants, monitor real-time fleet density, and resolve disputes.",
      bullets: [
        "Geo-polygon boundary tools",
        "Merchant KYC & shop vetting",
        "Live regional radar telemetry",
        "Sub-15 min dispute SLA",
      ],
      platformText: "Enterprise Web Console",
      buttonText: "SECTOR ACCESS PORTAL",
      link: "/contact",
      modalSpecs: {
        target: "Local Sector Admins, Regional Franchisees & Governance Desks",
        capabilities: [
          "Custom polygon geofence editor for regional delivery zone tuning",
          "Comprehensive store inspection & trade license verification workflows",
          "Live radar monitoring of active trips, driver density, and queue health",
          "Fast-track mediation console resolving customer or merchant disputes under 15 mins",
        ],
        techStack: "Next.js 16 Enterprise Portal / GIS GeoJSON / WebSocket Broadcasts",
      },
    },
  ];


  const handleOpenDetail = (item) => {
    setActiveModal(item);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">

      {/* 1. Navbar */}
      <Navbar activePage="ecosystem" />

      {/* 2. Top Header & Title (Screenshot Exact Base) */}
      <section className="pt-[110px] sm:pt-[130px] pb-6 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-tight text-slate-950 font-montserrat leading-[1.05] mb-3">
          ONE ECOSYSTEM. <br />
          EVERY LOCAL SERVICE.
        </h1>

        <p className="text-xs sm:text-base text-slate-600 font-roboto font-normal max-w-2xl mx-auto leading-relaxed">
          BetterMend operates as a unified network, bridging consumers, merchants, delivery partners, and sector managers into a single regional ecosystem.
        </p>
      </section>

      {/* 3. 4-Cards Single-Screen Grid (4 in 1 Row on Desktop) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {appCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Card Image Area (Clean without overlay badges) */}
              <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase block mb-1 font-heading">
                    {card.tag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black text-slate-950 font-heading mb-1.5 group-hover:text-[#030C54] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans mb-3.5 line-clamp-3">
                    {card.description}
                  </p>

                  {/* 4 Checkmark Bullets (Clean Compact List) */}
                  <div className="space-y-1.5 mb-4">
                    {card.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-700 font-medium truncate">
                        <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                        <span className="truncate">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider truncate max-w-[120px]">
                    {card.platformText}
                  </span>

                  <button
                    onClick={() => handleOpenDetail(card)}
                    className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-slate-900 text-slate-900 group-hover:bg-[#030C54] group-hover:border-[#030C54] group-hover:text-white text-[10px] font-extrabold tracking-wider uppercase transition-all shrink-0 cursor-pointer"
                  >
                    {card.buttonText}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Problem Statement: "A Broken Hyperlocal Ecosystem" (Pitch Deck Slide 4 Pixel-Perfect Match) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-gradient-to-b from-[#dce4ed]/70 via-[#f0f4f8] to-[#dce4ed]/70 rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden text-center relative">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-10 relative z-10 space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#030C54] font-heading font-montserrat tracking-tight leading-tight">
              Problem statement
            </h2>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-slate-700 font-sans pt-1">
              Key Problems in the Hyperlocal Ecosystem
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 italic font-sans">
              &ldquo;A Broken Hyperlocal Ecosystem&rdquo;
            </p>
          </div>

          {/* Desktop & Tablet: Exact Interlocking Horseshoe Arc Graphic */}
          <div className="hidden md:block relative z-10 max-w-5xl mx-auto min-h-[390px]">
            
            {/* 1. Top Left Text Callout */}
            <div className="absolute left-[10px] lg:left-[25px] top-[45px] w-[280px] lg:w-[300px] text-right space-y-1">
              <h3 className="text-base lg:text-lg font-black text-[#030C54] font-heading leading-tight">
                Fragmented <br />
                Consumer Experience
              </h3>
              <p className="text-[11px] lg:text-xs text-slate-600 leading-snug font-sans max-w-[260px] ml-auto">
                Multiple apps for everyday needs; no unified hyperlocal platform.
              </p>
            </div>

            {/* 2. Mid Left Text Callout */}
            <div className="absolute left-[30px] lg:left-[60px] top-[180px] w-[280px] lg:w-[300px] text-right space-y-1">
              <h3 className="text-base lg:text-lg font-black text-[#030C54] font-heading leading-tight">
                Limited Market Access <br />
                for Local Workers
              </h3>
              <p className="text-[11px] lg:text-xs text-slate-600 leading-snug font-sans max-w-[260px] ml-auto">
                Skilled local workers struggle to access nearby demand directly and affordably.
              </p>
            </div>

            {/* 3. Bottom Center Text Callout (Tightened Directly Below Center Stone) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[272px] w-[360px] lg:w-[400px] text-center space-y-1">
              <h3 className="text-base lg:text-lg font-black text-[#030C54] font-heading leading-tight">
                Inefficient <br />
                Hyperlocal Delivery
              </h3>
              <p className="text-[11px] lg:text-xs text-slate-600 leading-snug font-sans max-w-[320px] mx-auto">
                Dark-store dominance reduces efficiency, increases costs, and hurts local businesses.
              </p>
            </div>

            {/* 4. Mid Right Text Callout */}
            <div className="absolute right-[30px] lg:right-[60px] top-[180px] w-[280px] lg:w-[300px] text-left space-y-1">
              <h3 className="text-base lg:text-lg font-black text-[#030C54] font-heading leading-tight">
                Trust &amp; Quality Gap <br />
                in Services
              </h3>
              <p className="text-[11px] lg:text-xs text-slate-600 leading-snug font-sans max-w-[260px] mr-auto">
                Unverified providers and inconsistent service quality reduce customer trust.
              </p>
            </div>

            {/* 5. Top Right Text Callout */}
            <div className="absolute right-[10px] lg:right-[25px] top-[45px] w-[280px] lg:w-[300px] text-left space-y-1">
              <h3 className="text-base lg:text-lg font-black text-[#030C54] font-heading leading-tight">
                Fragmented <br />
                Mobility Ecosystem
              </h3>
              <p className="text-[11px] lg:text-xs text-slate-600 leading-snug font-sans max-w-[260px] mr-auto">
                Disconnected ride, rental, and premium transport services create inefficiencies and higher costs.
              </p>
            </div>

            {/* Center Horseshoe Chain SVG (Interlocking & Contiguous) */}
            <div className="flex items-center justify-center pt-2">
              <svg viewBox="0 0 540 330" className="w-[520px] h-[320px] overflow-visible">
                
                {/* Stone 1: Top-Left (Consumer Multi-App) */}
                <g transform="translate(160, 95) rotate(-35)">
                  <path
                    d="M-36,-44 C-10,-48 10,-48 36,-44 C48,-15 48,15 36,44 C10,48 -10,48 -36,44 C-48,15 -48,-15 -36,-44 Z"
                    fill="#ffffff"
                    stroke="#030C54"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Icon 1: Network User with Multi-Apps */}
                  <g transform="translate(0, 1) scale(0.9)" stroke="#030C54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="0" cy="-6" r="6" />
                    <path d="M-10,12 C-10,4 10,4 10,12" />
                    <circle cx="-14" cy="-14" r="3" />
                    <circle cx="14" cy="-14" r="3" />
                    <circle cx="0" cy="-20" r="3" />
                    <line x1="-11" y1="-12" x2="-5" y2="-9" />
                    <line x1="11" y1="-12" x2="5" y2="-9" />
                    <line x1="0" y1="-17" x2="0" y2="-12" />
                  </g>
                </g>

                {/* Stone 2: Mid-Left (Workers & Gears) */}
                <g transform="translate(208, 175) rotate(-18)">
                  <path
                    d="M-36,-44 C-10,-48 10,-48 36,-44 C48,-15 48,15 36,44 C10,48 -10,48 -36,44 C-48,15 -48,-15 -36,-44 Z"
                    fill="#ffffff"
                    stroke="#030C54"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Icon 2: Workers Network & Gear */}
                  <g transform="translate(0, -1) scale(0.85)" stroke="#030C54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="0" cy="-4" r="5" />
                    <path d="M-8,12 C-8,6 8,6 8,12" />
                    <circle cx="-14" cy="2" r="3.5" />
                    <circle cx="14" cy="2" r="3.5" />
                    <path d="M-18,14 C-18,10 -10,10 -10,14" />
                    <path d="M10,14 C10,10 18,10 18,14" />
                    <circle cx="0" cy="-16" r="3" strokeDasharray="2,2" />
                  </g>
                </g>

                {/* Stone 3: Bottom-Center (Delivery Scooter Rider) */}
                <g transform="translate(270, 215) rotate(0)">
                  <path
                    d="M-36,-44 C-10,-48 10,-48 36,-44 C48,-15 48,15 36,44 C10,48 -10,48 -36,44 C-48,15 -48,-15 -36,-44 Z"
                    fill="#ffffff"
                    stroke="#030C54"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Icon 3: Delivery Bike with Box */}
                  <g transform="translate(-2, 0) scale(0.85)" stroke="#030C54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="-12" cy="8" r="4.5" />
                    <circle cx="12" cy="8" r="4.5" />
                    <path d="M-12,8 L-4,8 L2,-2 L10,-2" />
                    <path d="M2,-2 L-2,-10 L-10,-10 L-10,-2 Z" fill="#ffffff" />
                    <circle cx="0" cy="-14" r="3" />
                    <path d="M-1, -11 L2, -6 L7, -6" />
                    <line x1="-16" y1="2" x2="-12" y2="2" />
                    <line x1="-18" y1="5" x2="-14" y2="5" />
                  </g>
                </g>

                {/* Stone 4: Mid-Right (Trust & Shield Handshake) */}
                <g transform="translate(332, 175) rotate(18)">
                  <path
                    d="M-36,-44 C-10,-48 10,-48 36,-44 C48,-15 48,15 36,44 C10,48 -10,48 -36,44 C-48,15 -48,-15 -36,-44 Z"
                    fill="#ffffff"
                    stroke="#030C54"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Icon 4: Handshake inside Shield */}
                  <g transform="translate(0, 0) scale(0.85)" stroke="#030C54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0,-16 C12,-16 16,-10 16,0 C16,10 0,16 0,16 C0,16 -16,10 -16,0 C-16,-10 -12,-16 0,-16 Z" />
                    <path d="M-7,-2 L-2,3 L2,-1 L7,4" />
                    <path d="M-4,-5 L-1,-2 L4,-6" />
                  </g>
                </g>

                {/* Stone 5: Top-Right (Mobility Sedan Car) */}
                <g transform="translate(380, 95) rotate(35)">
                  <path
                    d="M-36,-44 C-10,-48 10,-48 36,-44 C48,-15 48,15 36,44 C10,48 -10,48 -36,44 C-48,15 -48,-15 -36,-44 Z"
                    fill="#ffffff"
                    stroke="#030C54"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Icon 5: Car / Taxi */}
                  <g transform="translate(0, 0) scale(0.9)" stroke="#030C54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-14,4 L-12,-4 C-11,-7 -8,-9 -4,-9 L4,-9 C8,-9 11,-7 12,-4 L14,4 Z" />
                    <circle cx="-9" cy="6" r="3" />
                    <circle cx="9" cy="6" r="3" />
                    <line x1="-6" y1="6" x2="6" y2="6" />
                    <line x1="-16" y1="4" x2="-12" y2="4" />
                    <line x1="12" y1="4" x2="16" y2="4" />
                  </g>
                </g>

              </svg>
            </div>

          </div>

          {/* Mobile Fallback: Vertical Stacked Flow */}
          <div className="md:hidden space-y-4 pt-2 text-left">
            
            {/* Mobile 1 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#030C54]/5 border border-[#030C54]/40 text-[#030C54] flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#030C54] font-heading">
                  Fragmented Consumer Experience
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Multiple apps for everyday needs; no unified hyperlocal platform.
                </p>
              </div>
            </div>

            {/* Mobile 2 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#030C54]/5 border border-[#030C54]/40 text-[#030C54] flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#030C54] font-heading">
                  Limited Market Access for Local Workers
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Skilled local workers struggle to access nearby demand directly and affordably.
                </p>
              </div>
            </div>

            {/* Mobile 3 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#030C54]/5 border border-[#030C54]/40 text-[#030C54] flex items-center justify-center shrink-0">
                <Bike size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#030C54] font-heading">
                  Inefficient Hyperlocal Delivery
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Dark-store dominance reduces efficiency, increases costs, and hurts local businesses.
                </p>
              </div>
            </div>

            {/* Mobile 4 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#030C54]/5 border border-[#030C54]/40 text-[#030C54] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#030C54] font-heading">
                  Trust &amp; Quality Gap in Services
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Unverified providers and inconsistent service quality reduce customer trust.
                </p>
              </div>
            </div>

            {/* Mobile 5 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#030C54]/5 border border-[#030C54]/40 text-[#030C54] flex items-center justify-center shrink-0">
                <Car size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#030C54] font-heading">
                  Fragmented Mobility Ecosystem
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Disconnected ride, rental, and premium transport services create inefficiencies and higher costs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 7. CTA Banner: "READY TO JOIN THE ECOSYSTEM?" (Screenshot Exact Match) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-14 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-heading text-white tracking-tight mb-3">
            READY TO JOIN THE <br />
            ECOSYSTEM?
          </h2>

          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-sans mb-8">
            Whether you are a customer, merchant, driver, or regional entrepreneur, there is a place for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="/#download"
              className="px-7 py-3 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs uppercase tracking-wider transition-all shadow-md"
            >
              GET THE APP
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-white/40 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider transition-all"
            >
              BECOME A PARTNER
            </Link>
          </div>

          <div className="text-[10px] sm:text-xs text-white/60 font-medium tracking-wider uppercase flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-6">
            <span>Consumer App</span>
            <span>•</span>
            <span>Merchant Console</span>
            <span>•</span>
            <span>Delivery Fleet</span>
            <span>•</span>
            <span>Sector Admin</span>
          </div>

        </div>
      </section>

      {/* 8. Interactive Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-white text-slate-900 border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-[#030C54] text-white">
                {activeModal.badge || "FEATURE SPEC"}
              </span>
              <span className="text-xs font-bold text-slate-500 font-mono">
                BetterMend v2.4
              </span>
            </div>

            <h3 className="text-2xl font-black font-heading text-slate-950 mb-2">
              {activeModal.title || activeModal.name}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {activeModal.detail || activeModal.description}
            </p>

            {activeModal.modalSpecs && (
              <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2 font-heading">
                  Architecture & Specifications
                </span>
                <div>
                  <strong className="text-slate-800">Target Role:</strong> {activeModal.modalSpecs.target}
                </div>
                <div>
                  <strong className="text-slate-800">Key Capabilities:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600">
                    {activeModal.modalSpecs.capabilities.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <strong className="text-slate-800">Engineered On:</strong>{" "}
                  <span className="font-mono text-slate-900">{activeModal.modalSpecs.techStack}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/catalog"
                onClick={() => setActiveModal(null)}
                className="w-full py-3 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white font-black text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Explore Catalog / POS
              </Link>
              <Link
                href="/contact"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-center"
              >
                Contact Team
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* 9. Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 10. Footer Capsule */}
      <Footer />

    </div>
  );
}
