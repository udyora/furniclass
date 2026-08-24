import { Metadata } from "next";
import PageBanner from "@/components/common/page-banner";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";
import MainContactForm from "@/components/contact/main-contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Custom Orders | Furniclass",
  description:
    "Get in touch with Furniclass or place custom furniture manufacturing orders in Mlerna, Faridabad.",
};

export default function ContactPage() {
  return (
    <main className="font-quicksand bg-bg-main">
      <PageBanner />

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Text */}

          {/* Grid Layout: Left Info Card + Right Order/Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <MainContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
