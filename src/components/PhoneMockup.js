"use client";
import { ShoppingBag, Star, Clock, MapPin, CheckCircle, Navigation } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none">
      {/* Phone Case */}
      <div className="relative rounded-[42px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-[3px] border-slate-600/60 shadow-phone">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2 px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          <div className="w-2 h-2 rounded-full bg-blue-950" />
        </div>

        {/* Screen */}
        <div className="relative rounded-[32px] overflow-hidden bg-dark-900 border border-white/5 pt-7 pb-4 px-4 min-h-[580px] flex flex-col justify-between">
          
          {/* Header Bar */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] tracking-wider text-text-muted font-bold block uppercase">
                  DELIVERING TO
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-white">
                  <MapPin size={12} className="text-primary" />
                  <span>Green Park, Sector 4</span>
                  <span className="text-[10px] text-text-muted">▼</span>
                </div>
              </div>
              <div className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-white">
                <ShoppingBag size={16} />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-black font-extrabold text-[10px] flex items-center justify-center">
                  3
                </span>
              </div>
            </div>

            {/* Search Mock */}
            <div className="mt-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-xs text-text-muted">
              <span>🔍</span>
              <span>Search groceries, bakery, fruits...</span>
            </div>

            {/* Active Multi-Shop Orders */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Active Multi-Shop Cart
                </span>
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  1 Order
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Shop 1 */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-base shadow-sm">
                      🏪
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Greenfield Grocers</h5>
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                        <span className="flex items-center text-amber-400 font-semibold">
                          <Star size={10} className="fill-amber-400 mr-0.5" /> 4.8
                        </span>
                        <span>• 1.2 km</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Assigned
                  </span>
                </div>

                {/* Shop 2 */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-secondary/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-secondary flex items-center justify-center text-base shadow-sm">
                      🥖
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Sunrise Bakery</h5>
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                        <span className="flex items-center text-amber-400 font-semibold">
                          <Star size={10} className="fill-amber-400 mr-0.5" /> 4.6
                        </span>
                        <span>• 2.1 km</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Baking
                  </span>
                </div>

                {/* Shop 3 */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-accent-cyan/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center text-base shadow-sm">
                      🍏
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Fresh Fruit Point</h5>
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                        <span className="flex items-center text-amber-400 font-semibold">
                          <Star size={10} className="fill-amber-400 mr-0.5" /> 4.9
                        </span>
                        <span>• 0.8 km</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Tracker Card at bottom of screen */}
          <div className="mt-4 p-3 rounded-2xl bg-card border border-primary/20 shadow-glow-primary/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Navigation size={13} className="text-primary animate-pulse" />
                <span>Single Courier Routed</span>
              </div>
              <span className="text-xs font-bold text-primary">24 Mins</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-primary h-full rounded-full w-3/4 animate-pulseSlow" />
            </div>

            <div className="flex items-center justify-between mt-2 text-[10px] text-text-muted">
              <span>Pickup 2/3 complete</span>
              <span>On the way 🚴</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
