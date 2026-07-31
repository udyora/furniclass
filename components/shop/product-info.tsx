"use client";

import { useState } from "react";
import EnquireModal from "../enquire-modal";

interface ProductInfoProps {
  name: string;
  price: string;
  originalPrice?: string;
  rating: string;
  description: string;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductInfo({
  name,
  price,
  originalPrice,
  rating,
  description,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
}: ProductInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizes = ["L", "XL", "XS"];
  const colors = [
    { hex: "#816dfa", name: "Purple" },
    { hex: "#000000", name: "Black" },
    { hex: "#b88e2f", name: "Gold" },
  ];

  return (
    <>
      <div className="lg:col-span-5 flex flex-col justify-start pl-0 lg:pl-4 pt-1 font-quicksand">
        {/* Product Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-none tracking-tight">
          {name}
        </h1>

        {/* Price Row */}
        <div className="mt-3 flex items-center gap-4">
          <span className="text-2xl font-medium text-muted-light">{price}</span>
          {originalPrice && (
            <span className="text-sm font-normal text-muted-light/60 line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Star Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-gold text-sm">★ ★ ★ ★ ★</div>
          <span className="text-xs text-muted-light pl-3 border-l border-border-light font-normal">
            {rating}
          </span>
        </div>

        {/* Short Description */}
        <p className="mt-4 text-sm text-dark font-normal leading-relaxed max-w-lg">
          {description}
        </p>

        {/* Size Options */}
        <div className="mt-2">
          <span className="block text-sm font-normal text-muted-light mb-2.5">
            Size
          </span>
          <div className="flex items-center gap-3">
            {sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`h-8 w-8 text-xs rounded-xs flex items-center justify-center transition-all cursor-pointer ${
                  selectedSize === sz
                    ? "bg-gold text-white font-medium"
                    : "bg-bg-card text-dark border border-border-light hover:bg-gold/10"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="mt-3">
          <span className="block text-sm font-normal text-muted-light mb-2.5">
            Color
          </span>
          <div className="flex items-center gap-3.5">
            {colors.map((c) => (
              <button
                key={c.hex}
                type="button"
                onClick={() => setSelectedColor(c.hex)}
                aria-label={`Select ${c.name}`}
                style={{ backgroundColor: c.hex }}
                className={`h-7 w-7 rounded-full cursor-pointer transition-transform ${
                  selectedColor === c.hex
                    ? "scale-110 ring-2 ring-offset-2 ring-gold"
                    : "opacity-90 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quantity & Enquire Button Row */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-12 items-center border border-border-light rounded-xs bg-white px-2">
            <button
              type="button"
              onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
              className="w-8 text-center text-base text-dark hover:opacity-70 cursor-pointer"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-medium text-dark select-none">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-8 text-center text-base text-dark hover:opacity-70 cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Enquire Now Button Opens Modal */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="h-12 px-10 flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium text-base rounded-xs transition-colors shadow-xs cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={quantity}
      />
    </>
  );
}
