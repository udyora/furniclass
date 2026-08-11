"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CustomToast } from "@/components/common/toast";
import { Loader2 } from "lucide-react";

export default function MainContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    location: "",
    details: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const submitMutation = useMutation({
    mutationFn: async (payload: typeof formData) => {
      const data = new FormData();
      data.append("name", payload.name);
      data.append("email", payload.email);
      data.append("phone", payload.phone);
      data.append("productName", "Homepage Studio Custom Form");
      data.append("quantity", String(payload.quantity));
      data.append("location", payload.location);
      data.append("details", payload.details);

      const res = await fetch("/api/enquiries", {
        method: "POST",
        body: data, // Form Data format resolves "Content-Type" error
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit enquiry.");
      }

      return res.json();
    },
    onSuccess: () => {
      setToast({
        message: "Thank you! Your custom order enquiry has been received.",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        quantity: 1,
        location: "",
        details: "",
      });
    },
    onError: (error: Error) => {
      setToast({
        message: error.message || "Failed to submit enquiry. Please try again.",
        type: "error",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-card p-6 sm:p-10 border border-border-light font-quicksand space-y-6 rounded-none"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-dark mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-dark mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-dark mb-1.5">
            Whatsapp Number *
          </label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-dark mb-1.5">
            Quantity
          </label>
          <input
            type="number"
            min={1}
            value={formData.quantity}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                quantity: parseInt(e.target.value) || 1,
              }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-dark mb-1.5">
          Delivery Location / City *
        </label>
        <input
          type="text"
          required
          placeholder="Enter your location"
          value={formData.location}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, location: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-dark mb-1.5">
          Order Details &amp; Custom Specifications
        </label>
        <textarea
          rows={4}
          placeholder="Mention dimensions, material, or specific customization..."
          value={formData.details}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, details: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary resize-none"
        />
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={submitMutation.isPending}
          className="bg-primary hover:bg-primary-hover text-white font-bold text-base px-10 py-3 rounded-xs transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>

      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </form>
  );
}
