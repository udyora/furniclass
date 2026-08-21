"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

import { categoryProducts } from "@/utils/categories";
import EnquireModal from "@/components/enquire-modal";

interface ProductPageProps {
  params: Promise<{
    slug: string;
    productSlug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug, productSlug } = use(params);
  const categorySlug = slug.toLowerCase();
  const currentProductSlug = productSlug.toLowerCase();
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const product = categoryProducts.find(
    (item) =>
      item.categorySlug.toLowerCase() === categorySlug &&
      item.slug.toLowerCase() === currentProductSlug,
  );

  if (!product) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-quicksand text-4xl font-bold text-dark">
            Product Not Found
          </h1>

          <p className="mt-3 text-muted-light">
            We couldn&apos;t find the product you&apos;re looking for.
          </p>

          <Link
            href={`/categories/${categorySlug}`}
            className="mt-6 inline-block text-primary underline underline-offset-4"
          >
            Back to {categorySlug}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-light">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/categories/${product.categorySlug}`}
            className="capitalize hover:text-primary"
          >
            {product.categorySlug}
          </Link>

          <span>/</span>

          <span className="text-dark">{product.name}</span>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-[#f7f7f7]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {product.categorySlug}
            </p>

            <h1 className="mt-3 font-quicksand text-4xl font-bold text-dark sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-bold text-dark">
                {product.price}
              </span>

              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-light">
              {product.description}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsEnquireOpen(true)}
                className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        productName={product.name}
        quantity={1}
      />
    </main>
  );
}
