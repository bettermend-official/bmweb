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
      image: "/trasport.jpeg",
      buttonText: "Explore Transportation",
      description:
        "Move around your city with ease. Book convenient local rides and transportation options for everyday travel, commuting and local journeys, all through the BetterMend app.",
      link: "/services/transportation",
    },
    {
      id: "workers",
      num: "02",
      title: "Workers",
      image: "/worker.jpeg",
      buttonText: "Find a Professional",
      description:
        "Find trusted local professionals when you need them. Connect with skilled professionals such as electricians, plumbers, tutors and other service providers for your everyday needs.",
      link: "/services/workers",
    },
    {
      id: "e-services",
      num: "03",
      title: "E Services",
      image: "/e service.jpeg",
      buttonText: "Explore E Services",
      description:
        "Essential services, made simpler. Access digital services, bill payments, bookings, appointments and other everyday assistance without having to navigate multiple platforms.",
      link: "/services/e-services",
    },
    {
      id: "delivery",
      num: "04",
      title: "Delivery",
      image: "/delivery.jpeg",
      buttonText: "Explore Delivery",
      description:
        "Get everyday essentials from local businesses. Order food, groceries, medicines and other everyday essentials from nearby businesses and have them delivered to your doorstep.",
      link: "/services/delivery",
    },
  ];

  return (
    <section id="services" className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
      <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase font-heading text-white mb-2">
              Everything You Need. One Simple App.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              BetterMend brings everyday services together in one place, from getting around and ordering essentials to finding trusted local professionals and accessing essential digital services. Instead of switching between multiple apps, BetterMend helps you discover, access and manage the services you need through one connected platform.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors group shrink-0"
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
              className="bg-white text-slate-900 selection:bg-[#030C54] selection:text-white rounded-[22px] overflow-hidden shadow-lg flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-slate-100/80"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-100">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
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
                    <span>{svc.buttonText || "View Details"}</span>
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
