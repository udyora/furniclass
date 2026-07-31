"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isLoggedIn] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-main/95 backdrop-blur-md shadow-xs border-b border-border-light font-quicksand">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo Link */}
        <Link
          href="/"
          aria-label="FurniClass - Return to Homepage"
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="FurniClass Custom & Luxury Furniture Logo"
            width={120}
            height={56}
            priority
            className="w-36 sm:w-40 object-contain object-left"
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

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* User Account Button */}
          <Link
            href="/my-account"
            aria-label={
              isLoggedIn
                ? "Access your FurniClass account"
                : "Log in or access FurniClass account"
            }
            className="relative p-2 text-dark hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
          >
            <div className="relative flex items-center justify-center">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              {!isLoggedIn && (
                <div
                  title="Logged Out"
                  className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white shadow-xs"
                >
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Link>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? "Close main navigation menu"
                : "Open main navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="p-2 text-dark hover:text-primary focus-visible:outline-2 focus-visible:outline-primary rounded-xs lg:hidden cursor-pointer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay + Smooth Slide Panel */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 bg-dark/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
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
