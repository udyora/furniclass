"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/page-banner";

interface ShopProduct {
  id: string;
  slug: string;
  name: string;
  category: "Dining" | "Living" | "Bedroom";
  tags: string[];
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

const products: ShopProduct[] = [
  {
    id: "1",
    slug: "lolito",
    name: "Lolito",
    category: "Living",
    tags: ["Furniture", "Chairs"],
    description: "A premium oversized sofa designed",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
  {
    id: "2",
    slug: "respira",
    name: "Respira",
    category: "Dining",
    tags: ["Furniture", "Dining - Table"],
    description: "A durable and stylish outdoor bar",
    price: "Rp 500.000",
    image: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg",
  },
  {
    id: "3",
    slug: "lumo-modern-led",
    name: "Lumo – Modern LED",
    category: "Bedroom",
    tags: ["Furniture", "Dressing - Table"],
    description: "A sleek and stylish night lamp",
    price: "Rp 1.500.000",
    image:
      "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp",
  },
  {
    id: "4",
    slug: "muggo",
    name: "muggo",
    category: "Living",
    tags: ["Furniture", "Wooden - Wardrobe", "Chairs"],
    description: "A luxurious red velvet sofa that",
    price: "Rp 150.000",
    image:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  },
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = ["Dining", "Living", "Bedroom"];
  const popularTags = [
    "Furniture",
    "Dining - Table",
    "Wooden - Wardrobe",
    "Chairs",
    "Dressing - Table",
    "Study Table",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      const matchesTag = selectedTag
        ? product.tags.includes(selectedTag)
        : true;

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Stop Link navigation when clicking wishlist
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <main className="min-h-screen font-quicksand bg-white">
      <PageBanner title="Shop" breadcrumb="Shop" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              {/* Search Box */}
              <div className="relative bg-white p-3 rounded-xs border border-gray-200">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Products...."
                  className="w-full bg-transparent pl-2 pr-8 py-1.5 text-sm font-quicksand text-gray-700 focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="absolute right-4 top-4 h-4 w-4 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" x2="16.65" y1="21" y2="16.65" />
                </svg>
              </div>

              {/* All Categories Filter */}
              <div className="bg-[#fcf8f3] p-6 rounded-xs border border-[#f5ede3]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    All Categories
                  </h3>
                  {selectedCategory && (
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(null)}
                      className="text-xs text-teal-600 font-semibold hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-700">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCategory(isActive ? null : cat)
                          }
                          className={`flex items-center gap-3 w-full text-left transition-colors cursor-pointer ${
                            isActive
                              ? "text-teal-600 font-bold"
                              : "hover:text-teal-600"
                          }`}
                        >
                          <span className="text-teal-600 font-bold text-xs">
                            »
                          </span>{" "}
                          {cat}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Popular Tags Filter */}
              <div className="bg-[#fcf8f3] p-6 rounded-xs border border-[#f5ede3]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Popular Tags
                  </h3>
                  {selectedTag && (
                    <button
                      type="button"
                      onClick={() => setSelectedTag(null)}
                      className="text-xs text-teal-600 font-semibold hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {popularTags.map((tag) => {
                    const isActive = selectedTag === tag;
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(isActive ? null : tag)}
                        className={`px-3 py-2 text-xs font-medium rounded-xs border transition-all cursor-pointer ${
                          isActive
                            ? "bg-teal-600 text-white border-teal-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-teal-600 hover:text-teal-600"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Product Cards Grid with Working Navigation */}
            <div className="lg:col-span-9">
              {filteredProducts.length === 0 ? (
                <div className="bg-[#fcf8f3] p-12 text-center rounded-xs border border-[#f5ede3]">
                  <p className="text-lg font-bold text-gray-800">
                    No products match your criteria.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-xs hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => {
                    const isWishlisted = wishlist.includes(product.id);
                    return (
                      <Link
                        key={product.id}
                        href={`/shop/${product.slug}`}
                        className="group bg-[#f4f5f7] overflow-hidden rounded-xs transition-all hover:shadow-md block relative cursor-pointer"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-square w-full bg-gray-200 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Wishlist Circle Heart Badge */}
                          <button
                            type="button"
                            onClick={(e) => toggleWishlist(e, product.id)}
                            aria-label="Toggle Wishlist"
                            className={`absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-transform hover:scale-110 cursor-pointer ${
                              isWishlisted
                                ? "bg-rose-500 text-white"
                                : "bg-white text-rose-500"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill={isWishlisted ? "currentColor" : "none"}
                              stroke="currentColor"
                              strokeWidth="2"
                              className="h-4 w-4"
                            >
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                          </button>
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                            {product.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500 line-clamp-1">
                            {product.description}
                          </p>

                          {/* Price Row */}
                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-900">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
