"use client";

import React, { useState } from "react";
import Image from "next/image";
import MainContactForm from "./contact/main-contact-form";
import { X } from "lucide-react";
import SectionHeading from "./common/section-heading";

const fixedImage = {
  src: "/furniclass-logo.png",
  alt: "Furniclass Logo",
};

const galleryImages = [
  {
    src: "https://framerusercontent.com/images/3GB2Pah9N4LedXnHFT9WWE6Gsk.webp?width=4096&height=2731",
    alt: "Lolito Sofa",
  },
  {
    src: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg?width=3264&height=3264",
    alt: "Respira Outdoor Set",
  },
  {
    src: "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp?width=4096&height=2732",
    alt: "Lumo Night Lamp",
  },
  {
    src: "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp?width=415&height=500",
    alt: "Dining Furniture",
  },
  {
    src: "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp?width=414&height=500",
    alt: "Living Room Setup",
  },
  {
    src: "https://framerusercontent.com/images/E1SeXrbQeB7bVC1LQduOpuhLg.webp?width=415&height=500",
    alt: "Bedroom Furniture",
  },
  {
    src: "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp?width=415&height=550",
    alt: "Interior Room Inspiration 1",
  },
  {
    src: "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp?width=415&height=550",
    alt: "Interior Room Inspiration 2",
  },
  {
    src: "https://framerusercontent.com/images/qzRnfwWaiU5GfrtihylFXPP6vc.webp?width=414&height=550",
    alt: "Interior Room Inspiration 3",
  },
  {
    src: "https://framerusercontent.com/images/fqDYm6jymxWJSNIUFSEjk9RKWvs.jpg?width=7342&height=4900",
    alt: "Natural Light Interior",
  },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const marqueeItems = [...galleryImages, ...galleryImages];

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="w-full overflow-x-hidden pt-8 sm:pt-12 font-quicksand"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Wrapper with Fixed Left Image + Marquee Slider */}
          <div className="flex items-center gap-3 sm:gap-4 mb-8 overflow-hidden">
            {/* 1. Fixed Left Image (Clickable trigger for Modal) */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative size-28 bg-primary sm:h-35 sm:w-35 shrink-0 z-20 overflow-hidden border border-border-light p-1 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
              role="button"
              tabIndex={0}
              aria-label="Enlarge logo preview"
            >
              <Image
                src={fixedImage.src}
                alt={fixedImage.alt}
                fill
                sizes="(max-width: 640px) 112px, 140px"
                className="object-contain rounded-full"
                unoptimized
              />
            </div>

            {/* 2. Marquee Wrapper for Sliding Images */}
            <div className="relative flex-1 overflow-hidden">
              <div className="animate-marquee flex gap-3 sm:gap-4 items-center w-max">
                {marqueeItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-28 sm:h-35 w-40 sm:w-50 shrink-0 overflow-hidden border border-border-light shadow-xs transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 160px, 200px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SectionHeading className="pt-12" title="Form" />
          {/* 3. Contact Form */}
          <div id="form-section" className="w-full">
            <MainContactForm />
          </div>
        </div>
      </section>

      {/* 4. Full-Screen Blue Backdrop Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Enlarged Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md sm:max-w-lg aspect-square bg-primary border-2 border-white/20 shadow-2xl overflow-hidden animate-scaleUp"
          >
            <Image
              src={fixedImage.src}
              alt={fixedImage.alt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
