import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./common/section-heading";
import Button from "./common/button";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function FeaturedProducts() {
  const products: Product[] = [
    {
      id: "aurelia-sectional",
      name: "The Aurelia Sectional",
      description:
        "A modular lounging system featuring deep cushioning and hand-stitched Italian leather upholstery.",
      image:
        "https://framerusercontent.com/images/3GB2Pah9N4LedXnHFT9WWE6Gsk.webp",
      href: "/shop/aurelia-sectional",
    },
    {
      id: "solis-dining-table",
      name: "Solis Marble Dining Table",
      description:
        "A monolithic dining table featuring a solid marble slab set upon sculpted hardwood pedestals.",
      image: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg",
      href: "/shop/solis-dining-table",
    },
    {
      id: "vespers-lounge-chair",
      name: "Vespers Lounge Chair",
      description:
        "An iconic accent chair blending curved walnut woodwork with bouclé fabric upholstery.",
      image:
        "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp",
      href: "/shop/vespers-lounge-chair",
    },
    {
      id: "kintsugi-coffee-table",
      name: "Kintsugi Coffee Table",
      description:
        "A contemporary centerpiece highlighting brushed brass accents and hand-finished oak geometry.",
      image:
        "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
      href: "/shop/kintsugi-coffee-table",
    },
    {
      id: "nocturne-executive-desk",
      name: "Nocturne Executive Desk",
      description:
        "A minimalist office desk crafted with integrated cable management and smoked ash veneer.",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
      href: "/shop/nocturne-executive-desk",
    },
    {
      id: "eos-ergonomic-chair",
      name: "Eos Ergonomic Dining Chair",
      description:
        "A sleek dining silhouette designed for prolonged comfort and effortless aesthetic integration.",
      image:
        "https://framerusercontent.com/images/E1SeXrbQeB7bVC1LQduOpuhLg.webp",
      href: "/shop/eos-ergonomic-chair",
    },
    {
      id: "velvet-linea-sofa",
      name: "Velvet Linea Sofa",
      description:
        "A tailored three-seater sofa featuring clean architectural lines and dense velvet textiles.",
      image:
        "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
      href: "/shop/velvet-linea-sofa",
    },
    {
      id: "opus-sculptural-credenza",
      name: "Opus Sculptural Credenza",
      description:
        "A functional storage sideboard with fluted wood panelling and soft-close hardware.",
      image:
        "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
      href: "/shop/opus-sculptural-credenza",
    },
  ];

  return (
    <section
      aria-labelledby="products-heading"
      className="w-full bg-bg-main py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reusable Common Heading */}
        <SectionHeading
          id="products-heading"
          title="Curated Selection"
          subtitle="Signature Furniclass pieces designed for modern residential and commercial environments."
        />

        {/* Product Cards Grid: 4 Columns (Desktop), 2 Columns (Tablet), 1 Column (Mobile) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xs bg-bg-card transition-all duration-300 hover:shadow-md"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-border-light">
                <Image
                  src={product.image}
                  alt={`Furniclass ${product.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-dark group-hover:text-primary transition-colors">
                    <Link
                      href={product.href}
                      className="focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
                      aria-label={`View details for ${product.name}`}
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="mt-2 font-quicksand text-sm text-muted-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Load More CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button
            href="/shop"
            variant="primary"
            size="md"
            ariaLabel="Explore all Furniclass products"
          >
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
