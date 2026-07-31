import AboutHero from "@/components/about/hero";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import PageBanner from "@/components/common/page-banner";

export const metadata = {
  title: "About Us | FurniClass",
  description:
    "Learn about FurniClass - Crafting luxury, bespoke furniture with uncompromised quality.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner title="About US" breadcrumb="About Us" />
      <AboutHero />
    </main>
  );
}
