"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import {
  IoIosCall,
  MdEmail,
  FaHouse,
  IoLocationOutline,
} from "@/components/Icons";
import {
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Bike,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "support",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setToast({
        message: "Thank you! Your ticket has been submitted to BetterMend Regional Desk.",
        type: "success",
      });
      setTimeout(() => setToast(null), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* 1. Capsule Navbar */}
      <Navbar activePage="contact" />

      {/* 2. Hero Header Banner */}
      <section className="pt-[80px] sm:pt-[105px] md:pt-[120px] pb-2 sm:pb-3 px-3 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl text-left space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] font-heading font-montserrat">
              Contact Us
            </h1>

            <p className="text-xs sm:text-base text-white/85 leading-relaxed font-roboto font-normal pt-1 max-w-2xl">
              Have questions about multi-store orders, merchant onboarding, delivery fleets, or technical support? Connect with our dedicated sector team.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Main Grid: Contact Info Cards + Interactive Form */}
      <section className="py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* Card 1: Customer Care (Email) */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#030C54] flex items-center justify-center shrink-0 shadow-sm">
                <MdEmail size={24} />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-black font-heading text-slate-950">
                  Email Support Desk
                </h4>
                <p className="text-xs text-slate-600 font-sans">
                  Direct ticket tracking for orders, refunds, and inquiries.
                </p>
                <a
                  href="mailto:support@bettermend.com"
                  className="inline-block text-xs font-bold text-[#030C54] hover:underline pt-1"
                >
                  support@bettermend.com
                </a>
              </div>
            </div>

            {/* Card 2: Merchant & Partners (House / Corporate Desk) */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
                <FaHouse size={20} />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-black font-heading text-slate-950">
                  Partner Growth Desk
                </h4>
                <p className="text-xs text-slate-600 font-sans">
                  Store POS integration, catalog assistance, and rider registration.
                </p>
                <a
                  href="mailto:partners@bettermend.com"
                  className="inline-block text-xs font-bold text-[#030C54] hover:underline pt-1"
                >
                  partners@bettermend.com
                </a>
              </div>
            </div>

            {/* Card 3: 24/7 Helpline (Call) */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 shadow-sm">
                <IoIosCall size={24} />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-black font-heading text-slate-950">
                  Direct Operational Phone
                </h4>
                <p className="text-xs text-slate-600 font-sans">
                  Mon – Sat, 7:00 AM – 11:00 PM IST for instant call dispatch.
                </p>
                <a href="tel:+919207050655" className="inline-block text-xs font-black font-mono text-[#030C54] hover:underline pt-1">
                  +91 9207050655
                </a>
              </div>
            </div>

            {/* Card 4: Headquarters Location (Location Pin) */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                <IoLocationOutline size={24} />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-black font-heading text-slate-950">
                  BetterMend Private Limited
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  1st Floor, Chemilli Complex,<br />
                  Perumanna, Kottakkal - 676508,<br />
                  Kerala, India
                </p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 border border-slate-200/80 shadow-md">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black uppercase font-heading text-slate-950">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your message and assigned a regional support ticket. A sector representative will reach out to you within 20 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", category: "support", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#030C54] text-white text-xs font-black uppercase tracking-wider hover:bg-[#02083a] transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left border-b border-slate-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-slate-950 tracking-tight">
                      Send a Direct Inquiry
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 font-sans">
                      Fill out the form below and our regional sector desk will respond promptly.
                    </p>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#030C54] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#030C54] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#030C54] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Inquiry Department *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#030C54] focus:bg-white transition-all font-sans"
                      >
                        <option value="support">Customer Support &amp; Orders</option>
                        <option value="merchant">Merchant &amp; Store Onboarding</option>
                        <option value="delivery">Delivery Partner Fleet</option>
                        <option value="taxi">Taxi &amp; Cab Driver Support</option>
                        <option value="technician">Technicians &amp; Home Services</option>
                        <option value="grievance">Privacy &amp; Legal Grievance</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="text-left space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details about your query, order ID, or partnership requirements..."
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#030C54] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-[#030C54] hover:bg-[#02083a] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                  >
                    {submitting ? (
                      <span>DISPATCHING...</span>
                    ) : (
                      <>
                        <span>SUBMIT MESSAGE</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 4. Quick Help FAQ Bar */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto">
        <div className="bg-[#030C54] selection:bg-white selection:text-[#030C54] rounded-[28px] sm:rounded-[38px] p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight">
              LOOKING FOR INSTANT ANSWERS?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              Our dedicated operational desk is ready to help you with bookings, safety concerns, and merchant onboarding.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/faq"
              className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-[#030C54] font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              BROWSE FAQS
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full border border-white hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />

    </div>
  );
}
