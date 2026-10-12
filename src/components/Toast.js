"use client";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md ${
          isSuccess
            ? "bg-slate-900/95 border-emerald-500/40 text-emerald-400"
            : "bg-slate-900/95 border-rose-500/40 text-rose-400"
        }`}
      >
        {isSuccess ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
        <span className="text-sm font-medium text-white">{toast.message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-text-muted hover:text-white ml-2"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
