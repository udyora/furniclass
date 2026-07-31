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
      {/* Search Widget */}
      <div className="relative bg-bg-card p-4 rounded-xs border border-border-light shadow-xs">
        <label htmlFor="blog-sidebar-search" className="sr-only">
          Search Blog Posts
        </label>
        <input
          id="blog-sidebar-search"
          type="text"
          placeholder="Search Products..."
          className="w-full bg-transparent pl-3 pr-8 py-2 text-sm font-quicksand border border-border-light rounded-xs focus:outline-none focus:border-primary text-dark"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-7 top-6 h-4 w-4 text-muted-light"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
      </div>

      {/* Categories Widget */}
      <div className="bg-bg-card p-6 rounded-xs border border-border-light shadow-xs">
        <h3 className="text-lg font-bold text-dark border-b border-border-light pb-3 mb-4">
          Categories
        </h3>
        <ul className="space-y-3 text-sm font-medium text-dark">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href="/blogs"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="text-primary font-bold">»</span> {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

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

      {/* Social Media Widget with Clean Vector SVGs */}
      <div className="bg-bg-card p-6 rounded-xs border border-border-light shadow-xs">
        <h3 className="text-lg font-bold text-dark border-b border-border-light pb-3 mb-4">
          Social Media
        </h3>
        <div className="flex items-center gap-3">
          {/* Instagram SVG */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white hover:bg-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* Facebook SVG */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white hover:bg-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* X / Twitter SVG */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white hover:bg-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube SVG */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white hover:bg-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <polygon points="10 15 15 12 10 9 10 15" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
