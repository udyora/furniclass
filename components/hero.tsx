import Image from "next/image";
import Button from "./common/button";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-bg-card"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/QJMIMeriVCuJUHEsVBBsdcuOM9I.webp"
          alt="Luxury custom manufactured interior setup by FurniClass"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-dark/10 lg:bg-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-140 max-w-7xl items-center justify-end px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Floating Info Card */}
        <div className="w-full max-w-xl rounded-none bg-bg-cream p-8 shadow-md">
          {/* Subheading Badge */}
          <p className="font-quicksand text-sm font-semibold tracking-widest text-dark uppercase">
            Architectural Elegance & Bespoke Craftsmanship
          </p>

          {/* Main H1 Heading linked to aria-labelledby */}
          <h1
            id="hero-heading"
            className="mt-3 font-quicksand text-3xl font-bold text-gold sm:text-4xl lg:text-5xl leading-tight"
          >
            Redefining Spaces with Mastercrafted Furniture.
          </h1>

          {/* Supporting Paragraph */}
          <p className="mt-4 font-quicksand text-base font-medium text-dark-subtle sm:text-lg leading-relaxed">
            Discover curated contemporary collections or bring your exact vision
            to life. From signature sofas to bespoke build-to-order creations,
            FurniClass manufactures luxury furniture tailored precisely to your
            dimensions.
          </p>

          {/* Accessible CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="/shop"
              variant="primary"
              size="lg"
              ariaLabel="Explore FurniClass luxury furniture collections"
            >
              Explore Collections
            </Button>

            <Button
              href="/custom-design"
              variant="secondary"
              size="lg"
              ariaLabel="Upload your custom furniture reference design or image"
            >
              Upload Custom Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
