"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Bell,
  LogOut,
  Loader2,
  Menu,
  X,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  // Sanity Live Query for Unread "NEW" Enquiries Badge
  const { data: unreadEnquiries = [] } = useQuery({
    queryKey: ["sanity-unread-notifications"],
    queryFn: async () => {
      const query = `*[_type == "enquiry" && status == "NEW"] { _id }`;
      return await client.fetch(query);
    },
    refetchInterval: 10000,
  });

  const unreadCount = unreadEnquiries.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Strict Redirect Guard (Prevents leaking back to `/` or `/admin/login` once authenticated)
  useEffect(() => {
    if (mounted && !isLoading) {
      if (!user && !isLoginPage) {
        router.replace("/admin/login");
      } else if (user && isLoginPage) {
        router.replace("/admin/dashboard");
      }
    }
  }, [user, isLoading, isLoginPage, mounted, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-card font-quicksand space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-sm font-semibold text-muted">
          Authenticating Session...
        </p>
      </div>
    );
  }

  if (!user) return null;

  const navLinks = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Enquiries",
      href: "/admin/enquiries",
      icon: MessageSquare,
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-main font-quicksand">
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar (Responsive Drawer on Mobile) */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 border-r border-border-light bg-white flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          <div className="px-2 py-3 border-b border-border-light flex items-center justify-between">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-3 text-dark hover:opacity-95 transition-opacity"
            >
              <Image
                width={200}
                height={58}
                src="/logo.svg"
                alt="Furniclass Logo"
                className="object-contain"
              />
              {/* <div className="flex flex-col">
            <span className="font-quicksand text-[29px] text-start font-extrabold text-dark leading-none">
              furniclass<span className="text-primary">.com</span>
            </span>
            <span className="my-1 h-0.5 w-full rounded-full bg-primary opacity-80" />
            <span className="font-quicksand text-xs font-bold uppercase text-muted-light tracking-[0.1px] leading-none">
              Premium Make To Order Studio
            </span>
          </div> */}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-muted hover:text-dark p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-xs"
                      : "text-dark hover:bg-bg-cream hover:text-gold"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-primary"
                    }`}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="border-t border-border-light pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
              {(user as any)?.name?.charAt(0) || "A"}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-dark truncate">
                {(user as any)?.name || "Admin"}
              </p>
              <p className="text-[10px] text-muted truncate">
                {(user as any)?.email || ""}
              </p>
            </div>
          </div>
          <button
            onClick={() => logout()}
            className="text-muted hover:text-pink transition-colors cursor-pointer shrink-0 ml-1"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 border-b border-border-light bg-white px-4 md:px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg border border-border-light text-dark hover:bg-bg-card"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="font-poppins text-base md:text-lg font-semibold text-dark truncate">
              Studio Management Portal
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/enquiries"
              className="relative p-2 text-muted hover:text-primary transition-colors cursor-pointer"
              title={`${unreadCount} New Unread Enquiries`}
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink text-[10px] font-bold text-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </Link>
          </div>
        </header>

        {/* Scrollable View Content */}
        <main className="p-4 md:p-6 bg-bg-card/30 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
