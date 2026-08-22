"use client";

import { useState, useMemo, use } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/page-banner";
import EnquireModal from "@/components/enquire-modal";
import { categoryProducts, CategoryProduct } from "@/utils/categories";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const allCategories = [
  { id: "chairs", name: "Chairs", href: "/categories/chairs" },
  { id: "sofas", name: "Sofas", href: "/categories/sofas" },
  { id: "tables", name: "Tables", href: "/categories/tables" },
  { id: "accessories", name: "Accessories", href: "/categories/accessories" },
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug?.toLowerCase() || "chairs";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<CategoryProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCategoryObj = allCategories.find((c) => c.id === slug);
  const categoryTitle = currentCategoryObj
    ? currentCategoryObj.name
    : slug.charAt(0).toUpperCase() + slug.slice(1);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      const matchesCategory = product.categorySlug.toLowerCase() === slug;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [slug, searchQuery]);

  const handleOpenModal = (product: CategoryProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen font-quicksand bg-white pb-20">
      <PageBanner />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header: Title + Inline Category Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-4 border-b border-gray-100">
            <h1 className="text-3xl font-bold text-dark">
              Explore {categoryTitle}
            </h1>
            {/* Other Categories / Related Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Other Categories:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {allCategories
                  .filter((cat) => cat.id !== slug)
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-xs transition-all bg-[#f4f5f7] text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Search Bar & Result Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <p className="text-xs font-semibold text-gray-500">
              Showing {filteredProducts.length} items
            </p>

            <div className="relative w-full sm:w-72 bg-white p-2 rounded-xs border border-gray-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${categoryTitle}...`}
                className="w-full bg-transparent pl-2 pr-8 py-1 text-sm font-quicksand text-gray-700 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-[#fcf8f3] p-12 text-center rounded-xs border border-[#f5ede3]">
              <p className="text-lg font-bold text-gray-800">
                No products found in {categoryTitle}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleOpenModal(product)}
                  className="group bg-[#f4f5f7] overflow-hidden rounded-xs transition-all hover:shadow-md block relative cursor-pointer"
                >
                  <div className="relative aspect-square w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl text-center font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {product.name}
                    </h2>
                    {/* 
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p> */}

                    <div className="mt-4 flex items-center justify-between">
                      {/* <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div> */}
                      <div className="flex justify-center w-full border-t pt-3 border-t-black/10">
                        <button
                          type="button"
                          className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xs transition-colors cursor-pointer"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <EnquireModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productName={selectedProduct.name}
        />
      )}
    </main>
  );
}
