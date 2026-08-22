"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles import
import "swiper/css";
import "swiper/css/pagination";
import Button from "./common/button";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
  location: string;
}

export default function RoomInspiration() {
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Ananya Sharma",
      role: "Interior Stylist",
      location: "Delhi NCR",
      review:
        "The build-to-order craftsmanship is exceptional. The customized L-shaped sofa matched our client's penthouse interior seamlessly. Timely delivery and premium finishing!",
      rating: 5,
      avatar:
        "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
    },
    {
      id: "t2",
      name: "Rajesh Verma",
      role: "Homeowner",
      location: "Mumbai",
      review:
        "From selecting custom fabric options to final installation, Furniclass made the entire process effortless. The solid wood dining table is now the star attraction of our home.",
      rating: 5,
      avatar:
        "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
    },
    {
      id: "t3",
      name: "Priya Sundaram",
      role: "Architect",
      location: "Bengaluru",
      review:
        "Finding bespoke furniture with precise custom dimensions used to be a hassle. Furniclass exceeded all our expectations for our modern villa project.",
      rating: 5,
      avatar:
        "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
    },
    {
      id: "t4",
      name: "Vikramaditya Rathore",
      role: "Boutique Hotelier",
      location: "Jaipur",
      review:
        "The handcrafted velvet armchairs elevated our lounge aesthetics immediately. Superb durability and high-end aesthetic appeal for luxury commercial spaces.",
      rating: 5,
      avatar:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-bg-cream py-16 sm:py-20 lg:py-24 mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <div className="font-quicksand max-lg:text-center text-sm font-bold tracking-widest text-primary uppercase">
              Client Feedback
            </div>

            <h2
              id="testimonials-heading"
              className="mt-3 font-quicksand max-lg:text-center text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] leading-tight"
            >
              Loved by Indian Homeowners &amp; Designers
            </h2>
            <p className="mt-4 font-quicksand max-lg:text-center text-base sm:text-lg font-normal text-muted-light leading-relaxed">
              Read real stories from our valued homeowners, architects, and
              interior stylists across India who transformed their living spaces
              with our bespoke build-to-order furniture collection.
            </p>

            <div className="mt-8 max-lg:flex max-lg:justify-center">
              <Button
                href="/contact-us"
                variant="primary"
                size="md"
                ariaLabel="Enquire for custom furniture built by Furniclass"
              >
                Start Custom Order
              </Button>
            </div>
          </div>

          {/* Right Swiper Carousel Column */}
          <div className="lg:col-span-6 w-full overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
              }}
              className="w-full pb-6!"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto flex">
                  {/* Card with White Background & Equal Height */}
                  <div className="relative flex flex-col justify-between h-full w-full p-6 sm:p-8 sm:min-h-[320px] overflow-hidden rounded-xs bg-white shadow-xs border border-border-light font-quicksand">
                    {/* Top Content */}
                    <div>
                      {/* Rating Stars */}
                      <div className="flex text-gold text-lg gap-1 mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      {/* Review Quote */}
                      <p className="text-dark font-medium text-base sm:text-lg leading-relaxed">
                        &ldquo;{item.review}&rdquo;
                      </p>
                    </div>

                    {/* User Profile Footer */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border-light mt-6">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-dark text-base sm:text-lg leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-light font-medium mt-0.5">
                          {item.role} • {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-swiper-pagination flex items-center justify-center sm:justify-start gap-2 pl-1! pt-4! pb-2! [&_.swiper-pagination-bullet]:h-3.5! [&_.swiper-pagination-bullet]:w-3.5! [&_.swiper-pagination-bullet]:bg-gold/40 [&_.swiper-pagination-bullet-active]:bg-gold! [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-pagination-bullet]:transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
