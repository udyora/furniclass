import AboutHero from "@/components/about/hero";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import PageBanner from "@/components/common/page-banner";
import SectionHeading from "@/components/common/section-heading";

export const metadata = {
  title: "About Us | FurniClass",
  description:
    "Learn about FurniClass - Crafting luxury, bespoke furniture with uncompromised quality.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner />
      <SectionHeading className="pt-12" title="About Us" />
      <AboutHero />
    </main>
  );
}
