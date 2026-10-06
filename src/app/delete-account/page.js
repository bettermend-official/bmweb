"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, FileText, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar activePage="delete-account" />

      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/25 text-rose-400 tracking-wide uppercase mb-4">
            <ShieldAlert size={14} />
            Google Play Store Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-heading">
            User Data & Account Deletion Request
          </h1>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
            Submit an official request to permanently delete your BetterMend account, location logs, customer profiles, and personal telemetry.
          </p>
        </div>

        {/* Warning / Notice Banner */}
        <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 mb-10 flex items-start gap-4">
          <AlertTriangle size={24} className="text-rose-400 flex-shrink-0 mt-1" />
          <div className="text-xs text-text-muted space-y-2 leading-relaxed">
            <h4 className="text-sm font-bold text-white">Important Account Deletion Notice:</h4>
            <p>
              In accordance with Google Play Store guidelines regarding account and data protection, submitting this form initiates the permanent deletion of your BetterMend profile.
            </p>
            <p>
              All personal identifiers, including location telemetry, search histories, saved addresses, and payment links (excluding legally mandated GST tax invoices) will be permanently purged from our PostgreSQL database clusters within 30 business days.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-card border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={34} />
              </div>
              
              <h2 className="text-2xl font-bold text-white font-heading">
                Request Successfully Registered
              </h2>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 max-w-sm mx-auto">
                <span className="text-[11px] text-text-muted uppercase tracking-wider block mb-1">
                  Your Deletion Tracking ID
                </span>
                <span className="text-xl font-mono font-bold text-primary">{refId}</span>
              </div>

              <p className="text-xs text-text-muted max-w-md mx-auto leading-relaxed">
                A verification link has been dispatched to your email address. Once verified, all associated data will be queued for cryptographic deletion within 30 days.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition-all"
              >
                Submit for Another Account
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              <h3 className="text-lg font-bold text-white mb-4">
                Enter Your Registered Account Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted mb-1.5 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1.5 font-semibold">Registered Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted mb-1.5 font-semibold">Registered Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1.5 font-semibold">Deletion Scope *</label>
                  <select
                    required
                    className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-xs"
                  >
                    <option value="complete">Entire Account & All Associated Logs</option>
                    <option value="telemetry">Location History & Search Telemetry Only</option>
                    <option value="vendor">Vendor Storefront & Merchant Records</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-text-muted mb-1.5 font-semibold">Reason for Deletion (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Help us improve: tell us why you are requesting account closure..."
                  className="w-full p-3 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-rose-500 text-xs"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 accent-rose-500 cursor-pointer"
                />
                <label htmlFor="consent" className="text-text-muted text-[11px] leading-relaxed cursor-pointer">
                  I understand that this action is irreversible. Once my account is deleted, my order history, rewards, and active multi-shop delivery records will cannot be retrieved.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg hover:shadow-rose-600/30 transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <span>Processing Deletion Request...</span>
                ) : (
                  <>
                    <ShieldAlert size={16} />
                    <span>Submit Permanent Deletion Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </main>

      <Toast toast={toast} onClose={() => setToast(null)} />
      <Footer />
    </div>
  );
}
