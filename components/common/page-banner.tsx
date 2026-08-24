"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const fixedImage = {
  src: "/furniclass-logo.png",
  alt: "Furniclass Logo",
};

const galleryImages = [
  { src: "/gallery-one.webp", alt: "Modern Interior One" },
  { src: "/modern-loung-soffa.webp", alt: "Modern Lounge Sofa" },
  { src: "/gallery-two.webp", alt: "Living Space Setup" },
  { src: "/accent-table.webp", alt: "Accent Table" },
  { src: "/gallery-three.webp", alt: "Contemporary Room Decor" },
  { src: "/cognac-leather-mid-century.webp", alt: "Cognac Leather Chair" },
  { src: "/gallery-four.webp", alt: "Minimalist Furniture" },
  { src: "/pedestal-coffee-table.webp", alt: "Pedestal Coffee Table" },
  { src: "/gallery-five.webp", alt: "Cozy Corner Inspiration" },
  { src: "/nordic-oak-lounge.webp", alt: "Nordic Oak Lounge" },
  { src: "/gallery-six.webp", alt: "Interior Aesthetic" },
  { src: "/bent-leg-table.webp", alt: "Bent Leg Table" },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const marqueeItems = [...galleryImages, ...galleryImages];

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="w-full overflow-x-hidden bg-bg-cream py-8 sm:py-12 font-quicksand mb-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Wrapper */}
          <div className="flex items-center gap-2 overflow-hidden">
            {/* 1. Fixed Left Image (Clickable & Larger) */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 bg-[#040B1E] shrink-0 z-20 overflow-hidden border border-border-light p-3 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
              role="button"
              tabIndex={0}
            >
              <Image
                src={fixedImage.src}
                alt={fixedImage.alt}
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* 2. Marquee Slider (Square 1:1 Aspect Ratio) */}
            <div className="relative flex-1 overflow-hidden">
              <div className="animate-marquee flex items-center w-max gap-0">
                {marqueeItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 shrink-0 overflow-hidden border border-border-light shadow-md transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md sm:max-w-lg aspect-square bg-[#040B1E] border-2 border-white/20 shadow-2xl overflow-hidden p-6"
          >
            <Image
              src={fixedImage.src}
              alt={fixedImage.alt}
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      )}
    </>
  );
}
