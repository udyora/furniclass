import Link from "next/link";
import Image from "next/image";

interface PageBannerProps {
  title?: string;
  breadcrumb?: string;
  bgImage?: string;
}

export default function PageBanner({
  title = "About US",
  breadcrumb = "About Us",
  bgImage = "https://framerusercontent.com/images/QJMIMeriVCuJUHEsVBBsdcuOM9I.webp",
}: PageBannerProps) {
  return (
    <section
      aria-labelledby="page-banner-title"
      className="relative w-full overflow-hidden bg-dark py-16 sm:py-20 lg:py-24 font-quicksand"
    >
      {/* Background Image Container with decorative aria-hidden */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={bgImage}
          alt="" // Decorative background, main context is in the heading
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Banner Content Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Main H1 Title for Page Level SEO */}
        <h1
          id="page-banner-title"
          className="font-quicksand text-3xl font-bold text-gold sm:text-4xl lg:text-5xl tracking-wide"
        >
          {title}
        </h1>

        {/* Semantic Breadcrumb Navigation for Crawlers */}
        <nav aria-label="Breadcrumb Navigation" className="mt-3 sm:mt-4">
          <ol className="inline-flex items-center gap-2 text-sm font-medium text-white/90 sm:text-base">
            <li>
              <Link
                href="/"
                aria-label="Navigate back to FurniClass Homepage"
                className="hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-xs"
              >
                Home
              </Link>
            </li>

            {/* Visual Separator */}
            <li aria-hidden="true" className="text-white/60 select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-white/70"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>

            {/* Active Current Page */}
            <li className="text-white/80 font-normal" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
