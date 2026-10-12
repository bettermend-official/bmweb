import { ArrowRight, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 border border-primary/20 shadow-glow-primary/40">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary tracking-wide uppercase">
              Get Started Now
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Download <span className="text-gradient">BetterMend</span> Today
            </h2>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Get the app now to access hyper-local shops in your sector. Fresh groceries, bakery goods, household supplies, and more delivered in minutes with unified checkout.
            </p>

            {/* Badges and actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {/* Google Play Store Badge */}
              <a
                href="#"
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <IoLogoGooglePlaystore className="w-7 h-7 text-white shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-text-muted uppercase tracking-wider">GET IT ON</span>
                  <span className="block text-sm font-bold">Google Play</span>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#"
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaApple className="w-7 h-7 text-white shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-text-muted uppercase tracking-wider">Download on the</span>
                  <span className="block text-sm font-bold">App Store</span>
                </div>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-text-muted">
              <div className="flex items-center justify-center gap-1.5">
                <Zap size={14} className="text-primary" />
                <span>Sub-30 Minute Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck size={14} className="text-primary" />
                <span>Verified Local Merchants</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Smartphone size={14} className="text-primary" />
                <span>Live GPS Order Tracking</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
