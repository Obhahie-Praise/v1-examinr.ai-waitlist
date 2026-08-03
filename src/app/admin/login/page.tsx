"use client";

import { useActionState } from "react";
import { loginAdmin } from "./actions";

const initialState = { error: "" };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      const result = await loginAdmin(formData);
      return result ?? initialState;
    },
    initialState
  );

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo area */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl text-white-text">Examinr.ai</h1>
          <p className="text-light-dull-text text-sm mt-1 font-primary">
            Admin Access
          </p>
        </div>

        {/* Login card */}
        <div
          className="bg-white/[0.03] border border-white/[0.08] rounded-[20px] p-8"
        >
          <h2 className="text-white-text font-primary font-semibold text-lg mb-6">
            Sign in
          </h2>

          <form action={formAction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm text-light-dull-text font-primary"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-[10px] px-4 py-3 text-white-text font-primary text-sm placeholder:text-light-dull-text/60 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors duration-200"
              />
            </div>

            {state?.error && (
              <p className="text-error-red text-sm font-primary">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full mt-2 py-3 rounded-[10px] bg-linear-to-r from-[#2563EB] to-[#3B82F6] text-white-text font-primary font-medium text-sm transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {pending ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-light-dull-text/50 mt-6 font-primary">
          Examinr.ai Admin — Authorised access only
        </p>
      </div>
    </div>
  );
}
