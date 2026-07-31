"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Swiper styles import
import "swiper/css";
import "swiper/css/pagination";
import Button from "./common/button";

interface RoomConcept {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export default function RoomInspiration() {
  const concepts: RoomConcept[] = [
    {
      id: "living-room",
      title: "Modern Minimalist Living Room",
      image:
        "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
      alt: "FurniClass custom living room setup with modern sofa and decor",
    },
    {
      id: "dining-room",
      title: "Contemporary Dining Setup",
      image:
        "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
      alt: "FurniClass bespoke dining table and chairs setup",
    },
    {
      id: "bedroom-suite",
      title: "Luxury Bedroom Suite",
      image:
        "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
      alt: "FurniClass master bedroom custom headboard and side tables",
    },
    {
      id: "outdoor-lounge",
      title: "Serene Patio Lounge",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
      alt: "FurniClass weather-resistant outdoor lounge furniture",
    },
  ];

  return (
    <section
      aria-labelledby="room-inspiration-heading"
      className="w-full bg-bg-cream py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-5">
            <span className="font-quicksand text-sm font-semibold tracking-widest text-primary uppercase">
              Design Gallery
            </span>

            <h2
              id="room-inspiration-heading"
              className="mt-3 font-quicksand text-3xl font-bold text-dark sm:text-4xl leading-tight"
            >
              Curated Concepts for Modern Living
            </h2>
            <p className="mt-4 font-quicksand text-base font-medium text-dark-subtle sm:text-lg leading-relaxed">
              Every room tells a story of spatial harmony. Browse through
              thoughtfully arranged interior concepts designed to spark
              inspiration for your next residential or commercial project.
            </p>

            <div className="mt-8">
              <Button
                href="/gallery"
                variant="primary"
                size="md"
                ariaLabel="View all interior concepts created with FurniClass furniture"
              >
                View Interior Concepts
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 w-full overflow-hidden">
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
                el: ".custom-swiper-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.8,
                },
                1024: {
                  slidesPerView: 2.2,
                },
              }}
              className="w-full pb-6!"
            >
              {concepts.map((concept) => (
                <SwiperSlide key={concept.id}>
                  <div className="relative aspect-3/4 w-full overflow-hidden rounded-xs bg-bg-card shadow-md">
                    <Image
                      src={concept.image}
                      alt={concept.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-swiper-pagination flex items-center justify-center sm:justify-start gap-2 pl-1! pb-4! [&_.swiper-pagination-bullet]:h-4! [&_.swiper-pagination-bullet]:w-4! [&_.swiper-pagination-bullet]:bg-gold/40 [&_.swiper-pagination-bullet-active]:bg-gold! [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet]:transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
