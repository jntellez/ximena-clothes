// Mock data for the Ximena Clothes store
// This structure is ready to be replaced with API/Database fetch later

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  sizes: string[]
  colors: string[]
}

export interface CartItem extends Product {
  quantity: number
  selectedSize: string
  selectedColor: string
}

export interface Category {
  id: string
  name: string
  image: string
  slug: string
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Dresses",
    image: "/elegant-womens-dresses-fashion.jpg",
    slug: "dresses",
  },
  {
    id: "2",
    name: "Tops",
    image: "/stylish-womens-tops-blouses.jpg",
    slug: "tops",
  },
  {
    id: "3",
    name: "Bottoms",
    image: "/fashionable-womens-pants-skirts.jpg",
    slug: "bottoms",
  },
  {
    id: "4",
    name: "Outerwear",
    image: "/designer-womens-jackets-coats.jpg",
    slug: "outerwear",
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Linen Dress",
    price: 129,
    originalPrice: 179,
    image: "/minimalist-linen-dress-beige.jpg",
    category: "dresses",
    description: "A timeless linen dress perfect for any occasion",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "White", "Black"],
  },
  {
    id: "2",
    name: "Silk Blouse",
    price: 99,
    image: "/silk-blouse-ivory-womens.jpg",
    category: "tops",
    description: "Luxurious silk blouse for elegant styling",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Black", "Navy", "Blush"],
  },
  {
    id: "3",
    name: "High-Waist Trousers",
    price: 159,
    originalPrice: 199,
    image: "/high-waist-tailored-trousers-black.jpg",
    category: "bottoms",
    description: "Professional tailored trousers for the modern woman",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Navy"],
  },
  {
    id: "4",
    name: "Wool Coat",
    price: 249,
    originalPrice: 329,
    image: "/premium-wool-coat-black.jpg",
    category: "outerwear",
    description: "Premium wool coat for sophisticated winter style",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Charcoal"],
  },
  {
    id: "5",
    name: "Flowy Midi Dress",
    price: 119,
    image: "/flowy-midi-dress-white-womens.jpg",
    category: "dresses",
    description: "Elegant midi dress with flowing silhouette",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Sage Green"],
  },
  {
    id: "6",
    name: "Cashmere Sweater",
    price: 189,
    image: "/luxury-cashmere-sweater-cream.jpg",
    category: "tops",
    description: "Soft cashmere sweater for ultimate comfort",
    rating: 4.8,
    reviews: 203,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Black", "Gray"],
  },
  {
    id: "7",
    name: "Wide Leg Jeans",
    price: 99,
    image: "/premium-wide-leg-jeans-denim.jpg",
    category: "bottoms",
    description: "Contemporary wide leg jeans with perfect fit",
    rating: 4.5,
    reviews: 178,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Indigo", "Black", "White"],
  },
  {
    id: "8",
    name: "Blazer Jacket",
    price: 179,
    image: "/structured-blazer-jacket-navy.jpg",
    category: "outerwear",
    description: "Structured blazer for professional elegance",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Charcoal"],
  },
]
