export interface CategoryProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

export const categoryProducts: CategoryProduct[] = [
  // =========================
  // CHAIRS
  // =========================
  {
    id: "c1",
    slug: "nordic-oak-lounge-chair",
    name: "Nordic Oak Lounge Chair",
    categorySlug: "chairs",
    description:
      "A beautifully crafted natural oak lounge chair with a timeless Scandinavian-inspired design.",
    price: "Rp 1.850.000",
    originalPrice: "Rp 2.400.000",
    image: "/nordic-oak-lounge.webp",
  },
  {
    id: "c2",
    slug: "curved-oak-scandinavian-chair",
    name: "Curved Oak Scandinavian Chair",
    categorySlug: "chairs",
    description:
      "Elegant curved-back wooden chair designed for comfortable dining and modern interiors.",
    price: "Rp 1.650.000",
    image: "/curved-back-lounge.webp",
  },
  {
    id: "c3",
    slug: "mid-century-dining-chair",
    name: "Mid-Century Dining Chair",
    categorySlug: "chairs",
    description:
      "A refined mid-century dining chair featuring a dark green upholstered seat and minimalist frame.",
    price: "Rp 1.450.000",
    originalPrice: "Rp 1.900.000",
    image: "/mid-century-dining-chair.webp",
  },
  {
    id: "c4",
    slug: "modern-lounge-armchair",
    name: "Modern Lounge Armchair",
    categorySlug: "chairs",
    description:
      "Soft upholstered lounge armchair with a comfortable silhouette for living rooms and reading corners.",
    price: "Rp 2.200.000",
    originalPrice: "Rp 2.900.000",
    image: "/lounge-armchair.webp",
  },
  {
    id: "c5",
    slug: "natural-oak-counter-bar",
    name: "Natural Oak Counter Bar",
    categorySlug: "chairs",
    description:
      "Minimal natural oak counter-height bar chair designed for kitchens, counters and casual dining spaces.",
    price: "Rp 1.350.000",
    image: "/natural-oak-counter-bar.webp",
  },
  {
    id: "c6",
    slug: "cognac-leather-mid-century-chair",
    name: "Cognac Leather Mid-Century Chair",
    categorySlug: "chairs",
    description:
      "Premium cognac leather lounge chair with a warm wooden frame and classic mid-century character.",
    price: "Rp 3.250.000",
    originalPrice: "Rp 4.200.000",
    image: "/cognac-leather-mid-century.webp",
  },

  // =========================
  // SOFAS
  // =========================
  {
    id: "s1",
    slug: "natural-oak-frame-sofa",
    name: "Natural Oak Frame Sofa",
    categorySlug: "sofas",
    description:
      "A timeless upholstered sofa featuring a natural oak frame and soft comfortable seating.",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/natural-oak-frame-soffa.webp",
  },
  {
    id: "s2",
    slug: "slate-mid-century-sofa",
    name: "Slate Mid-Century Sofa",
    categorySlug: "sofas",
    description:
      "A stylish mid-century sofa combining warm upholstery with a contemporary two-tone finish.",
    price: "Rp 6.500.000",
    originalPrice: "Rp 9.500.000",
    image: "/slate-mid-century-sofa.webp",
  },
  {
    id: "s3",
    slug: "modern-lounge-sofa",
    name: "Modern Lounge Sofa",
    categorySlug: "sofas",
    description:
      "A soft contemporary sofa with clean lines and generous cushioning for everyday comfort.",
    price: "Rp 5.800.000",
    originalPrice: "Rp 8.500.000",
    image: "/lounge-armchair.webp",
  },
  {
    id: "s4",
    slug: "white-haven-sofa",
    name: "White Haven Sofa",
    categorySlug: "sofas",
    description:
      "A refined white upholstered sofa with a warm wooden frame for elegant modern interiors.",
    price: "Rp 6.000.000",
    originalPrice: "Rp 8.000.000",
    image: "/white-soffa.webp",
  },
  {
    id: "s5",
    slug: "cognac-leather-mid-century-sofa",
    name: "Cognac Leather Mid-Century Sofa",
    categorySlug: "sofas",
    description:
      "A sophisticated cognac leather sofa inspired by classic mid-century furniture design.",
    price: "Rp 8.500.000",
    originalPrice: "Rp 11.500.000",
    image: "/cognac-leather-mid-century.webp",
  },
  {
    id: "s6",
    slug: "charcoal-box-frame-lounge-sofa",
    name: "Charcoal Box Frame Lounge Sofa",
    categorySlug: "sofas",
    description:
      "A bold charcoal upholstered sofa with a structured box-frame silhouette and minimalist legs.",
    price: "Rp 6.900.000",
    originalPrice: "Rp 9.000.000",
    image: "/box-frame-lounge-chair.webp",
  },

  // =========================
  // TABLES
  // =========================
  {
    id: "t1",
    slug: "walnut-double-pedestal-table",
    name: "Walnut Double-Pedestal Table",
    categorySlug: "tables",
    description:
      "Elegant rectangular walnut table featuring twin chrome pedestal supports for a clean contemporary look.",
    price: "Rp 4.800.000",
    originalPrice: "Rp 6.500.000",
    image: "/pedestal-coffee-table.webp",
  },
  {
    id: "t2",
    slug: "walnut-chrome-trestle-table",
    name: "Walnut Chrome Trestle Table",
    categorySlug: "tables",
    description:
      "Modern walnut table with a slim chrome trestle base, ideal for dining and collaborative spaces.",
    price: "Rp 4.500.000",
    originalPrice: "Rp 6.000.000",
    image: "/trestle-office-table.webp",
  },
  {
    id: "t3",
    slug: "light-oak-pedestal-table",
    name: "Light Oak Pedestal Table",
    categorySlug: "tables",
    description:
      "Minimal square-top table crafted with a light oak surface and sleek chrome pedestal base.",
    price: "Rp 3.900.000",
    image: "/pedestal-table.webp",
  },
  {
    id: "t4",
    slug: "dark-walnut-bent-leg-table",
    name: "Dark Walnut Bent Leg Table",
    categorySlug: "tables",
    description:
      "Round walnut table featuring sculpted bent wooden legs for a sophisticated mid-century aesthetic.",
    price: "Rp 3.250.000",
    originalPrice: "Rp 4.500.000",
    image: "/bent-leg-table.webp",
  },
  {
    id: "t5",
    slug: "walnut-tulip-pedestal-table",
    name: "Walnut Tulip Pedestal Table",
    categorySlug: "tables",
    description:
      "Elegant round dining table with a sculptural tulip-inspired pedestal base and premium walnut top.",
    price: "Rp 3.750.000",
    originalPrice: "Rp 5.000.000",
    image: "/pedestal-dining-table.webp",
  },
  {
    id: "t6",
    slug: "white-wire-base-coffee-table",
    name: "White Wire Base Coffee Table",
    categorySlug: "tables",
    description:
      "Minimal round coffee table with a clean white top and lightweight geometric wire base.",
    price: "Rp 2.250.000",
    originalPrice: "Rp 3.100.000",
    image: "/wire-base-coffee-table.webp",
  },

  // =========================
  // ACCESSORIES
  // =========================
  {
    id: "a1",
    slug: "black-bean-bag-lounge",
    name: "Black Bean Bag Lounge",
    categorySlug: "accessories",
    description:
      "A relaxed oversized bean bag lounge designed for casual seating, gaming rooms and modern spaces.",
    price: "Rp 950.000",
    originalPrice: "Rp 1.250.000",
    image: "/black-bean-bag.webp",
  },
  {
    id: "a2",
    slug: "nested-round-wood-side-tables",
    name: "Nested Round Wood Side Tables",
    categorySlug: "accessories",
    description:
      "A stylish pair of nested round wooden side tables with contemporary metal bases.",
    price: "Rp 1.450.000",
    originalPrice: "Rp 1.900.000",
    image: "/nested-round-wood.webp",
  },
  {
    id: "a3",
    slug: "opal-globe-brass-lamp",
    name: "Opal Globe Brass Table Lamp",
    categorySlug: "accessories",
    description:
      "Elegant globe table lamp combining a soft opal sphere with a warm brass-toned base.",
    price: "Rp 850.000",
    image: "/opal-globe-brass.webp",
  },
  {
    id: "a4",
    slug: "large-indoor-green-plant",
    name: "Large Indoor Green Plant",
    categorySlug: "accessories",
    description:
      "A statement indoor green plant presented in a contemporary decorative planter for modern interiors.",
    price: "Rp 1.200.000",
    originalPrice: "Rp 1.600.000",
    image: "/large-indoor-green-plant.webp",
  },
  {
    id: "a5",
    slug: "modern-cube-bookshelf",
    name: "Modern Cube Bookshelf",
    categorySlug: "accessories",
    description:
      "A spacious modern cube bookshelf designed to display books, décor, plants and personal collections.",
    price: "Rp 3.200.000",
    originalPrice: "Rp 4.200.000",
    image: "/cube-bookshelf.webp",
  },
];
