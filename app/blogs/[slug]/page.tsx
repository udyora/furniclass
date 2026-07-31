import { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/common/page-banner";
import BlogSidebar from "@/components/blogs/blog-sidebar";

interface BlogDetailPageProps {
  params?: { slug?: string };
}

export const metadata: Metadata = {
  title: "The Charm of Minimalist Interiors | FurniClass Blog",
  description:
    "Explore what makes minimalist interior design so appealing, popular décor ideas, and how to bring this timeless style into your space.",
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = {
    title: "The Charm of Minimalist Interiors",
    image:
      "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
    intro:
      "Minimalism is more than just a design choice—it’s a way of living. By focusing on simplicity, clean lines, and clutter-free spaces, minimalist interiors create calm and balance in your home. It’s about having less, but making it mean more.",
    subIntro:
      "In this blog, we’ll explore what makes minimalist design so appealing, popular décor ideas, and how you can bring this timeless style into your space.",
    sections: [
      {
        heading: "What Defines Minimalist Interiors?",
        points: [
          {
            bold: "Clean Lines",
            text: "Sleek designs with no unnecessary details.",
          },
          {
            bold: "Neutral Colors",
            text: "Whites, greys, beiges, and earthy tones.",
          },
          {
            bold: "Functionality First",
            text: "Every piece has a purpose and place.",
          },
          {
            bold: "Open Spaces",
            text: "Airy, uncluttered rooms that feel light and peaceful.",
          },
          {
            bold: "Quality over Quantity",
            text: "Few but high-quality furniture items.",
          },
        ],
      },
      {
        heading: "Popular Minimalist Décor Ideas",
        points: [
          {
            bold: "Low Wooden Beds & Sofas",
            text: "Simple frames with functional design.",
          },
          {
            bold: "Neutral Rugs & Curtains",
            text: "Soft textures without bold patterns.",
          },
          {
            bold: "Glass & Metal Accents",
            text: "Add sleekness while maintaining simplicity.",
          },
          { bold: "Built-In Storage", text: "Keeps the room clutter-free." },
          {
            bold: "Indoor Plants",
            text: "A touch of greenery for natural balance.",
          },
          { bold: "Minimal Artwork", text: "Abstract or line art for walls." },
        ],
      },
      {
        heading: "How To Bring Minimalism Into Your Home?",
        points: [
          {
            bold: "Declutter First",
            text: "Remove unnecessary items before adding new pieces.",
          },
          {
            bold: "Choose Neutral Tones",
            text: "Stick to a calm color palette.",
          },
          {
            bold: "Invest in Multi-Functional Furniture",
            text: "Save space while staying stylish.",
          },
          {
            bold: "Add Natural Light",
            text: "Keep windows open, use sheer curtains.",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen font-quicksand bg-bg-main pb-20">
      {/* Top Banner with exact title: The Charm of Minimalist Interiors */}
      <PageBanner title={post.title} breadcrumb={post.title} />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Main Blog Content Area */}
            <article className="lg:col-span-8 bg-bg-card p-6 sm:p-10 rounded-xs border border-border-light shadow-xs">
              {/* Featured Image */}
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs bg-bg-main border border-border-light mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Intro Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-dark font-normal leading-relaxed">
                <p>{post.intro}</p>
                <p>{post.subIntro}</p>
              </div>

              {/* Content Sections */}
              <div className="mt-8 space-y-8">
                {post.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-dark">
                      {sec.heading}
                    </h2>
                    <ul className="space-y-2.5 pl-4 list-disc text-sm sm:text-base text-dark leading-relaxed">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <strong className="font-bold text-dark">
                            {pt.bold}
                          </strong>{" "}
                          – <span className="text-muted-light">{pt.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            {/* Right Sidebar Widget */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
