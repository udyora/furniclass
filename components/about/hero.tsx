import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
interface FeaturePoint {
  id: string;
  text: string;
}

interface MiniCategory {
  id: string;
  title: string;
  image: string;
}

export default function AboutHero() {
  const features: FeaturePoint[] = [
    { id: "quality", text: "Experience Unparalleled Quality" },
    { id: "durability", text: "Built to Last for Generations" },
    { id: "trusted", text: "Loved by Customers Worldwide" },
  ];

  const categories: MiniCategory[] = [
    {
      id: "sofa",
      title: "Sofa",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
    },
    {
      id: "nightstand",
      title: "Nightstand",
      image:
        "https://framerusercontent.com/images/E1SeXrbQeB7bVC1LQduOpuhLg.webp",
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image:
        "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
    },
  ];

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="w-full bg-bg-main py-12 sm:py-16 lg:py-20 font-quicksand"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Split Content Section */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text Column */}
          <div className="lg:col-span-6">
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
              className="mt-6 space-y-3.5"
              aria-label="FurniClass core quality features"
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

            {/* Enquire Now CTA Redirecting to /shop */}
            <div className="mt-8">
              <Button
                href="/shop"
                variant="primary"
                size="md"
                ariaLabel="Enquire about FurniClass products on shop page"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Right Showcase Image Container */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-bg-card shadow-md">
              <Image
                src="https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp"
                alt="FurniClass luxury interior setup demonstrating craftsmanship"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Category Cards Grid (All Redirect to /shop) */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex items-center justify-between overflow-hidden rounded-xs bg-bg-card p-6 shadow-xs border border-border-light transition-all hover:shadow-md"
            >
              {/* Category Info & See More Button */}
              <div className="flex flex-col items-start gap-4 z-10">
                <h3 className="font-quicksand text-xl font-bold text-dark">
                  {cat.title}
                </h3>

                <Link
                  href="/shop"
                  aria-label={`Explore ${cat.title} collection on shop page`}
                  className="inline-flex items-center justify-center bg-primary px-4 py-2 font-quicksand text-xs font-semibold text-white transition-colors hover:bg-primary-hover rounded-xs focus-visible:outline-2 focus-visible:outline-primary"
                >
                  See More
                </Link>
              </div>

              {/* Product Thumbnail Image */}
              <div className="relative h-28 w-28 shrink-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`FurniClass ${cat.title}`}
                  fill
                  sizes="112px"
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
