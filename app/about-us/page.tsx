import AboutHero from "@/components/about/hero";
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
      <SectionHeading className="pt-12 lg:text-left" title="About Us" />
      <AboutHero />
    </main>
  );
}
