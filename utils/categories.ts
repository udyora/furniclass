export interface CategoryProduct {
  id: string;
  name: string;
  categorySlug: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

export const categoryProducts: CategoryProduct[] = [
  // ================= CHAIRS (6 Items) =================
  {
    id: "c1",
    name: "Muggo Wooden Chair",
    categorySlug: "chairs",
    description: "Ergonomic dining & accent chair crafted from solid oak wood.",
    price: "Rp 150.000",
    image:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  },
  {
    id: "c2",
    name: "Minimalist Lounge Chair",
    categorySlug: "chairs",
    description:
      "Sculpted velvet armchair built for premium executive lounge comfort.",
    price: "Rp 1.200.000",
    originalPrice: "Rp 1.800.000",
    image:
      "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
  },
  {
    id: "c3",
    name: "Nordic Dining Chair Set",
    categorySlug: "chairs",
    description:
      "Sleek wooden frame with cushioned seating for contemporary dining rooms.",
    price: "Rp 850.000",
    image:
      "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
  },
  {
    id: "c4",
    name: "Aura Velvet Armchair",
    categorySlug: "chairs",
    description:
      "Plush velvet back support with polished gold-toned metallic legs.",
    price: "Rp 2.100.000",
    originalPrice: "Rp 2.800.000",
    image:
      "https://framerusercontent.com/images/qzRnfwWaiU5GfrtihylFXPP6vc.webp",
  },
  {
    id: "c5",
    name: "Elegance Executive Desk Chair",
    categorySlug: "chairs",
    description:
      "Premium leather executive seating with ergonomic lumbar contouring.",
    price: "Rp 3.400.000",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
  {
    id: "c6",
    name: "Urban Rattan Accent Chair",
    categorySlug: "chairs",
    description:
      "Handcrafted natural rattan weave design for modern balcony corners.",
    price: "Rp 950.000",
    image:
      "https://framerusercontent.com/images/E1SeXrbQeB7bVC1LQduOpuhLg.webp",
  },

  // ================= SOFAS (6 Items) =================
  {
    id: "s1",
    name: "Lolito Luxury Big Sofa",
    categorySlug: "sofas",
    description:
      "A premium oversized sofa designed for luxurious comfort and modern interiors.",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
  {
    id: "s2",
    name: "Verona Modular Sectional Sofa",
    categorySlug: "sofas",
    description:
      "L-shaped deep cushion modular sofa perfect for large family living spaces.",
    price: "Rp 11.500.000",
    originalPrice: "Rp 15.000.000",
    image:
      "https://framerusercontent.com/images/3GB2Pah9N4LedXnHFT9WWE6Gsk.webp",
  },
  {
    id: "s3",
    name: "Chesterfield Velvet 3-Seater",
    categorySlug: "sofas",
    description:
      "Classic tufted button design upholstered in premium stain-resistant velvet.",
    price: "Rp 8.900.000",
    image:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  },
  {
    id: "s4",
    name: "Nordic Minimalist Couch",
    categorySlug: "sofas",
    description:
      "Clean aesthetic 2-seater couch with neutral tones and solid beechwood base.",
    price: "Rp 4.800.000",
    originalPrice: "Rp 6.200.000",
    image:
      "https://framerusercontent.com/images/M5UOPtlamIUkwnieQ3yYAxPFskc.webp",
  },
  {
    id: "s5",
    name: "Plush Modern Recliner Sofa",
    categorySlug: "sofas",
    description:
      "Ultra-comfortable recliner sofa featuring high-density foam cushioning.",
    price: "Rp 9.200.000",
    image:
      "https://framerusercontent.com/images/E1SeXrbQeB7bVC1LQduOpuhLg.webp",
  },
  {
    id: "s6",
    name: "Koto Compact Studio Sofa",
    categorySlug: "sofas",
    description:
      "Space-saving elegant 2-seater sofa designed for apartment lounges.",
    price: "Rp 3.750.000",
    image:
      "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
  },

  // ================= TABLES (6 Items) =================
  {
    id: "t1",
    name: "Respira High-Top Bar Table",
    categorySlug: "tables",
    description:
      "Durable and stylish outdoor bar table with matching weather-resistant finish.",
    price: "Rp 500.000",
    image: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg",
  },
  {
    id: "t2",
    name: "Granite Top Luxury Dining Table",
    categorySlug: "tables",
    description:
      "Sintered stone 6-seater dining table with heavy-duty metallic legs.",
    price: "Rp 8.500.000",
    originalPrice: "Rp 12.000.000",
    image:
      "https://framerusercontent.com/images/omu7WWKCCJyngcInEeptxK9YXw.webp",
  },
  {
    id: "t3",
    name: "Koto Round Coffee Table",
    categorySlug: "tables",
    description: "Modern minimalist center table crafted from solid teak wood.",
    price: "Rp 1.450.000",
    image:
      "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp",
  },
  {
    id: "t4",
    name: "Aura Minimalist Study Desk",
    categorySlug: "tables",
    description:
      "Sleek work desk with integrated cable management and dual drawers.",
    price: "Rp 2.300.000",
    originalPrice: "Rp 3.100.000",
    image:
      "https://framerusercontent.com/images/3GB2Pah9N4LedXnHFT9WWE6Gsk.webp",
  },
  {
    id: "t5",
    name: "Woodland Console Table",
    categorySlug: "tables",
    description:
      "Narrow hallway console table carved from reclaimed walnut wood.",
    price: "Rp 1.950.000",
    image:
      "https://framerusercontent.com/images/K7E1doWuZkqDsb0pEOQ9BFAMKaw.webp",
  },
  {
    id: "t6",
    name: "Nexus Glass Side Table",
    categorySlug: "tables",
    description:
      "Tempered glass geometric end table ideal for couch side placement.",
    price: "Rp 890.000",
    image:
      "https://framerusercontent.com/images/fqDYm6jymxWJSNIUFSEjk9RKWvs.jpg",
  },

  // ================= ACCESSORIES (5 Items) =================
  {
    id: "a1",
    name: "Lumo – Modern LED Night Lamp",
    categorySlug: "accessories",
    description:
      "Sleek and stylish night lamp designed to create a calm, ambient glow.",
    price: "Rp 1.500.000",
    image:
      "https://framerusercontent.com/images/vWOtRRHqHqC3nccZYSpVnQX30E0.webp",
  },
  {
    id: "a2",
    name: "Aura Wooden Floor Lamp",
    categorySlug: "accessories",
    description: "Minimalist tripod floor lamp with warm linen lampshade.",
    price: "Rp 1.100.000",
    originalPrice: "Rp 1.500.000",
    image:
      "https://framerusercontent.com/images/fqDYm6jymxWJSNIUFSEjk9RKWvs.jpg",
  },
  {
    id: "a3",
    name: "Nordic Geometric Wall Mirror",
    categorySlug: "accessories",
    description:
      "Brass accented accent mirror perfect for vanity or foyer walls.",
    price: "Rp 750.000",
    image:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  },
  {
    id: "a4",
    name: "Artisan Ceramic Flower Vase",
    categorySlug: "accessories",
    description:
      "Hand-molded matte ceramic vase set for dining and side table decor.",
    price: "Rp 320.000",
    image:
      "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
  },
  {
    id: "a5",
    name: "Luxury Woven Throw Pillow Set",
    categorySlug: "accessories",
    description:
      "Set of 2 designer cushion covers with textured geometric patterns.",
    price: "Rp 450.000",
    originalPrice: "Rp 600.000",
    image:
      "https://framerusercontent.com/images/qzRnfwWaiU5GfrtihylFXPP6vc.webp",
  },
];
