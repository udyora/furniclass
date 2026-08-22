"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles import
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../common/section-heading";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export default function GallerySection() {
  const galleryItems: GalleryItem[] = [
    {
      id: "gallery-1",
      title: "Minimalist Corner Setup",
      image:
        "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
      alt: "Furniclass minimalist interior corner transformation",
    },
    {
      id: "gallery-2",
      title: "Bespoke Dining Interior",
      image:
        "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
      alt: "Furniclass custom dining room installation",
    },
    {
      id: "gallery-3",
      title: "Luxury Living Lounge",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
      alt: "Furniclass handcrafted sofa in modern living room",
    },
    {
      id: "gallery-4",
      title: "Executive Workspace Setup",
      image:
        "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
      alt: "Furniclass custom wooden office workspace setup",
    },
  ];

  return (
    <section
      aria-labelledby="gallery-heading"
      className="w-full bg-bg-main pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Heading */}
        <SectionHeading
          id="gallery-heading"
          title="Our Gallery"
          subtitle="Inspiration from Spaces We’ve Transformed"
        />

        {/* Swiper Slider Showcase */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".gallery-swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full pb-6!"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-xs bg-bg-card shadow-md">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="gallery-swiper-pagination flex items-center justify-center gap-2 pt-2! pb-4! [&_.swiper-pagination-bullet]:h-4! [&_.swiper-pagination-bullet]:w-4! [&_.swiper-pagination-bullet]:bg-gold/40 [&_.swiper-pagination-bullet-active]:bg-gold! [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet]:transition-all" />
        </div>
      </div>
    </section>
  );
}
