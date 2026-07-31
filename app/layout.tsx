import type { Metadata } from "next";
import { Quicksand, Poppins, Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import ScrollToTop from "@/components/common/scroll-to-top";

// Framer Site Fonts Setup
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FurniHub — Luxury & Bespoke Custom Furniture",
  description:
    "Manufactured to perfection. Explore curated luxury furniture or upload your custom designs for precision bespoke crafting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${poppins.variable} ${inter.variable} ${titillium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-quicksand bg-bg-main text-dark">
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
