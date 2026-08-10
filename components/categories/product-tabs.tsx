"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductTabsProps {
  fullName: string;
}

export default function ProductTabs({ fullName }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "info" | "reviews"
  >("description");

  return (
    <div className="pt-20">
      <div className="flex justify-start gap-8 sm:gap-10 border-b border-border-light pb-4 text-xl sm:text-2xl font-medium">
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`pb-2 transition-colors cursor-pointer ${
            activeTab === "description"
              ? "text-dark border-b-2 border-dark"
              : "text-muted-light hover:text-dark"
          }`}
        >
          Description
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("info")}
          className={`pb-2 transition-colors cursor-pointer ${
            activeTab === "info"
              ? "text-dark border-b-2 border-dark"
              : "text-muted-light hover:text-dark"
          }`}
        >
          Additional Information
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 transition-colors cursor-pointer ${
            activeTab === "reviews"
              ? "text-dark border-b-2 border-dark"
              : "text-muted-light hover:text-dark"
          }`}
        >
          Reviews
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "description" && (
          <div className="space-y-6 text-sm text-muted-light leading-relaxed">
            <p>
              Bring grandeur and comfort together with the{" "}
              <strong className="text-dark">{fullName}</strong>. Upholstered in
              high-quality fabric with deep, wide seating, this sofa is designed
              to be the centerpiece of any spacious living area. Its plush
              cushions and broad armrests provide unmatched relaxation, while
              its modern design adds a sophisticated touch to your home.
            </p>
            <p>
              Whether you’re entertaining guests or simply lounging with family,
              Lolito offers the perfect blend of luxury, space, and support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-border-light">
                <Image
                  src="https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp"
                  alt="Sofa Context 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-border-light">
                <Image
                  src="https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp"
                  alt="Sofa Context 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-bg-card p-6 rounded-xs border border-border-light text-sm text-dark">
            <div>
              <strong className="text-dark">Upholstery:</strong> Premium Fabric
              / Velvet
            </div>
            <div>
              <strong className="text-dark">Frame:</strong> Hardwood Structural
              Frame
            </div>
            <div>
              <strong className="text-dark">Customization:</strong> Size, Color
              &amp; Material Built-to-order
            </div>
            <div>
              <strong className="text-dark">Warranty:</strong> 10-Year
              Structural Guarantee
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-8 bg-bg-card rounded-xs border border-border-light">
            <p className="text-dark font-medium text-base">Customer Reviews</p>
            <p className="text-xs text-muted-light mt-1">
              4.0 rating based on verified custom orders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
