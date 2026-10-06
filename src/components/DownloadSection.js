import { ArrowRight, Smartphone, ShieldCheck, Zap } from "lucide-react";

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
                <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 118.1 26.8c12.1 6.1 20 18.2 20 31.5 0 13.3-7.9 25.4-20 31.5zm-300.5 40.7l60.1 60.1L104.6 499l220.7-221.3-63.5-11.4z"/>
                </svg>
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
                <svg className="w-7 h-7 fill-current" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.7-84.5-22.7-46.9 0-92.4 26.5-116.6 68.7-49.9 86.8-12.8 215.1 35.4 284.7 23.6 34.1 51.2 72.3 87.8 71 35.6-1.4 49.4-22.8 89.6-22.8 39.9 0 53 22.8 89.6 22.4 37.6-.5 62-34.9 85.5-69.1 27.2-40 38.4-78.7 38.9-80.7-1.5-.8-75.1-28.8-75.6-114.7zM259.4 75.6c16-19.4 26.8-46.6 23.8-75.6-24.9 1-55.5 16.6-73.4 37.6-15.8 18.3-29.7 45.8-25.9 74.3 27.8 2.2 56.6-13.6 75.5-36.3z"/>
                </svg>
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
