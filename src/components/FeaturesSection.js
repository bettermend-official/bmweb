import { ShoppingBag, Cpu, ShieldCheck, Zap, RefreshCw, Layers } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Multi-Shop Ordering",
      color: "from-emerald-500 to-teal-500",
      description:
        "Order groceries from Shop A, bread from Shop B, and fruits from Shop C in a single checkout. Optimized logistics routes one delivery agent to collect it all, charging minimal additions for extra shop stops.",
      badge: "Flagship Innovation",
    },
    {
      icon: Cpu,
      title: "Smart Allocation Logic",
      color: "from-blue-500 to-indigo-500",
      description:
        "Never worry about comparing stores. Our smart routing algorithm queries real-time availability across nearby shops and automatically delegates preparation to the closest, most reliable merchants to save time.",
      badge: "Real-time AI Routing",
    },
    {
      icon: ShieldCheck,
      title: "Sector-Level Governance",
      color: "from-purple-500 to-pink-500",
      description:
        "BetterMend operates via decentralized sector management. Dedicated Sector Admins onboard local shops, handle disputes, and maintain service standards locally for high accountability.",
      badge: "Decentralized Quality",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-dark-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary tracking-wide uppercase mb-4">
            Key Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            BetterMend represents a hybrid local delivery infrastructure built to empower both shoppers and small neighborhood stores with enterprise-grade tech.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-card/80 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-text-muted bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-primary">
                  <span>Explore Architecture</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
