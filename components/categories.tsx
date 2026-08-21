"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SectionHeading from "./common/section-heading";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function Category() {
  const categories: Category[] = [
    {
      id: "chairs",
      name: "Chairs",
      description:
        "Ergonomic precision meets sculptured elegance. Crafted for dining spaces, executive suites, and private residences.",
      image: "/nordic-oak-lounge.webp",
      href: "/categories/chairs",
    },
    {
      id: "sofas",
      name: "Sofas",
      description:
        "Deep-seated comfort encased in architectural frameworks. Designed to serve as the anchor of sophisticated living environments.",
      image: "/natural-oak-frame-soffa.webp",
      href: "/categories/sofas",
    },
    {
      id: "tables",
      name: "Tables",
      description:
        "Statement pieces carved from premium hardwoods, brushed metals, and sintered stone. Built for longevity and daily luxury.",
      image: "/bent-leg-table.webp",
      href: "/categories/tables",
    },
    {
      id: "accessories",
      name: "Accessories",
      description:
        "Curated accents, ambient lamps, and decorative centerpieces designed to elevate every corner of your interior spaces.",
      image: "/black-bean-bag.webp",
      href: "/categories/accessories",
    },
  ];

  return (
    <section
      aria-labelledby="category-heading"
      className="w-full pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="category-heading"
          title="Categories"
          subtitle="Create beautiful, comfortable spaces with our premium furniture collection"
        />

        {/* Category Swiper Slider Showcase */}
        <div className="mt-6 w-full overflow-hidden">
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
              el: ".category-swiper-pagination",
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
            {categories.map((category) => (
              <SwiperSlide key={category.id} className="h-auto">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xs bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Image Wrapper */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-border-light">
                    <Image
                      src={category.image}
                      alt={`FurniClass ${category.name} collection`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-3 text-center">
                    <div>
                      <h3 className="font-quicksand text-2xl font-bold text-dark transition-colors group-hover:text-primary">
                        <Link
                          href={category.href}
                          className="rounded-xs focus-visible:outline-2 focus-visible:outline-primary"
                          aria-label={`Explore FurniClass ${category.name} category`}
                        >
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {category.name}
                        </Link>
                      </h3>

                      <p className="mt-2 font-quicksand text-sm leading-relaxed text-muted-light line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2">
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline"
                      >
                        Explore Category &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="category-swiper-pagination flex items-center justify-center gap-2 pt-2! pb-4! [&_.swiper-pagination-bullet]:h-4! [&_.swiper-pagination-bullet]:w-4! [&_.swiper-pagination-bullet]:bg-gold/40 [&_.swiper-pagination-bullet-active]:bg-gold! [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet]:transition-all" />
        </div>
      </div>
    </section>
  );
}
