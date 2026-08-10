"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { CustomToast } from "@/components/common/toast";
import Image from "next/image";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const { login, isLoggingIn } = useAuth();
  const [email, setEmail] = useState("admin@studio.com");
  const [password, setPassword] = useState("AdminPass123!");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setToast({
        message: "Login Successful! Redirecting...",
        type: "success",
      });

      // Direct hard redirect forces browser to send the new HttpOnly cookie
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 300);
    } catch (err: any) {
      setToast({
        message: err.message || "Invalid Email or Password",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-card p-4 font-quicksand">
      <div className="w-full max-w-md bg-white border border-border-light rounded-2xl p-8 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <Image
            src="https://framerusercontent.com/images/4dDx8WToAAsxnFZQOx5l23Fy8.svg"
            alt="Logo"
            width={160}
            height={40}
            className="mx-auto object-contain"
          />
          <h1 className="text-xl font-bold font-poppins text-dark">
            Admin Portal Login
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-dark mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@studio.com"
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-border-light rounded-lg text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 bg-white border border-border-light rounded-lg text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoggingIn ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign In to Studio"
            )}
          </button>
        </form>
      </div>

      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
