"use client";
import { useState } from "react";
import Toast from "@/components/Toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setToast({
      message: "Thank you for subscribing to BetterMend updates!",
      type: "success",
    });
    setEmail("");
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[38px] p-8 sm:p-14 lg:p-16 text-center border border-slate-200/80 shadow-sm text-slate-900 overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* Main Huge Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tight leading-[1.0] font-heading">
            Join Us In Uplifting <br /> Millions In India&apos;s <br /> Small Cities
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans pt-2">
            Be part of India&apos;s fastest-growing regional super app. Get the latest updates, exclusive offers, and new service launches delivered to your inbox.
          </p>

          {/* Capsule Email Subscription Bar */}
          <form
            onSubmit={handleSubmit}
            className="pt-6 max-w-md mx-auto flex items-center"
          >
            <div className="w-full bg-[#030C54] rounded-full p-1.5 flex items-center shadow-md">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 sm:px-5 py-2 text-xs sm:text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-black text-xs tracking-wider uppercase shrink-0 transition-transform active:scale-95 shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
