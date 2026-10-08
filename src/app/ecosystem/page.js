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
  ChevronDown,
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
  Globe,
  Heart,
  HelpCircle,
} from "lucide-react";

export default function EcosystemPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const appCards = [
    {
      id: "user",
      badge: "PEOPLE",
      badgeRight: "iOS & Android",
      image: "/userapp.jpeg",
      tag: "PEOPLE • CONSUMER APPLICATION",
      title: "USER APP",
      description:
        "Customers discover nearby services, order everyday essentials, find local professionals, access transportation and connect with local businesses through one connected app.",
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
        target: "People & Customers who use everyday services",
        capabilities: [
          "Discover nearby services and order everyday essentials from local shops",
          "Combined multi-merchant cart checkout with single delivery fee",
          "One-tap intra-city taxi, auto, and passenger van booking",
          "Connect with skilled professionals including electricians, plumbers, and tutors",
        ],
        techStack: "React Native / Swift / Kotlin with Mapbox live navigation",
      },
    },
    {
      id: "vendor",
      badge: "BUSINESSES",
      badgeRight: "Tablet POS",
      image: "/vendorapp.jpeg",
      tag: "BUSINESSES • MERCHANT POS & WEB",
      title: "VENDOR APP",
      description:
        "Local businesses build a digital presence, reach nearby customers, accept digital orders, manage inventory, and participate in local delivery without heavy aggregator commissions.",
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
        target: "Local shops and businesses serving their communities",
        capabilities: [
          "Build a digital presence and reach nearby neighborhood customers",
          "Accept digital orders and participate in fast local delivery",
          "Instant addition from centralized master product database",
          "Direct automated bank payouts with transparent pricing",
        ],
        techStack: "Android Tablet POS / Next.js Web Console / Thermal Bluetooth Print",
      },
    },
    {
      id: "delivery",
      badge: "MOBILITY",
      badgeRight: "Rider Hub",
      image: "/deliverypartner.jpeg",
      tag: "MOBILITY • FLEET LOGISTICS",
      title: "DELIVERY PARTNER",
      description:
        "Transportation and delivery providers connecting people, places and services with smart multi-stop routes, fair pay floors, and instant shift-end UPI payouts.",
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
        target: "Transportation and delivery providers connecting people and goods",
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
      tag: "GOVERNANCE • REGIONAL MANAGEMENT",
      title: "SECTOR MANAGER",
      description:
        "Autonomous regional governance console for local admins to onboard merchants, vet skilled workers, monitor real-time fleet density, and resolve disputes.",
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

  // FAQ list from Page 4 of PDF Developer Handoff
  const faqs = [
    {
      q: "What is the BetterMend ecosystem?",
      a: "The BetterMend ecosystem connects customers, local businesses, skilled professionals, transportation providers and essential services through one digital platform.",
    },
    {
      q: "How is BetterMend different from a delivery app?",
      a: "Delivery is one part of BetterMend. The platform is designed as a broader super app covering transportation, delivery, skilled workers and e services.",
    },
    {
      q: "Who is part of the BetterMend ecosystem?",
      a: "Customers, local businesses, skilled professionals, transportation providers and essential service providers can all be part of the BetterMend ecosystem.",
    },
    {
      q: "How does BetterMend support local businesses?",
      a: "BetterMend aims to help local businesses build digital connections with nearby customers and take part in a connected regional service ecosystem.",
    },
    {
      q: "How does BetterMend support skilled workers?",
      a: "BetterMend connects skilled professionals with customers looking for services, helping create greater access to local demand.",
    },
    {
      q: "Is BetterMend available everywhere in India?",
      a: "Availability depends on location. BetterMend is expanding progressively, beginning with regional markets before moving toward wider coverage.",
    },
  ];

  const handleOpenDetail = (item) => {
    setActiveModal(item);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">

      {/* 1. Navbar */}
      <Navbar activePage="ecosystem" />

      {/* 2. Top Header & Title (Exact PDF Spec) */}
      <section className="pt-[110px] sm:pt-[130px] pb-6 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#030C54]/5 text-[#030C54] text-[11px] font-black uppercase tracking-widest font-heading mb-3 border border-[#030C54]/10">
          <Sparkles size={13} className="text-[#030C54]" />
          <span>One Platform. A Connected Ecosystem.</span>
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-tight text-slate-950 font-montserrat leading-[1.05] mb-3">
          ONE ECOSYSTEM. <br />
          EVERY REGIONAL SERVICES
        </h1>

        <p className="text-xs sm:text-base text-slate-600 font-roboto font-normal max-w-2xl mx-auto leading-relaxed">
          Connecting people, businesses, professionals and services through one simple platform. BetterMend brings together the different parts of everyday life, from local businesses and transportation to skilled professionals and essential services, creating a connected digital ecosystem for regional communities.
        </p>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <span>Simple is better.</span>
          <span>•</span>
          <span>Created in Kerala. Built for the world.</span>
        </div>
      </section>

      {/* 3. Four Connected Pillars (4-Cards Single-Screen Grid) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950 tracking-tight mb-1.5">
            Four Connected Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            People, Businesses, Professionals, and Mobility providers creating a connected regional ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {appCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Card Image Area */}
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

                  {/* 4 Checkmark Bullets */}
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

      {/* 4. What is the BetterMend ecosystem? & How the ecosystem works (Deep Navy Card) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* Left: What is the BetterMend ecosystem? */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-block text-[11px] font-extrabold text-blue-300 uppercase tracking-widest font-mono">
                MORE THAN A SUPER APP
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading tracking-tight text-white leading-tight">
                What is the BetterMend ecosystem?
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
                A super app should do more than collect services in one place. It should create useful connections between the people and businesses that make everyday life work.
              </p>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
                BetterMend is building an integrated ecosystem where people discover and access services, businesses reach customers digitally, professionals connect their skills with local demand, transportation providers help people and goods move, and essential services become easier to access.
              </p>

              <div className="pt-2">
                <span className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-white tracking-wide">
                  Everyone connects. Everyone benefits.
                </span>
              </div>
            </div>

            {/* Right: How the ecosystem works (White Interior Card) */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 border border-white/20 text-left">
              <span className="text-[10.5px] font-extrabold text-[#030C54] uppercase tracking-widest block font-heading">
                CIRCULAR REGIONAL VALUE
              </span>

              <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-slate-950 tracking-tight">
                How the ecosystem works
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                A local business joins BetterMend. Customers discover the business and purchase a product or request a service. Local workers and transportation providers help fulfil the need.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Revenue circulates within the regional economy. As businesses grow, more opportunities are created and the ecosystem becomes stronger.
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#030C54]">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Supports regional economic growth through local participation.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Problem Statement: "Why a connected ecosystem matters" (Interactive Horseshoe Arc Graphic) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-gradient-to-b from-[#dce4ed]/70 via-[#f0f4f8] to-[#dce4ed]/70 rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden text-center relative">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-10 relative z-10 space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#030C54] font-heading font-montserrat tracking-tight leading-tight uppercase">
              Why a connected ecosystem matters
            </h2>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-slate-700 font-sans pt-1">
              Everyday services can be spread across separate systems. People may use one platform for food, another for transportation, another to find a professional and another for digital services.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 italic font-sans">
              &ldquo;This can make everyday life more complicated and leave local businesses and professionals disconnected from digital demand. BetterMend brings services, people and the local economy closer together.&rdquo;
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

            {/* 3. Bottom Center Text Callout */}
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

      {/* 6. Regional Impact & Kerala Origin and Global Ambition (2-Column Spec) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card A: Regional Impact */}
          <div className="bg-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-extrabold text-[#030C54] uppercase tracking-widest font-mono">
                REGIONAL IMPACT
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950 tracking-tight">
                Technology That Strengthens Local Economies
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                BetterMend is about more than convenience. It is about creating stronger connections within regional communities. When customers can discover local businesses, professionals can find nearby opportunities, and transportation connects people and services efficiently, technology can support regional economic development.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Our goal is to build digital infrastructure that helps communities become more connected, accessible and efficient.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 mt-4 flex items-center gap-2 text-xs font-bold text-[#030C54]">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Digital infrastructure for connected regional communities.</span>
            </div>
          </div>

          {/* Card B: Kerala Origin and Global Ambition & Philosophy */}
          <div className="bg-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-extrabold text-[#030C54] uppercase tracking-widest font-mono">
                BORN FROM A REGIONAL PERSPECTIVE
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950 tracking-tight">
                Kerala Origin and Global Ambition
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Kerala is where BetterMend&apos;s journey begins. Our understanding of regional communities, local businesses and everyday service needs shapes how we build.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Our ambition reaches beyond one region. We want to create a model that can grow from local communities to towns, cities, regions and wider markets.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 mt-2">
                <span className="text-[10px] font-extrabold text-[#030C54] uppercase tracking-wider block font-heading">
                  ECOSYSTEM PHILOSOPHY: SIMPLE IS BETTER
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Less switching. Less searching. Less fragmentation. More connection. More access. More opportunity.
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 mt-4 flex items-center gap-2 text-xs font-bold text-[#030C54]">
              <Sparkles size={16} className="text-indigo-600 shrink-0" />
              <span>Think local. Build regional. Scale global.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions (from Page 4 of PDF) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm text-slate-900">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#030C54]/5 text-[#030C54] text-[11px] font-black uppercase tracking-widest font-heading mb-2.5 border border-[#030C54]/10">
              <HelpCircle size={13} className="text-[#030C54]" />
              <span>Common Questions</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/60 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase font-heading text-slate-950">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#030C54] text-white rotate-180" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/60 animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Closing Call to Action: "Be Part of a Better Connected Future" (Exact PDF Match) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-14 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">

          <span className="inline-block text-[11px] font-extrabold text-blue-300 uppercase tracking-widest font-mono mb-3">
            CLOSING CALL TO ACTION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-heading text-white tracking-tight mb-3">
            Be Part of a Better <br />
            Connected Future
          </h2>

          <p className="text-xs sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed font-sans mb-3">
            Whether you are a customer, business, professional or service provider, there is a place for you in the BetterMend ecosystem.
          </p>

          <p className="text-xs sm:text-sm font-bold text-white/70 tracking-wider mb-8">
            One platform. Many connections. A better way forward.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="/#download"
              className="px-7 py-3 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              EXPLORE BETTERMEND
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-white/40 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider transition-all"
            >
              BECOME A PARTNER
            </Link>
          </div>

          <div className="text-[10px] sm:text-xs text-white/60 font-medium tracking-wider uppercase flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-6">
            <span>Created in Kerala. Built for the world.</span>
          </div>

        </div>
      </section>

      {/* 9. Interactive Detail Modal */}
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
                BetterMend Ecosystem
              </span>
            </div>

            <h3 className="text-2xl font-black font-heading text-slate-950 mb-2">
              {activeModal.title || activeModal.name}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {activeModal.description}
            </p>

            {activeModal.modalSpecs && (
              <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2 font-heading">
                  Pillar Role &amp; Key Capabilities
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

      {/* 10. Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 11. Footer Capsule */}
      <Footer />

    </div>
  );
}
