"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { enquiriesService } from "@/services/enquiriesService";
import { CustomToast } from "@/components/common/toast";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    location: "",
    details: "",
    referenceImageUrl: "",
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
        referenceImageUrl: "",
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
      productName: "Contact Us Page Inquiry",
      quantity: Number(formData.quantity) || 1,
      location: formData.location,
      details: formData.details,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-card p-6 sm:p-10 rounded-xs border border-border-light font-quicksand space-y-6"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-dark mb-1.5"
        >
          Your Name *
        </label>
        <input
          id="contact-name"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="Abc@def.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="reference-url"
          className="block text-sm font-semibold text-dark mb-1.5"
        >
          Reference Image URL (Optional)
        </label>
        <input
          id="reference-url"
          type="url"
          placeholder="https://images.com/sample-furniture.jpg"
          value={formData.referenceImageUrl}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              referenceImageUrl: e.target.value,
            }))
          }
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-qty"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Quantity
          </label>
          <input
            id="contact-qty"
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

        <div>
          <label
            htmlFor="contact-location"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Delivery Location / City *
          </label>
          <input
            id="contact-location"
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
      </div>

      <div>
        <label
          htmlFor="contact-details"
          className="block text-sm font-semibold text-dark mb-1.5"
        >
          Order Details &amp; Custom Specifications
        </label>
        <textarea
          id="contact-details"
          rows={4}
          placeholder="Hi! Mention required dimensions, material, or specific customization requirements..."
          value={formData.details}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, details: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <div>
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
            "Submit Inquiry"
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
