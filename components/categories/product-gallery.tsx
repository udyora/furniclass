"use client";

import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
  productName: string;
}

export default function ProductGallery({
  images,
  mainImage,
  setMainImage,
  productName,
}: ProductGalleryProps) {
  return (
    <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 items-stretch">
      {/* 4 Thumbnails Vertical Stack (Fixed small aspect-ratio, perfectly stretched height match) */}
      <div className="flex sm:flex-col justify-between gap-3 w-full sm:w-28 shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setMainImage(img)}
            onMouseEnter={() => setMainImage(img)}
            className={`relative w-full aspect-4/3 sm:aspect-auto sm:flex-1 overflow-hidden p-1 bg-bg-card border transition-all cursor-pointer rounded-xs ${
              mainImage === img
                ? "border-gold shadow-xs"
                : "border-border-light hover:border-gold/50"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover object-center"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Featured Image Box */}
      <div className="flex-1 w-full aspect-4/3">
        <div className="relative h-full w-full p-2.5 bg-bg-card border border-border-light rounded-xs">
          <div className="relative h-full w-full overflow-hidden rounded-xs">
            <Image
              src={mainImage}
              alt={productName}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
