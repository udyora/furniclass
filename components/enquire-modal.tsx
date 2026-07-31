"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]+$/, "Invalid phone number format"),
  location: z.string().min(2, "Delivery location is required"),
  notes: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export default function EnquireModal({
  isOpen,
  onClose,
  productName,
  selectedSize,
  selectedColor,
  quantity,
}: EnquireModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  if (!isOpen) return null;

  const onSubmit = (data: EnquiryFormData) => {
    console.log("Enquiry Submitted:", {
      ...data,
      productName,
      selectedSize,
      selectedColor,
      quantity,
    });
    alert(
      "Enquiry submitted successfully! Check your account for status updates.",
    );
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 backdrop-blur-xs p-4 font-quicksand">
      <div className="relative w-full max-w-xl bg-bg-main rounded-xs border border-border-light p-8 sm:p-10 shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-dark transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div>
          <h2 className="text-3xl font-bold text-dark">
            Quick Furniture Enquiry
          </h2>
          <p className="mt-2 text-base text-muted-light">
            Product:{" "}
            <span className="font-semibold text-primary">{productName}</span> (
            {selectedSize} / {quantity} Qty)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-base font-bold text-dark mb-2">
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="e.g. Abhishek Sharma"
              className="w-full bg-bg-main border border-border-light rounded-xs px-4 py-3.5 text-base text-dark focus:outline-none focus:border-primary transition-colors"
            />
            {errors.fullName && (
              <p className="mt-1.5 text-base text-pink font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-bold text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="itsabhishek@gmail.com"
                className="w-full bg-bg-main border border-border-light rounded-xs px-4 py-3.5 text-base text-dark focus:outline-none focus:border-primary transition-colors"
              />
              {errors.email && (
                <p className="mt-1.5 text-base text-pink font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-base font-bold text-dark mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+91-6377611XXX"
                className="w-full bg-bg-main border border-border-light rounded-xs px-4 py-3.5 text-base text-dark focus:outline-none focus:border-primary transition-colors"
              />
              {errors.phone && (
                <p className="mt-1.5 text-base text-pink font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-base font-bold text-dark mb-2">
              Delivery City / Location *
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="e.g. Mansarovar, Jaipur"
              className="w-full bg-bg-main border border-border-light rounded-xs px-4 py-3.5 text-base text-dark focus:outline-none focus:border-primary transition-colors"
            />
            {errors.location && (
              <p className="mt-1.5 text-base text-pink font-medium">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-base font-bold text-dark mb-2">
              Additional Requirements / Notes
            </label>
            <textarea
              rows={3}
              {...register("notes")}
              placeholder="Mention custom size, wood finish, or delivery timeline..."
              className="w-full bg-bg-main border border-border-light rounded-xs px-4 py-3.5 text-base text-dark focus:outline-none focus:border-primary resize-none transition-colors"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-xs transition-colors cursor-pointer shadow-xs disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
