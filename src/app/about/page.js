"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import {
  Users,
  Store,
  Wrench,
  Bike,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  Award,
  Layers,
  ShoppingBag,
  Car,
  Globe,
  AlertCircle,
  BarChart3,
  Cpu,
  Compass,
  Smartphone,
  ShieldAlert,
} from "lucide-react";

export default function AboutPage() {
  const [toast, setToast] = useState(null);

  const problems = [
    {
      id: "p1",
      icon: Smartphone,
      title: "Fragmented Consumer Experience",
      desc: "Multiple disjointed apps for everyday needs with zero unified hyperlocal platform.",
      friction: "App Overload & Friction",
    },
    {
      id: "p2",
      icon: Car,
      title: "Fragmented Mobility Ecosystem",
      desc: "Disconnected ride, rental, and premium transport services create inefficiencies and higher costs.",
      friction: "Surge & Disconnected Fleets",
    },
    {
      id: "p3",
      icon: ShoppingBag,
      title: "Inefficient Hyperlocal Delivery",
      desc: "Dark-store dominance reduces efficiency, increases costs, and hurts local neighborhood businesses.",
      friction: "Hurts Local Retailers",
    },
    {
      id: "p4",
      icon: ShieldAlert,
      title: "Trust & Quality Gap in Services",
      desc: "Unverified providers and inconsistent service quality severely reduce customer trust.",
      friction: "Zero Quality Assurance",
    },
    {
      id: "p5",
      icon: Users,
      title: "Limited Market Access for Workers",
      desc: "Skilled local workers struggle to access nearby demand directly and affordably.",
      friction: "High Intermediary Cuts",
    },
  ];

  const solutions = [
    {
      num: "01",
      icon: Globe,
      title: "Local Empowerment & Sustainability",
      desc: "Enabling local communities to access more work opportunities within their homeland while reducing environmental impact.",
      benefit: "Empowering Local Workforce",
    },
    {
      num: "02",
      icon: Layers,
      title: "Unified Hyperlocal Platform",
      desc: "A single super app connecting customers with nearby shops, service providers, and transport options seamlessly.",
      benefit: "Single Super App Gateway",
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Regional Economic Growth",
      desc: "Strengthening regional economies by enabling sustainable consumption and localized trade at scale.",
      benefit: "Retaining Regional Capital",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Trusted & Reliable Services",
      desc: "Delivering trustworthy, fresh, reliable, and standardized fast services to every household.",
      benefit: "Guaranteed SLA & Trust",
    },
  ];

  const handleConnectClick = () => {
    setToast({
      message: "Thank you for your interest in BetterMend! Our regional desk will connect with you.",
      type: "success",
    });
    setTimeout(() => setToast(null), 4500);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 selection:bg-[#030C54] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Capsule Navbar */}
      <Navbar activePage="about" />

      {/* 2. Hero Section Card: Pitch Deck Slide 2 */}
      <section className="pt-[105px] sm:pt-[125px] pb-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
             
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-950 uppercase tracking-tight leading-[1.05] font-heading font-montserrat">
                BUILDING SMARTER <br />
                <span className="text-[#030C54]">RURBAN SERVICES</span> <br />
                FOR A BETTER TOMORROW
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                Established in 2020, <strong>Bettermend Pvt. Limited</strong> is an innovative company focused on developing solutions that improve everyday rurban life through technology, services, and connected infrastructure. Our vision is built around a simple idea: cities and communities should be easier to live in, easier to move around, and easier to access services within.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                Through innovation, technology, and a strong understanding of real-world rurban needs, Bettermend develops practical solutions that connect people with essential services through one integrated ecosystem—bringing multiple everyday rurban services together on a single Super App platform.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  <span>Explore Ecosystem</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Image: BetterMend Headquarters */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/phlotofbettermend.jpg"
                alt="BetterMend Headquarters Building"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section (Exact Match with About Us Box & Theme - Inverted Split) */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Image: Modern Connected Smart City Infrastructure */}
            <div className="lg:col-span-6 relative w-full h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group order-2 lg:order-1">
              <Image
                src="/vision_mission_city.jpg"
                alt="Modern Connected Smart City Infrastructure"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              
              {/* Vision */}
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-extrabold text-[#030C54] uppercase tracking-widest font-mono">
                  OUR PURPOSE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 uppercase tracking-tight leading-none font-heading font-montserrat">
                  Vision
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal pt-1">
                  To become a leading technology driven civic infrastructure innovation company, creating innovative digital platforms that connect people with transportation, delivery, workers, and essential services.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="inline-block text-[11px] font-extrabold text-[#030C54] uppercase tracking-widest font-mono">
                  OUR MISSION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 uppercase tracking-tight leading-none font-heading font-montserrat">
                  Mission
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal pt-1">
                  To simplify everyday life by creating reliable, accessible, and technology enabled rurban services that connect communities, help regional economic growth, strengthen the regional ecosystem, and contribute to smarter, more efficient cities.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Problem Statement vs. Our Solutions (Pitch Deck Slides 4 & 5) */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-14 border border-slate-200/80 shadow-sm text-slate-900">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div className="space-y-2 max-w-2xl text-left">
           
              <h2 className="text-2xl sm:text-4xl font-black uppercase font-heading text-slate-950 tracking-tight">
                Solving the Fragmented Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Conventional rurban markets suffer from siloed apps and disconnected logistics. BetterMend replaces this friction with one unified municipal super-app.
              </p>
            </div>

            
          </div>

          {/* 2-Column Comparative Bento Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
            
            {/* Left Column: 5 Systemic Problems (Clean Muted Slate with Amber Accents) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] sm:rounded-[30px] bg-slate-50/70 border border-slate-200/70 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500">
                    CURRENT STATE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-rose-100/70 text-rose-800 text-[10px] font-black tracking-wider uppercase">
                    5 Friction Points
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-slate-950">
                  The Broken Hyperlocal Model
                </h3>
                <p className="text-xs text-slate-500">
                  Why disconnected point solutions fail modern rurban communities:
                </p>
              </div>

              <div className="space-y-3">
                {problems.map((prob) => {
                  const Icon = prob.icon;
                  return (
                    <div
                      key={prob.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs hover:border-rose-300 hover:shadow-sm transition-all text-left group"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-600 flex items-center justify-center shrink-0 transition-colors">
                          <Icon size={17} />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h4 className="text-xs sm:text-sm font-black text-slate-900 font-heading">
                              {prob.title}
                            </h4>
                            <span className="text-[9.5px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                              {prob.friction}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-slate-600 leading-relaxed font-sans">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: 4 Core Solutions (Deep Navy BetterMend Flagship Styling) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] sm:rounded-[30px] bg-[#030C54] text-white shadow-xl relative overflow-hidden space-y-6">
              
              {/* Subtle ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 filter blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-blue-200">
                    THE RESOLUTION
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-black tracking-wider uppercase border border-emerald-400/30">
                    BetterMend Super App
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-white">
                  A Unified Hyperlocal Ecosystem
                </h3>
                <p className="text-xs text-white/80">
                  Four structural pillars engineered for regional sustainability and scale:
                </p>
              </div>

              <div className="relative z-10 space-y-3.5">
                {solutions.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <div
                      key={sol.num}
                      className="p-4.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all text-left group"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Icon size={18} className="text-blue-200" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-black text-blue-900 bg-white px-2 py-0.5 rounded-md">
                                {sol.num}
                              </span>
                              <h4 className="text-xs sm:text-sm font-black text-white font-heading">
                                {sol.title}
                              </h4>
                            </div>
                            <span className="text-[9.5px] font-mono font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                              {sol.benefit}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-white/80 leading-relaxed font-sans">
                            {sol.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* 6. Contact & Registered Office Info (Pitch Deck Slide 14) */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-14 border border-slate-200/80 shadow-sm text-slate-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-slate-950">
                Join us in uplifting millions in India’s small cities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                1st Floor, Chemilly Complex, Perumanna, Kottakkal - 676508, Kerala, India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Contact Regional Desk
              </Link>
              <a
                href="tel:+919207050655"
                className="px-6 py-3 rounded-full border border-slate-300 hover:border-slate-900 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                +91 9207050655
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 8. Footer */}
      <Footer />

    </div>
  );
}
