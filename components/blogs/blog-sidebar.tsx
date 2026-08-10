"use client";

import Image from "next/image";
import Link from "next/link";

interface RecentPost {
  slug: string;
  title: string;
  image: string;
}

const recentPosts: RecentPost[] = [
  {
    slug: "the-charm-of-minimalist-interiors",
    title: "The Charm of Minimalist Interiors",
    image:
      "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
  },
  {
    slug: "blending-tradition-with-modern-design",
    title: "Blending Tradition with Modern Design",
    image: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg",
  },
  {
    slug: "cozy-corners-that-tell-a-story",
    title: "Cozy Corners That Tell a Story",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
];

export default function BlogSidebar() {
  const categories = ["Dining", "Living", "Bedroom"];
  const popularTags = [
    "Furniture",
    "Wooden",
    "Chair & Table",
    "Bedroom",
    "Living Room",
    "Dining Table",
    "Dressing Table",
    "Study Table",
    "Lamp",
  ];

  return (
    <aside className="space-y-8 font-quicksand">
      {/* Recent Posts Widget */}
      <div className="bg-bg-card p-6 rounded-xs border border-border-light shadow-xs">
        <h3 className="text-lg font-bold text-dark border-b border-border-light pb-3 mb-4">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.slug} className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xs bg-bg-main border border-border-light">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="56px"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h4>
            </article>
          ))}
        </div>
      </div>

      {/* Popular Tags Widget */}
      <div className="bg-bg-card p-6 rounded-xs border border-border-light shadow-xs">
        <h3 className="text-lg font-bold text-dark border-b border-border-light pb-3 mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href="/blogs"
              className="bg-bg-main px-3 py-1.5 text-xs font-medium text-muted-light rounded-xs border border-border-light hover:border-primary hover:text-primary transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
