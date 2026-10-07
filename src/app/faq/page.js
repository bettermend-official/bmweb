"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0); // open first question by default

  const categories = [
    { id: "all", label: "ALL QUESTIONS" },
    { id: "ecosystem", label: "ECOSYSTEM & VISION" },
    { id: "services", label: "SERVICES & COVERAGE" },
    { id: "community", label: "BUSINESSES & WORKERS" },
    { id: "orders", label: "ORDERS & ACCOUNT" },
  ];

  const categoryHeaders = {
    all: {
      title: "ALL QUESTIONS & ANSWERS",
      subtitle: "Comprehensive answers to common questions about BetterMend's super app and services.",
    },
    ecosystem: {
      title: "ECOSYSTEM & PLATFORM VISION",
      subtitle: "Understand how the BetterMend ecosystem connects people, businesses, and essential services.",
    },
    services: {
      title: "SERVICES & COVERAGE",
      subtitle: "Explore our transportation, delivery, skilled workers, and E Services network.",
    },
    community: {
      title: "LOCAL BUSINESSES & WORKERS",
      subtitle: "Learn how we empower local merchants, neighborhood trade, and skilled professionals.",
    },
    orders: {
      title: "ORDERS, CARTS & ACCOUNT",
      subtitle: "Details on multi-shop cart delivery and managing your data requests.",
    },
  };

  const allFaqs = [
    {
      id: "faq-1",
      category: "ecosystem",
      q: "WHAT IS THE BETTERMEND ECOSYSTEM?",
      a: "The BetterMend ecosystem connects customers, local businesses, skilled professionals, transportation providers, and essential services through one digital platform.",
    },
    {
      id: "faq-2",
      category: "services",
      q: "HOW IS BETTERMEND DIFFERENT FROM A DELIVERY APP?",
      a: "Delivery is only one part of BetterMend. The platform is designed as a broader super app covering transportation, delivery, skilled workers, and E Services.",
    },
    {
      id: "faq-3",
      category: "ecosystem",
      q: "WHO IS PART OF THE BETTERMEND ECOSYSTEM?",
      a: "Customers, local businesses, skilled professionals, transportation providers, and essential service providers can all form part of the BetterMend ecosystem.",
    },
    {
      id: "faq-4",
      category: "community",
      q: "HOW DOES BETTERMEND SUPPORT LOCAL BUSINESSES?",
      a: "BetterMend aims to help local businesses build digital connections with nearby customers and participate in a connected regional service ecosystem.",
    },
    {
      id: "faq-5",
      category: "community",
      q: "HOW DOES BETTERMEND SUPPORT SKILLED WORKERS?",
      a: "BetterMend connects skilled professionals with customers looking for services, helping create greater access to local demand.",
    },
    {
      id: "faq-6",
      category: "services",
      q: "IS BETTERMEND AVAILABLE EVERYWHERE IN INDIA?",
      a: "Availability depends on location. BetterMend is expanding progressively, beginning with regional markets before moving toward wider coverage.",
    },
    {
      id: "faq-7",
      category: "services",
      q: "WHAT SERVICES DOES BETTERMEND PROVIDE?",
      a: "BetterMend brings transportation, delivery, skilled workers, and E Services together on one platform. Service availability can vary by location.",
    },
    {
      id: "faq-8",
      category: "ecosystem",
      q: "WHAT IS THE VISION OF BETTERMEND?",
      a: "BetterMend aims to make everyday life simpler by connecting people, businesses, professionals, transportation providers, and essential services through one platform.",
    },
    {
      id: "faq-9",
      category: "ecosystem",
      q: "WHERE WAS BETTERMEND CREATED?",
      a: "BetterMend was created in Kerala, India, with a vision to build technology for regional communities and eventually serve wider markets.",
    },
    {
      id: "faq-10",
      category: "ecosystem",
      q: "WHO CAN USE BETTERMEND?",
      a: "Customers can use BetterMend to discover and access everyday services. Businesses, professionals, and transportation providers can participate in the wider BetterMend ecosystem subject to applicable onboarding and service requirements.",
    },
    {
      id: "faq-11",
      category: "orders",
      q: "HOW DOES MULTI SHOP CART DELIVERY WORK?",
      a: "When you add items from multiple shops in a single checkout, the app coordinates the pickup sequence. A single delivery partner receives the route, stops at the respective locations in sequence, and delivers everything in one batch.",
    },
    {
      id: "faq-12",
      category: "community",
      q: "CAN I REGISTER AS A MERCHANT ON THE PLATFORM?",
      a: "Yes! You can download the Vendor App or visit our Ecosystem overview to learn more about setting up your storefront. Local Sector Admins will review and approve your storefront.",
      link: { text: "Explore Ecosystem →", href: "/ecosystem" },
    },
    {
      id: "faq-13",
      category: "orders",
      q: "HOW CAN I DELETE MY ACCOUNT AND ASSOCIATED DATA?",
      a: "In accordance with Google Play Store guidelines, we provide a dedicated request system. Go to our Data Deletion Request Page, enter your registered credentials, and submit the form. Your profile and telemetry will be purged within 30 days.",
      link: { text: "Go to Data Deletion Request Page →", href: "/delete-account" },
    },
  ];

  // Filter FAQs based on active tab
  const filteredFaqs =
    selectedCategory === "all"
      ? allFaqs
      : allFaqs.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Capsule Navbar */}
      <Navbar activePage="faq" />

      {/* 2. Hero Header Section */}
      <section className="pt-[110px] sm:pt-[130px] pb-6 px-4 sm:px-6 w-full max-w-[1312px] mx-auto text-center">
        
        {/* H1 as specified in PDF */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-slate-950 font-montserrat leading-[1.05] mb-3">
          Everything You Need. <br />
          One BetterMend.
        </h1>

        {/* Core Entity Description */}
        <p className="text-xs sm:text-base text-slate-600 font-roboto font-normal max-w-2xl mx-auto leading-relaxed mb-8">
          BetterMend is a super app created in Kerala that brings transportation, delivery, skilled workers, and essential digital services together on one platform.
        </p>

        {/* Category Filter Tabs (Pill Buttons) */}
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
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          {/* Header Inside Navy Box */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-heading text-white tracking-tight mb-2">
              {categoryHeaders[selectedCategory]?.title || "FREQUENTLY ASKED QUESTIONS"}
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
                  key={faq.id || idx}
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

      {/* 4. Assistance Protocol Banner: "STILL HAVE QUESTIONS?" */}
      <section className="py-4 px-4 sm:px-6 w-full max-w-[1312px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
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

      {/* 5. Footer Capsule */}
      <Footer />

    </div>
  );
}
