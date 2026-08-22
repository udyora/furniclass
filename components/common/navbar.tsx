"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Categories", href: "/categories" },
    { name: "Gallery", href: "/gallery" },
    // { name: "Testimonials", href: "/#testimonials" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-main/95 backdrop-blur-md shadow-xs border-b border-border-light font-quicksand">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-dark hover:opacity-95 transition-opacity"
        >
          <Image
            width={200}
            height={28}
            src="/logo.svg"
            alt="Furniclass Logo"
            className="object-contain"
          />
        </Link>
        {/* Primary Navigation for lg Screens */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <li key={link.name} className="relative py-2">
                  <Link
                    href={link.href}
                    className={`font-quicksand text-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs ${
                      isActive
                        ? "font-bold text-primary"
                        : "font-semibold text-dark hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Active Route Primary Underline Bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary rounded-full transition-all duration-300" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-dark hover:bg-bg-card hover:text-primary lg:hidden cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay + Smooth Slide Panel */}
      <div
        className={`fixed inset-x-0 top-[61px] bottom-0 z-40 bg-dark/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          onClick={(e) => e.stopPropagation()}
          className={`bg-bg-main border-b border-border-light px-6 pt-4 pb-8 shadow-xl transition-all duration-300 ease-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between font-quicksand text-lg py-3 transition-colors border-b border-border-light/50 last:border-b-0 ${
                      isActive
                        ? "font-bold text-primary"
                        : "font-semibold text-dark hover:text-primary"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
