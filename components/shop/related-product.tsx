"use client";

import Image from "next/image";
import Link from "next/link";

interface RelatedProductItem {
  slug: string;
  name: string;
  desc: string;
  price: string;
  origPrice?: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProductItem[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <Link
            key={item.slug}
            href={`/shop/${item.slug}`}
            className="group bg-bg-card border border-border-light overflow-hidden rounded-xs transition-all hover:shadow-md block cursor-pointer"
          >
            <div className="relative aspect-square w-full bg-bg-main overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-dark text-lg group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-muted-light line-clamp-1">
                {item.desc}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-sm font-bold text-dark">
                  {item.price}
                </span>
                {item.origPrice && (
                  <span className="text-xs text-muted-light line-through">
                    {item.origPrice}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/shop"
          className="px-10 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xs transition-colors shadow-xs"
        >
          Load More
        </Link>
      </div>
    </div>
  );
}
