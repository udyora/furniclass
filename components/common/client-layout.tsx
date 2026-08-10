"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import ScrollToTop from "@/components/common/scroll-to-top";
import QueryProvider from "@/components/common/query-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <QueryProvider>
      {!isAdminRoute && <ScrollToTop />}
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </QueryProvider>
  );
}
