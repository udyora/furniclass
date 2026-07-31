"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "customized", // 'quick' | 'customized'
    quantity: 1,
    location: "",
    message: "",
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your order inquiry has been received.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-card p-6 sm:p-10 rounded-xs border border-border-light font-quicksand space-y-6"
    >
      {/* Order Type Selection */}
      <div>
        <label className="block text-sm font-bold text-dark mb-2">
          What type of order do you need?
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, orderType: "quick" }))
            }
            className={`py-3 px-4 text-xs sm:text-sm font-bold rounded-xs border transition-all cursor-pointer ${
              formData.orderType === "quick"
                ? "bg-primary text-white border-primary"
                : "bg-white text-dark border-border-light hover:border-primary/50"
            }`}
          >
            Quick Order
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, orderType: "customized" }))
            }
            className={`py-3 px-4 text-xs sm:text-sm font-bold rounded-xs border transition-all cursor-pointer ${
              formData.orderType === "customized"
                ? "bg-primary text-white border-primary"
                : "bg-white text-dark border-border-light hover:border-primary/50"
            }`}
          >
            Order Customized Furniture
          </button>
        </div>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-dark mb-1.5"
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
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="email"
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
            htmlFor="phone"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="phone"
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

      {/* Reference Image Upload */}
      <div>
        <label
          htmlFor="reference-image"
          className="block text-sm font-semibold text-dark mb-1.5"
        >
          Upload Reference Image{" "}
          {formData.orderType === "customized" && "(Recommended)"}
        </label>
        <input
          id="reference-image"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              image: e.target.files ? e.target.files[0] : null,
            }))
          }
          className="w-full bg-white border border-border-light rounded-xs p-2 text-xs text-muted-light cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-xs file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-hover"
        />
      </div>

      {/* Quantity & Location Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-semibold text-dark mb-1.5"
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
            className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-dark mb-1.5"
          >
            Delivery Location / City *
          </label>
          <input
            id="location"
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

      {/* Textarea / Additional Details */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-dark mb-1.5"
        >
          Order Details &amp; Custom Specifications
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Hi! Mention required dimensions, material, or specific customization requirements..."
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full bg-white border border-border-light rounded-xs px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-10 py-3.5 rounded-xs transition-colors shadow-xs cursor-pointer"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
