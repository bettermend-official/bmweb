import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
       

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 uppercase tracking-tight leading-[1.05] font-heading">
              Empowering Region, <br className="hidden sm:inline" /> Connecting Communities
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              BetterMend was conceptualized with a mission to bridge hyper-local trade and modern technology. We connect neighborhood mom-and-pop stores, local taxi fleets, skilled technicians, and everyday consumers in a fair, distributed economic network designed for real regional impact.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-extrabold text-xs tracking-wider uppercase transition-all"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Image (BetterMend Building Corner) */}
          <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/phlotofbettermend.jpg"
              alt="BetterMend Urban Services Innovation Hub"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
