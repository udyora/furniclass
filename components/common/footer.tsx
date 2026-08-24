import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      id: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: "https://framerusercontent.com/images/gIrRNDMcdyeWNl32McMpSQYEauE.svg",
    },
    {
      id: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: "https://framerusercontent.com/images/fcGDKvWXKSuezowbPCBDvFy84Mw.svg",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://in.linkedin.com",
      icon: "https://framerusercontent.com/images/aB9wobezBTzuzRguuweFLYqLk.svg",
    },
    {
      id: "twitter",
      name: "Twitter",
      href: "https://x.com",
      icon: "https://framerusercontent.com/images/68au2cTcgESYDQ2QwiKWu5MH8.svg",
    },
  ];

  return (
    <footer className="w-full font-quicksand mt-12">
      {/* Main Footer Section */}
      <div className="bg-primary text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-5 pr-0 sm:pr-4 flex flex-col items-center text-center md:items-start md:text-left">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-white hover:opacity-95 transition-opacity"
              >
                <Image
                  width={38}
                  height={38}
                  src="/footer-logo.svg"
                  alt="Furniclass Logo"
                  className="object-contain"
                />
                <div className="flex flex-col">
                  {/* Domain Name */}
                  <span className="font-quicksand text-lg font-extrabold tracking-tight text-white leading-none">
                    furniclass.com
                  </span>

                  {/* Attractive Center Underline / Divider */}
                  <span className="my-1 h-0.5 w-full rounded-full bg-white opacity-80" />

                  {/* Subtitle */}
                  <span className="font-quicksand text-xs font-bold uppercase text-white leading-none">
                    Make To Order Studio
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-sm font-normal text-white/90 leading-relaxed lg:max-w-sm">
                At <span className="font-semibold">Furniclass</span>, we believe
                your home deserves furniture that combines style, comfort, and
                quality. From modern designs to timeless classics, each piece is
                crafted to enhance your living spaces. Our curated collections
                make it easy to find furniture that reflects your personality
                and lifestyle.
              </p>
              {/* <div className="flex items-center mt-6 justify-center md:justify-start gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}
              </div> */}
            </div>

            {/* Combined Wrapper Div for Links, Policies & Information (grid-cols-3 till md screen) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center md:text-left">
              {/* 1. Quick Links */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-bold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2.5 text-sm font-normal text-white/90 flex flex-col items-center md:items-start">
                  <li>
                    <Link href="/" className="hover:underline transition-all">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="hover:underline transition-all"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="hover:underline transition-all"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 2. Policies */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-bold text-white mb-4">Policies</h3>
                <ul className="space-y-2.5 text-sm font-normal text-white/90 flex flex-col items-center md:items-start">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:underline transition-all"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="hover:underline transition-all"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="hover:underline transition-all"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3. Information */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-bold text-white mb-4">
                  Information
                </h3>
                <ul className="space-y-3 text-sm font-normal text-white/90 flex flex-col items-center md:items-start">
                  <li className="flex justify-center md:justify-start gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 max-lg:hidden text-white shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="">
                      3F-05, Ozone Center, Sector 12, Faridabad, 121007,
                      HAryana, Delhi NCR
                    </span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 max-lg:hidden text-white shrink-0"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a
                      href="mailto:concierge@furniclass.com"
                      className="hover:underline"
                    >
                      concierge@furniclass.com
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 max-lg:hidden text-white shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:919990533555" className="hover:underline">
                      +91 99905 33555
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gold text-white text-center py-3.5 px-4 font-normal">
        © 2026 Furniclass. All rights reserved.
      </div>
    </footer>
  );
}
