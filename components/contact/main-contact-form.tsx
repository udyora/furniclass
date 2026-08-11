"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { enquiriesService } from "@/services/enquiriesService";
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
    mutationFn: enquiriesService.createEnquiry,
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
    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      productName: "Homepage Studio Custom Form",
      quantity: Number(formData.quantity) || 1,
      location: formData.location,
      details: formData.details,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-card p-6 sm:p-10 border border-border-light font-quicksand space-y-6 rounded-none"
    >
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-dark mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-dark mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Phone & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-dark mb-1.5"
          >
            Whatshapp Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-bold text-dark mb-1.5"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            value={formData.quantity}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                quantity: parseInt(e.target.value) || 1,
              }))
            }
            className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Location */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-bold text-dark mb-1.5"
        >
          Delivery Location / City *
        </label>
        <input
          id="location"
          type="text"
          required
          placeholder="Enter your location"
          value={formData.location}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, location: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Row 4: Specifications */}
      <div>
        <label
          htmlFor="details"
          className="block text-sm font-bold text-dark mb-1.5"
        >
          Order Details &amp; Custom Specifications
        </label>
        <textarea
          id="details"
          rows={4}
          placeholder="Mention dimensions, material, or specific customization..."
          value={formData.details}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, details: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-sm px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
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
