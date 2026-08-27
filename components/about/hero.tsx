"use client";

import Image from "next/image";
import Link from "next/link";

interface FeaturePoint {
  id: string;
  text: string;
}

interface MiniCategory {
  id: string;
  title: string;
  slug: string;
  image: string;
}

export default function AboutHero() {
  const features: FeaturePoint[] = [
    { id: "quality", text: "Experience Unparalleled Quality" },
    { id: "durability", text: "Built to Last for Generations" },
    { id: "trusted", text: "Loved by Customers Nationwide" },
  ];

  const categories: MiniCategory[] = [
    {
      id: "chairs",
      title: "Chairs",
      slug: "chairs",
      image: "/box-frame-lounge-chair.webp",
    },
    {
      id: "sofas",
      title: "Sofas",
      slug: "sofas",
      image: "/white-soffa.webp",
    },
    {
      id: "tables",
      title: "Tables",
      slug: "tables",
      image: "/accent-table.webp",
    },
    {
      id: "accessories",
      title: "Accessories",
      slug: "accessories",
      image: "/marble-top-hairpin-leg.webp",
    },
  ];

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="w-full bg-bg-main font-quicksand"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl py-3 px-4 sm:px-6 lg:px-8 bg-bg-card border border-border-light font-quicksand rounded-xs">
          <h2 className="text-primary font-bold text-lg text-center">
            About Furniclass
          </h2>
        </div>
        {/* Top Split Content Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 text-center lg:text-left mt-6">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2
              id="about-hero-heading"
              className="font-quicksand text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] leading-tight"
            >
              Elevate Your Space with Uncompromising Quality
            </h2>

            <p className="mt-4 font-quicksand text-base font-normal text-muted-light leading-relaxed">
              Experience the epitome of furniture quality. Our products are
              meticulously crafted with an unwavering commitment to excellence.
              From the finest materials to expert craftsmanship, each piece
              embodies durability, comfort, and timeless style. Elevate your
              space with the assurance of exceptional quality and lasting
              beauty.
            </p>

            {/* Checkmark Features List */}
            <ul
              className="mt-6 space-y-3.5 flex flex-col items-center lg:items-start"
              aria-label="Furniclass core quality features"
            >
              {features.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-quicksand text-base font-semibold text-dark">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Enquire CTA Button */}
            {/* <div className="mt-8">
              <Button
                href="/categories/sofas"
                variant="primary"
                size="md"
                ariaLabel="Explore Furniclass categories"
              >
                Enquire Now
              </Button>
            </div> */}
          </div>

          {/* Right Showcase Image Container */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="relative aspect-4/3 w-full max-w-lg lg:max-w-none overflow-hidden rounded-xs bg-bg-card shadow-md">
              <Image
                src="/about-us.webp"
                alt="Furniclass luxury interior setup demonstrating craftsmanship"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom 4 Category Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex flex-col justify-between overflow-hidden bg-bg-card border border-border-light shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* 1. Full-Width Image Container */}
              <div className="relative aspect-4/4 w-full overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={`Furniclass ${cat.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="transition-transform duration-500"
                />
              </div>

              {/* 2. Content Section Below Image */}
              <div className="flex flex-col items-center p-4 lg:p-5 text-center gap-1 lg:gap-3">
                <h3 className="font-quicksand text-xl font-bold text-dark">
                  {cat.title}
                </h3>

                <Link
                  href={`/categories/${cat.slug}`}
                  aria-label={`Explore ${cat.title} category`}
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-quicksand text-xs font-bold px-6 py-2.5 rounded-sm transition-colors shadow-xs"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
