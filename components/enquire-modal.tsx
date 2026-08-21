"use client";

import React, { useState } from "react";
import { CustomToast } from "@/components/common/toast";
import { Loader2 } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  selectedColor?: string;
  quantity?: number;
}

export default function EnquireModal({
  isOpen,
  onClose,
  productName = "Custom Furniture Item",
  selectedColor = "",
  quantity = 1,
}: EnquireModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity,
    location: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("productName", productName);
      payload.append("quantity", String(formData.quantity));
      payload.append("selectedColor", selectedColor);
      payload.append("location", formData.location);
      payload.append("details", formData.details);

      const res = await fetch("/api/enquiries", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Failed to submit enquiry.");

      setToast({ message: "Enquiry submitted successfully!", type: "success" });
      setTimeout(() => onClose(), 1200);
    } catch (err: any) {
      setToast({
        message: err.message || "Something went wrong.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs font-quicksand">
      <div className="relative w-full max-w-xl rounded-xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-dark text-lg font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-dark mb-1">
          Enquire for {productName}
        </h2>
        <p className="text-xs text-muted mb-6">
          Submit your contact details and our team will get in touch with you
          shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-dark mb-1">
              Your Name *
            </label>
            <input
              required
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Whatsapp Number *
              </label>
              <input
                required
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: parseInt(e.target.value) || 1,
                  })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Delivery Location / City *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Faridabad, Delhi NCR"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-dark mb-1">
              Message / Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Any specific note or preferred time to contact..."
              value={formData.details}
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary-hover text-white px-10 py-2.5 rounded-md font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>
        </form>

        {toast && (
          <CustomToast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}
