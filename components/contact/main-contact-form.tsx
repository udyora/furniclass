"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CustomToast } from "@/components/common/toast";
import { Loader2, Upload, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface CustomEnquiryFormProps {
  sourceName?: string;
  buttonText?: string;
}

export default function MainContactForm({
  sourceName = "Homepage Custom Order Form",
  buttonText = "Submit Inquiry",
}: CustomEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    location: "",
    details: "",
    referenceImage: null as File | null,
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
      data.append("productName", sourceName);
      data.append("quantity", String(payload.quantity));
      data.append("location", payload.location);
      data.append("details", payload.details);

      if (payload.referenceImage) {
        data.append("referenceImage", payload.referenceImage);
      }

      const res = await fetch("/api/enquiries", {
        method: "POST",
        body: data,
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
        referenceImage: null,
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
  const pathname = usePathname();
  const isContactUs = pathname === "/contact-us";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-card p-6 border border-border-light font-quicksand space-y-6 rounded-xs"
    >
      <h2
        className={`text-primary font-bold border-b border-b-black/10 pb-4 text-2xl ${
          isContactUs ? "text-center lg:text-start" : "text-center"
        }`}
      >
        Custom Furniture Enquiry Form
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
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
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
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
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
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
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
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
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Attach Reference / Design Image (Optional)
        </label>
        <div className="flex items-center gap-3 border border-dashed border-border-light p-3.5 rounded-xs bg-white">
          <Upload className="w-5 h-5 text-primary shrink-0" />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                referenceImage: e.target.files ? e.target.files[0] : null,
              }))
            }
            className="text-xs text-muted-light file:mr-3 file:py-1.5 file:px-3 file:rounded-xs file:border-0 file:bg-primary file:text-white file:font-semibold file:cursor-pointer"
          />
          {formData.referenceImage && (
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, referenceImage: null }))
              }
              className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 font-medium ml-auto"
            >
              <X className="w-3.5 h-3.5" /> Remove
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Delivery Location / City *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Faridabad, Delhi NCR"
          value={formData.location}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, location: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Order Details &amp; Custom Specifications
        </label>
        <textarea
          rows={4}
          placeholder="Mention dimensions, material, or specific customization..."
          value={formData.details}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, details: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <div
        className={`flex pt-2 ${
          isContactUs ? "justify-center lg:justify-start" : "justify-center"
        }`}
      >
        <button
          type="submit"
          disabled={submitMutation.isPending}
          className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-10 py-3.5 rounded-xs transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
            </>
          ) : (
            buttonText
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
