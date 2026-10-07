"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is BetterMend?",
      a: "BetterMend is a super app designed to bring multiple everyday services together on one platform, including transportation, delivery, skilled workers and essential digital services.",
    },
    {
      q: "What services are available on BetterMend?",
      a: "BetterMend brings together four core service areas: transportation, delivery, skilled workers and e services. Availability may vary by location as BetterMend expands.",
    },
    {
      q: "Is BetterMend a delivery app?",
      a: "Delivery is one part of the BetterMend ecosystem. BetterMend is being built as a broader super app connecting transportation, local delivery, skilled professionals and essential digital services.",
    },
    {
      q: "Where is BetterMend based?",
      a: "BetterMend was created in Kerala, India, with a vision to build technology for India's regional communities and eventually serve a wider global market.",
    },
    {
      q: "Does BetterMend work in every city in India?",
      a: "Service availability depends on the location. BetterMend is expanding its service network progressively, beginning with regional markets and growing toward wider coverage.",
    },
    {
      q: "What can I use BetterMend for?",
      a: "Depending on your location, you can use BetterMend to access transportation, order everyday essentials, find local professionals and access selected digital services.",
    },
    {
      q: "Who can join the BetterMend ecosystem?",
      a: "Customers, local businesses, transportation providers and skilled professionals can participate in the BetterMend ecosystem, subject to applicable onboarding and service requirements.",
    },
    {
      q: "HOW DOES MULTI SHOP CART DELIVERY WORK?",
      a: "When you add items from multiple shops in a single checkout, the app coordinates the pickup sequence. A single delivery partner receives the route, stops at the respective locations in sequence, and delivers everything in one batch.",
    },
    {
      q: "HOW CAN I DELETE MY ACCOUNT AND ASSOCIATED DATA?",
      a: "In accordance with Google Play Store guidelines, we provide a dedicated request system. Go to our Data Deletion Request Page, enter your registered credentials, and submit the form. Your profile and telemetry will be purged within 30 days.",
      link: { text: "Go to Data Deletion Request Page →", href: "/delete-account" },
    },
    {
      q: "CAN I REGISTER AS A MERCHANT ON THE PLATFORM?",
      a: "Yes! You can download the Vendor App or visit our Ecosystem overview to learn more about setting up your storefront. Local Sector Admins will review and approve your storefront.",
      link: { text: "Explore Ecosystem →", href: "/ecosystem" },
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
      <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 text-white text-center shadow-2xl overflow-hidden">
        
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide font-heading mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-10 font-sans">
          Everything you need to know about the product and ecosystem.
        </p>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white text-slate-900 selection:bg-[#030C54] selection:text-white rounded-2xl sm:rounded-full overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] font-black tracking-wider uppercase font-heading text-slate-950">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <X size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-8 pb-4 pt-1 text-xs text-slate-600 leading-relaxed font-sans border-t border-slate-100">
                    <p>{faq.a}</p>
                    {faq.link && (
                      <div className="mt-2.5">
                        <Link
                          href={faq.link.href}
                          className="text-[#030C54] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {faq.link.text}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
