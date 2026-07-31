import { Metadata } from "next";
import PageBanner from "@/components/common/page-banner";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Custom Orders | FurniClass",
  description:
    "Get in touch with FurniClass or place custom furniture manufacturing orders in Mlerna, Faridabad.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen font-quicksand bg-bg-main pb-20">
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Text */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Get In Touch With Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-light font-normal leading-relaxed">
              For more information about our products, custom furniture
              manufacturing, or quick orders, please feel free to drop us an
              inquiry. Our craft experts are always here to help you out!
            </p>
          </div>

          {/* Grid Layout: Left Info Card + Right Order/Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
