import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./common/section-heading";
import Button from "./common/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tag: string;
  image: string;
  href: string;
}

export default function Blogs() {
  const posts: BlogPost[] = [
    {
      id: "beauty-of-natural-light",
      title: "The Beauty of Natural Light",
      excerpt:
        "Natural light is one of the most powerful design elements in any home. It transforms spaces, enhances colors, and creates an inviting atmosphere without any extra cost. A well-lit room feels larger, warmer, and more welcoming.",
      date: "Sep 26, 2025",
      author: "Faijan Khan",
      tag: "Wood",
      image:
        "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
      href: "/blogs/the-beauty-of-natural-light-in-interiors",
    },
    {
      id: "charm-of-minimalist-interiors",
      title: "The Charm of Minimalist Interiors",
      excerpt:
        "Minimalism is more than just a design choice—it’s a way of living. By focusing on simplicity, clean lines, and clutter-free spaces, minimalist interiors create calm and balance in your home.",
      date: "Sep 25, 2025",
      author: "Vijay Singh Shekhawat",
      tag: "Wood",
      image:
        "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
      href: "/blogs/the-charm-of-minimalist-interiors",
    },
    {
      id: "cozy-corners",
      title: "Cozy Corners That Tell a Story",
      excerpt:
        "Every home has its heart, and sometimes it’s found in the smallest of spaces—a cozy corner. These little nooks aren’t just for sitting; they’re personal statement spaces.",
      date: "Sep 23, 2025",
      author: "Anish Saini",
      tag: "Wood",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
      href: "/blogs/cozy-corners-that-tell-a-story",
    },
  ];

  return (
    <section
      id="blogs"
      aria-labelledby="blog-heading"
      className="w-full bg-bg-main scroll-mt-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reusable Section Heading */}
        <SectionHeading
          id="blog-heading"
          title="Our Blogs"
          subtitle="Ideas to Transform Every Corner of Your Home"
        />

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xs bg-bg-card transition-all duration-300"
            >
              {/* Image Container with Top-Right Date Badge */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-border-light">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Right Date Badge */}
                <div className="absolute top-0 right-3 bg-gold px-2.5 py-1 text-center font-quicksand text-xs font-semibold text-white leading-tight shadow-xs">
                  {post.date}
                </div>
              </div>

              {/* Card Content - Strict Quicksand Typography */}
              <div className="flex flex-1 flex-col justify-between p-4 font-quicksand">
                <div>
                  {/* Author & Tag */}
                  <div className="flex items-center gap-4 text-xs font-medium text-dark sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
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
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                      {post.tag}
                    </span>
                  </div>

                  {/* Title (Quicksand Bold) */}
                  <h3 className="mt-2 font-quicksand text-xl font-bold text-dark leading-snug group-hover:text-primary transition-colors">
                    <Link
                      href={post.href}
                      className="focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 font-quicksand text-sm font-normal text-muted-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More */}
                <div className="mt-2">
                  <Link
                    href={post.href}
                    className="inline-flex items-center font-quicksand text-sm font-semibold text-primary hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 flex justify-center">
          <Button
            href="/blogs"
            variant="primary"
            size="md"
            ariaLabel="Load more blog posts"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
}
