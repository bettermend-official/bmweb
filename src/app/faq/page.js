"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0); // open first question by default

  const categories = [
    { id: "general", label: "GENERAL" },
    { id: "services", label: "SERVICES" },
    { id: "orders", label: "ORDERS" },
    { id: "delivery", label: "DELIVERY" },
    { id: "payments", label: "PAYMENTS" },
    { id: "partners", label: "PARTNERS" },
  ];

  const categoryHeaders = {
    general: {
      title: "GENERAL INQUIRIES",
      subtitle: "Need answers about how BetterMend works? Read through our common inquiries below.",
    },
    services: {
      title: "SERVICES & BOOKINGS",
      subtitle: "Learn about taxi hailing, master technicians, home repairs, and civic utility desks.",
    },
    orders: {
      title: "ORDERS & MULTI-SHOP CART",
      subtitle: "Details on combining multiple neighborhood shops into a single order and checkout.",
    },
    delivery: {
      title: "DELIVERY & GPS TRACKING",
      subtitle: "Information on regional dispatch times, route optimization, and live courier telemetry.",
    },
    payments: {
      title: "PAYMENTS, REFUNDS & ESCROW",
      subtitle: "Transparent fixed pricing, digital receipts, escrow protection, and refund policies.",
    },
    partners: {
      title: "PARTNER & MERCHANT ONBOARDING",
      subtitle: "Join as a local merchant, certified technician, or delivery fleet partner.",
    },
  };

  const allFaqs = [
    // 1. General
    {
      category: "general",
      q: "WHAT IS BETTERMEND?",
      a: "BetterMend is a unified hyper-local urban super app and regional platform built in Kerala. It combines intra-city taxi hailing, multi-store neighborhood shopping, verified home technician dispatches, and digital citizen utilities into a single, cohesive ecosystem.",
    },
    {
      category: "general",
      q: "HOW DOES BETTERMEND WORK?",
      a: "BetterMend utilizes decentralized regional server nodes. When you place an order or book a service, our smart localized matching algorithm connects you to the nearest verified merchant, driver, or technician with zero middleman price gouging and instant GPS telemetry.",
    },
    {
      category: "general",
      q: "WHICH LOCATIONS ARE SUPPORTED?",
      a: "BetterMend is currently operational across 14+ key urban sectors in Kerala, including Kochi, Thiruvananthapuram, Kozhikode, Thrissur, and neighboring municipal zones. We are actively expanding to new sectors every month.",
    },
    {
      category: "general",
      q: "CAN I USE MULTIPLE SERVICES THROUGH ONE ACCOUNT?",
      a: "Yes! A single BetterMend account gives you instant access to all offerings: ordering from local merchants, booking cabs and passenger vans, scheduling master plumbers/electricians, and paying utility bills without creating separate logins.",
    },

    // 2. Services
    {
      category: "services",
      q: "HOW ARE TECHNICIANS AND DRIVERS VERIFIED?",
      a: "Every service professional undergoes strict background verification, local police clearance checks, trade skill testing, and Sector Admin onboarding before accepting jobs on the platform.",
    },
    {
      category: "services",
      q: "WHAT IF A REPAIR OR SERVICE JOB IS UNSATISFACTORY?",
      a: "All home repairs booked through BetterMend come with a 30-day post-service guarantee. If an issue reoccurs within this period, our sector manager arranges a free follow-up inspection or rectification.",
    },
    {
      category: "services",
      q: "CAN I SCHEDULE SERVICES OR CABS IN ADVANCE?",
      a: "Yes, you can choose immediate 15-minute dispatch or pre-schedule rides and technician visits for any specific date and time slot within the upcoming 7 days.",
    },

    // 3. Orders
    {
      category: "orders",
      q: "HOW DOES MULTI-SHOP CART DELIVERY WORK?",
      a: "Our revolutionary multi-vendor feature allows you to add items from up to 3 different neighborhood shops (e.g. bakery, grocery, and pharmacy) into a single checkout cart. A single delivery rider is routed to collect all items sequentially and deliver them to your door in one trip.",
    },
    {
      category: "orders",
      q: "ARE THERE ADDITIONAL FEES FOR MULTI-SHOP ORDERS?",
      a: "Only minimal flat stop charges apply (₹10 for 2 shops, ₹20 for 3 shops) to fairly compensate the courier partner for waiting and pickup times. Base delivery remains transparent and fair.",
    },
    {
      category: "orders",
      q: "CAN I MODIFY OR CANCEL MY ORDER AFTER PLACING IT?",
      a: "You can modify or cancel your order free of charge before the merchant accepts and starts packing items. Once the courier is dispatched, real-time live chat is available directly with the courier.",
    },

    // 4. Delivery
    {
      category: "delivery",
      q: "WHAT ARE THE EXACT DELIVERY CHARGES?",
      a: "BetterMend uses transparent distance-based pricing: a base fare of ₹30 for distances up to 3.5 km, and ₹5 per additional kilometer thereafter. 100% of the delivery fee is transferred directly to the delivery partner.",
    },
    {
      category: "delivery",
      q: "HOW FAST IS THE AVERAGE DELIVERY TIME?",
      a: "Because couriers operate within designated local sector clusters, average delivery times range from 15 to 30 minutes for single-store deliveries and under 40 minutes for multi-store batches.",
    },
    {
      category: "delivery",
      q: "HOW DOES LIVE GPS TRACKING WORK?",
      a: "Once an order is picked up, high-precision GPS telemetry updates every 3 seconds on your mobile app, providing turn-by-turn vehicle tracking and accurate arrival estimates.",
    },

    // 5. Payments
    {
      category: "payments",
      q: "WHAT PAYMENT MODES ARE SUPPORTED?",
      a: "We support UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, Net Banking, and Cash on Delivery (COD) for eligible categories.",
    },
    {
      category: "payments",
      q: "HOW DOES DIGITAL ESCROW PROTECTION WORK?",
      a: "Customer payments are held safely in a digital escrow account until delivery or service completion is verified via OTP, ensuring full buyer protection before funds are distributed to merchants or drivers.",
    },
    {
      category: "payments",
      q: "HOW DO REFUNDS WORK IF AN ITEM IS UNAVAILABLE?",
      a: "If a merchant is out of stock for any item, an instant split refund is credited back to your original payment method or BetterMend wallet within minutes.",
    },

    // 6. Partners
    {
      category: "partners",
      q: "HOW CAN A LOCAL SHOP OWNER REGISTER AS A VENDOR?",
      a: "Merchants can download the BetterMend Vendor POS app or visit our Merchant Portal. Enter your GST/Trade License details, upload your catalog, and local Sector Admins will verify your store within 24 hours.",
    },
    {
      category: "partners",
      q: "HOW QUICKLY ARE MERCHANT & DRIVER PAYOUTS SETTLED?",
      a: "BetterMend executes automated daily settlements directly into bank accounts or UPI IDs with zero hidden platform withholding fees.",
    },
    {
      category: "partners",
      q: "WHAT ARE THE MINIMUM REQUIREMENTS TO JOIN AS A DELIVERY PARTNER?",
      a: "You need a valid two-wheeler driving license, vehicle registration, and a smartphone. Onboarding is completed with localized identity verification.",
    },
  ];

  // Filtering Logic: Filter FAQs by selected category
  const filteredFaqs = allFaqs.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 selection:bg-[#030C54] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Capsule Navbar */}
      <Navbar activePage="faq" />

      {/* 2. Hero Header Section */}
      <section className="pt-[110px] sm:pt-[130px] pb-6 px-4 sm:px-6 w-full max-w-[1312px] mx-auto text-center">
        
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-slate-950 font-montserrat leading-[1.05] mb-3">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <p className="text-xs sm:text-base text-slate-600 font-roboto font-normal max-w-2xl mx-auto leading-relaxed mb-8">
          Everything you need to know about BetterMend and how our integrated urban services operate.
        </p>

        {/* 6 Category Filter Tabs (Pill Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#030C54] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </section>

      {/* 3. Main FAQ Accordion Card (Deep Navy Container) */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          {/* Header Inside Navy Box */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading text-white tracking-tight mb-2">
              {categoryHeaders[selectedCategory]?.title || "GENERAL INQUIRIES"}
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
              {categoryHeaders[selectedCategory]?.subtitle}
            </p>
          </div>

          {/* Accordion White Bars List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 sm:px-8 py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black tracking-wide uppercase font-heading text-slate-950 pr-2">
                      {faq.q}
                    </span>
                    
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#030C54] text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`stroke-[2.5] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>



      {/* 5. Assistance Protocol Banner: "STILL HAVE QUESTIONS?" */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-xl text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading tracking-tight">
                STILL HAVE QUESTIONS?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                Our dedicated operational desk is ready to help you with bookings, safety concerns, and merchant onboarding.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-[#030C54] font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
              >
                CONTACT SUPPORT
              </Link>
              <a
                href="/#download"
                className="px-7 py-3 rounded-full border border-white hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                GET STARTED
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Footer Capsule */}
      <Footer />

    </div>
  );
}
