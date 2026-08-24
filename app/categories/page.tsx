"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/page-banner";
import Category from "@/components/categories";

interface ShopProduct {
  id: string;
  slug: string;
  name: string;
  category: "Chairs" | "Sofas" | "Tables" | "Accessories";
  tags: string[];
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

const products: ShopProduct[] = [
  {
    id: "1",
    slug: "natural-oak-frame-sofa",
    name: "Natural Oak Frame Sofa",
    category: "Sofas",
    tags: ["Furniture", "Sofas", "Living Room"],
    description:
      "A timeless upholstered sofa featuring a natural oak frame and soft comfortable seating.",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/natural-oak-frame-soffa.webp",
  },
  {
    id: "2",
    slug: "dark-walnut-bent-leg-table",
    name: "Dark Walnut Bent-Leg Table",
    category: "Tables",
    tags: ["Furniture", "Tables", "Living Room"],
    description:
      "A sophisticated round walnut table featuring sculpted bent wooden legs and a classic mid-century design.",
    price: "Rp 3.250.000",
    originalPrice: "Rp 4.500.000",
    image: "/bent-leg-table.webp",
  },
  {
    id: "3",
    slug: "opal-globe-brass-lamp",
    name: "Opal Globe Brass Table Lamp",
    category: "Accessories",
    tags: ["Furniture", "Accessories", "Lighting"],
    description:
      "An elegant globe table lamp combining a soft opal sphere with a warm brass-toned base.",
    price: "Rp 850.000",
    image: "/opal-globe-brass.webp",
  },
  {
    id: "4",
    slug: "nordic-oak-lounge-chair",
    name: "Nordic Oak Lounge Chair",
    category: "Chairs",
    tags: ["Furniture", "Chairs", "Lounge"],
    description:
      "A beautifully crafted natural oak lounge chair with a timeless Scandinavian-inspired design.",
    price: "Rp 1.850.000",
    originalPrice: "Rp 2.400.000",
    image: "/nordic-oak-lounge.webp",
  },
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const categories = ["Chairs", "Sofas", "Tables", "Accessories"];

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
    e.preventDefault();
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
    <main className="font-quicksand bg-white">
      <PageBanner />
      <Category />
    </main>
  );
}
