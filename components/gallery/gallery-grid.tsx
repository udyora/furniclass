"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Button from "@/components/common/button";
import PageBanner from "../common/page-banner";
import SectionHeading from "../common/section-heading";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery-one.webp",
    alt: "FurniClass Modern Dining Room Setup",
  },
  {
    id: "2",
    src: "/gallery-two.webp",
    alt: "FurniClass Minimalist Executive Table Curation",
  },
  {
    id: "3",
    src: "/chrome-table.webp",
    alt: "FurniClass Bar Stools Lounge Area",
  },
  {
    id: "4",
    src: "/gallery-four.webp",
    alt: "FurniClass Antique Wooden Dressing Table",
  },
  {
    id: "5",
    src: "/gallery-five.webp",
    alt: "FurniClass Bedroom Master Suite Curation",
  },
  {
    id: "6",
    src: "/gallery-six.webp",
    alt: "FurniClass Velvet Blue Luxury Bedding",
  },
];

export default function GalleryGrid() {
  const [index, setIndex] = useState<number>(-1);

  // Format slides array for the Lightbox library
  const slides = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <>
      {/* Reusable Common Page Banner */}
      <PageBanner />

      <SectionHeading className="pt-12" title="Gallery" />
      {/* Main Gallery Grid Section */}
      <section
        aria-labelledby="gallery-grid-heading"
        className="w-full bg-bg-main pt-4 pb-16 sm:pb-20 font-quicksand"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-grid-heading" className="sr-only">
            FurniClass Portfolio Gallery
          </h2>

          {/* 3 Columns Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setIndex(idx)}
                className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xs bg-bg-card shadow-xs transition-all duration-300 hover:shadow-md"
                role="button"
                tabIndex={0}
                aria-label={`Open full screen preview for ${image.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIndex(idx);
                  }
                }}
              >
                {/* Thumbnail Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Magnifying Glass Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs transition-transform duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="primary"
              size="md"
              ariaLabel="Load more gallery items"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Component */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
