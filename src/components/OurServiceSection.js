"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OurServiceSection() {
  const services = [
    {
      id: "transportation",
      num: "01",
      title: "Transportation",
      image: "/transpot.png",
      tag: "15+ VEHICLE CATEGORIES",
      description:
        "Expand your fleet or book instant rides, outstation trips, and reliable local cabs across the network.",
      link: "/services",
    },
    {
      id: "workers",
      num: "02",
      title: "Workers",
      image: "/workers.png",
      tag: "5000+ VERIFIED PROS",
      description:
        "On-demand local blue-collar pros, technicians, plumbers, electricians, and handymen with quick pay dispatch.",
      link: "/services",
    },
    {
      id: "e-services",
      num: "03",
      title: "E-Services",
      image: "/eservice.png",
      tag: "ALL-IN-ONE UTILITY HUB",
      description:
        "Digital registrations, public utility bills, smart citizen portals, and online urban service assistance with ease.",
      link: "/services",
    },
    {
      id: "delivery",
      num: "04",
      title: "Delivery",
      image: "/delivery.png",
      tag: "30 MIN GUARANTEED",
      description:
        "Hyper-local multi-vendor delivery from local groceries, bakery goods, medical items, and packages with live courier tracking.",
      link: "/services",
    },
  ];

  return (
    <section id="services" className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
      <div className="bg-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-heading text-white">
              Our Service
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors group"
          >
            <span>View All Services</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4-Cards Single-Screen Grid (4 cols on lg, 2 cols on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white text-slate-900 rounded-[22px] overflow-hidden shadow-lg flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-slate-100/80"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-100">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="block text-[9.5px] font-extrabold tracking-wider text-blue-900 bg-blue-50 border border-blue-100/80 px-2 py-0.5 rounded-md uppercase font-sans mb-2.5 w-fit">
                    {svc.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 font-heading mb-1.5">
                    {svc.title}
                  </h3>

                  <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed font-sans mb-4 line-clamp-3">
                    {svc.description}
                  </p>
                </div>

                {/* Card Bottom Action */}
                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={svc.link}
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-[#030C54] text-slate-900 hover:text-white text-[11px] font-bold tracking-wide transition-all duration-200 flex items-center justify-between group/btn"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
