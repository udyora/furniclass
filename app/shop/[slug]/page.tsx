"use client";

import { useState } from "react";
import PageBanner from "@/components/common/page-banner";
import ProductGallery from "@/components/shop/product-gallery";
import ProductInfo from "@/components/shop/product-info";
import ProductTabs from "@/components/shop/product-tabs";
import RelatedProducts from "@/components/shop/related-product";
import { productData, relatedProducts } from "@/utils/product";

interface ProductDetailPageProps {
  params?: { slug?: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // States
  const [mainImage, setMainImage] = useState(productData.images[0]);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#816dfa");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen font-quicksand bg-bg-main pb-20">
      <PageBanner title="Shop" breadcrumb="Shop" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Product Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            <ProductGallery
              images={productData.images}
              mainImage={mainImage}
              setMainImage={setMainImage}
              productName={productData.name}
            />

            <ProductInfo
              name={productData.name}
              price={productData.price}
              originalPrice={productData.originalPrice}
              rating={productData.rating}
              description={productData.description}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>

          {/* Interactive Tabs */}
          <ProductTabs fullName={productData.fullName} />

          {/* Related Products Grid */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </section>
    </main>
  );
}
