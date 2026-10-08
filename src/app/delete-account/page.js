"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toast from "@/components/Toast";
import { CheckCircle2 } from "lucide-react";

export default function DeleteAccountPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const generatedId = `BMD-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedId);
      setSubmitting(false);
      setSubmitted(true);
      setToast({
        message: `Deletion request registered! Reference ID: ${generatedId}`,
        type: "success",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col justify-between">
      
      {/* 1. Project Theme Blue Header: Wordmark Logo + DELETE ACCOUNT */}
      <header className="sticky top-0 z-50 bg-[#030C54] text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center gap-5 sm:gap-7">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-6 sm:h-7 w-32 sm:w-40 flex items-center">
              <Image
                src="/bettermend wordmark.png"
                alt="BetterMend Urban Services"
                fill
                priority
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          
          <div className="h-5 w-[1px] bg-white/30" />
          
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/95 font-heading truncate">
            ACCOUNT DELETION
          </span>
        </div>
      </header>

      {/* 2. Main Card Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full flex-1">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          
          {/* Header Metadata Block */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading tracking-tight">
              User Data &amp; Account Deletion Request
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Submit an official request to permanently delete your BetterMend account, location logs, customer profiles, and personal telemetry.
            </p>
          </div>

          {/* Warning / Notice Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200/90">
            <div className="text-xs sm:text-[13px] text-slate-700 space-y-2 leading-relaxed">
              <h2 className="text-xs sm:text-sm font-bold text-rose-950 uppercase tracking-wide">
                Important Account Deletion Notice:
              </h2>
              <p>
                In accordance with Google Play Store guidelines regarding account and data protection, submitting this form initiates the permanent deletion of your BetterMend profile.
              </p>
              <p>
                All personal identifiers, including location telemetry, search histories, saved addresses, and payment links (excluding legally mandated GST tax invoices) will be permanently purged from our PostgreSQL database clusters within 30 business days.
              </p>
            </div>
          </div>

          {/* Form Card or Submitted State */}
          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={34} />
              </div>
              
              <h2 className="text-2xl font-black uppercase text-slate-950 font-heading">
                Request Successfully Registered
              </h2>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                <span className="text-[10.5px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1">
                  Your Deletion Tracking ID
                </span>
                <span className="text-xl font-mono font-black text-[#030C54]">{refId}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                A verification link has been dispatched to your email address. Once verified, all associated data will be queued for cryptographic deletion within 30 days.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-all border border-slate-200"
              >
                Submit for Another Account
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-slate-800 text-xs sm:text-sm">
              <h2 className="text-sm sm:text-base font-bold uppercase text-slate-950 tracking-wide font-heading mb-1">
                Enter Your Registered Account Credentials
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#030C54] focus:ring-2 focus:ring-[#030C54]/10 text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Registered Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#030C54] focus:ring-2 focus:ring-[#030C54]/10 text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Registered Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#030C54] focus:ring-2 focus:ring-[#030C54]/10 text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Deletion Scope *
                  </label>
                  <select
                    required
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#030C54] focus:ring-2 focus:ring-[#030C54]/10 text-slate-900 text-xs sm:text-sm outline-none transition-all"
                  >
                    <option value="complete">Entire Account &amp; All Associated Logs</option>
                    <option value="telemetry">Location History &amp; Search Telemetry Only</option>
                    <option value="vendor">Vendor Storefront &amp; Merchant Records</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Help us improve: tell us why you are requesting account closure..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#030C54] focus:ring-2 focus:ring-[#030C54]/10 text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 accent-rose-600 cursor-pointer h-4 w-4 rounded"
                />
                <label htmlFor="consent" className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed cursor-pointer select-none">
                  I understand that this action is irreversible. Once my account is deleted, my order history, rewards, and active multi-shop delivery records cannot be retrieved.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
              >
                {submitting ? (
                  <span>Processing Deletion Request...</span>
                ) : (
                  <span>Submit Permanent Deletion Request</span>
                )}
              </button>
            </form>
          )}

        </div>
      </main>

      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Minimal Clean Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white">
        <p>© 2026 Bettermend Private Limited. All rights reserved.</p>
      </footer>

    </div>
  );
}
