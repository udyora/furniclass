import AboutHero from "@/components/about/hero";
import PageBanner from "@/components/common/page-banner";
import SectionHeading from "@/components/common/section-heading";

export const metadata = {
  title: "About Us | Furniclass",
  description:
    "Learn about Furniclass - Crafting luxury, bespoke furniture with uncompromised quality.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner />
      <AboutHero />
    </main>
  );
}
