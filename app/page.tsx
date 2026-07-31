import Blogs from "@/components/blogs";
import Category from "@/components/categories";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import FeaturedProducts from "@/components/featured-product";
import GallerySection from "@/components/gallery/slider";
import Hero from "@/components/hero";
import RoomInspiration from "@/components/room-inspiration";
export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedProducts />
      <RoomInspiration />
      <GallerySection />
      <Blogs />
    </>
  );
}
