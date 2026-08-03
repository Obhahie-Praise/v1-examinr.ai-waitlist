"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle } from "lucide-react";

interface DeleteConfirmationModalProps {
  count: number;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function DeleteConfirmationModal({
  count,
  onConfirm,
  onCancel,
  loading = false,
}: DeleteConfirmationModalProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  // Focus the cancel button on mount for safety
  useEffect(() => {
    cancelRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onCancel]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative bg-[#0E1318] border border-white/[0.1] rounded-[20px] p-8 w-full max-w-sm shadow-2xl">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 mx-auto">
          <AlertTriangle size={22} className="text-red-400" />
        </div>

        {/* Heading */}
        <h2 className="text-white-text font-primary font-semibold text-center text-lg mb-3">
          Delete {count} {count === 1 ? "user" : "users"}?
        </h2>

        {/* Body */}
        <p className="text-light-dull-text text-sm font-primary text-center leading-relaxed mb-8">
          This will permanently remove{" "}
          <span className="text-white-text font-medium">
            {count} {count === 1 ? "user" : "users"}
          </span>{" "}
          from the waitlist. This action cannot be undone.
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            ref={cancelRef}
            onClick={onCancel}
            disabled={loading}
            className="flex-1 py-2.5 rounded-[10px] border border-white/[0.1] text-white-text font-primary text-sm font-medium hover:bg-white/[0.05] transition-colors duration-200 cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-2.5 rounded-[10px] bg-red-500/90 hover:bg-red-500 text-white font-primary text-sm font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
