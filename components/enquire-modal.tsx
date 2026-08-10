"use client";

import React, { useState } from "react";
import { CustomToast } from "@/components/common/toast";
import { Loader2, Upload } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function EnquireModal({
  isOpen,
  onClose,
  productName = "Custom Furniture Item",
}: EnquireModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    location: "",
    details: "",
    referenceImage: null as File | null,
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
      payload.append("location", formData.location);
      payload.append("details", formData.details);

      if (formData.referenceImage) {
        payload.append("referenceImage", formData.referenceImage);
      }

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
      <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
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
          Submit your requirements and our custom build team will contact you
          shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Your Name *
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Email Address *
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-dark mb-1">
                Phone Number *
              </label>
              <input
                required
                type="tel"
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
              Attach Reference / Design Image (Optional)
            </label>
            <div className="flex items-center gap-2 border border-dashed border-gray-300 p-3 rounded-md bg-gray-50">
              <Upload className="w-4 h-4 text-primary shrink-0" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    referenceImage: e.target.files ? e.target.files[0] : null,
                  })
                }
                className="text-xs text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-primary file:text-white file:font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-dark mb-1">
              Order Details & Custom Specifications
            </label>
            <textarea
              rows={3}
              placeholder="Dimensions, wood type, fabric finish, or specific customization..."
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
                "Submit"
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
