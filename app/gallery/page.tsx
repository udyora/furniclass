import SectionHeading from "@/components/common/section-heading";
import GalleryGrid from "@/components/gallery/gallery-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | FurniClass",
  description:
    "Explore our gallery of transformed spaces, bespoke furniture designs, and luxury interior concepts crafted by FurniClass.",
  openGraph: {
    title: "Gallery | FurniClass",
    description:
      "Explore our gallery of transformed spaces and bespoke luxury furniture.",
    url: "https://furniclass.com/gallery",
    siteName: "FurniClass",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryGrid />
    </main>
  );
}
