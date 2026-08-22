import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/page-banner";
import BlogSidebar from "@/components/blogs/blog-sidebar";
import SectionHeading from "@/components/common/section-heading";

export const metadata: Metadata = {
  title: "Blogs & Interior Insights | FurniClass",
  description:
    "Explore luxury furniture buying guides, interior design inspiration, and home styling tips from FurniClass.",
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tag: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "the-beauty-of-natural-light-in-interiors",
    title: "The Beauty of Natural Light",
    excerpt:
      "Natural light is one of the most powerful design elements in any home. It transforms spaces, enhances colors, and creates an inviting atmosphere.",
    date: "Sep 26, 2025",
    author: "Faijan Khan",
    tag: "Wood",
    image:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  },
  {
    id: "2",
    slug: "the-charm-of-minimalist-interiors",
    title: "The Charm of Minimalist Interiors",
    excerpt:
      "Minimalism is more than just a design choice—it’s a way of living. By focusing on simplicity, clean lines, and clutter-free spaces.",
    date: "Sep 25, 2025",
    author: "Vijay Singh Shekhawat",
    tag: "Wood",
    image:
      "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
  },
  {
    id: "3",
    slug: "cozy-corners-that-tell-a-story",
    title: "Cozy Corners That Tell a Story",
    excerpt:
      "Every home has its heart, and sometimes it’s found in the smallest of spaces—a cozy corner. These little nooks aren’t just for sitting.",
    date: "Sep 23, 2025",
    author: "Anish Saini",
    tag: "Wood",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
  {
    id: "4",
    slug: "sustainable-living-with-eco-furniture",
    title: "Sustainable Living with Eco-Friendly Furniture",
    excerpt:
      "In today’s world, sustainability is a necessity. Eco-friendly furniture is not only better for the planet but also adds natural warmth.",
    date: "Sep 22, 2025",
    author: "Vishal Kumawat",
    tag: "Wood",
    image:
      "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
  },
  {
    id: "5",
    slug: "handmade-pieces-takes-time",
    title: "Handmade Pieces Takes Time & Craft",
    excerpt:
      "Handcrafted furniture carries a unique charm that mass-produced items can’t match. Each piece is carefully created with attention to detail.",
    date: "Sep 21, 2025",
    author: "Nitish Garg",
    tag: "Wood",
    image:
      "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen font-quicksand bg-bg-main pb-20">
      <PageBanner />
      <SectionHeading className="pt-12" title="Blogs" />
      <section className="pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            {/* Main Blog Grid Area */}
            <div className="lg:col-span-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col w-full overflow-hidden rounded-xs bg-bg-card border border-border-light shadow-xs transition-all hover:shadow-md"
                  >
                    {/* Fixed Height Image Container with Gold Date Badge */}
                    <div className="relative w-full aspect-4/3 sm:h-64 shrink-0 bg-border-light overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={post.id === "1"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top Right Date Badge */}
                      <div className="absolute top-0 right-3 bg-gold px-2.5 py-1 text-center font-quicksand text-xs font-semibold text-white shadow-xs z-10">
                        {post.date}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col justify-between p-5 font-quicksand">
                      <div>
                        {/* Author & Tag SVG Meta Row */}
                        <div className="flex items-center gap-4 text-xs font-medium text-dark">
                          <span className="flex items-center gap-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3.5 w-3.5 text-primary"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="8" r="5" />
                              <path d="M20 21a8 8 0 0 0-16 0" />
                            </svg>
                            {post.author}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-3.5 w-3.5 text-primary"
                              aria-hidden="true"
                            >
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                            {post.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="mt-2 text-xs font-normal text-muted-light leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More Link */}
                      <div className="mt-4 pt-3 border-t border-border-light">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="inline-flex text-xs font-semibold text-primary hover:underline"
                        >
                          Read More...
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-10 flex justify-center">
                <Link
                  href="/blogs"
                  className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs rounded-xs transition-colors shadow-xs"
                >
                  Load More
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 w-full">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
