// Datos simulados para la tienda Ximena Clothes
// Esta estructura está lista para ser reemplazada con fetch de API/Base de datos más adelante

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
    name: "Vestidos",
    image: "/elegant-womens-dresses-fashion.jpg",
    slug: "dresses",
  },
  {
    id: "2",
    name: "Blusas",
    image: "/stylish-womens-tops-blouses.jpg",
    slug: "tops",
  },
  {
    id: "3",
    name: "Pantalones",
    image: "/fashionable-womens-pants-skirts.jpg",
    slug: "bottoms",
  },
  {
    id: "4",
    name: "Abrigos",
    image: "/designer-womens-jackets-coats.jpg",
    slug: "outerwear",
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Vestido Minimalista de Lino",
    price: 129,
    originalPrice: 179,
    image: "/minimalist-linen-dress-beige.jpg",
    category: "dresses",
    description: "Un vestido de lino atemporal perfecto para cualquier ocasión",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Blanco", "Negro"],
  },
  {
    id: "2",
    name: "Blusa de Seda",
    price: 99,
    image: "/silk-blouse-ivory-womens.jpg",
    category: "tops",
    description: "Blusa de seda lujosa para un estilo elegante",
    rating: 4.8,
    reviews: 245,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Marfil", "Negro", "Azul Marino", "Rubor"],
  },
  {
    id: "3",
    name: "Pantalones de Cintura Alta",
    price: 159,
    originalPrice: 199,
    image: "/high-waist-tailored-trousers-black.jpg",
    category: "bottoms",
    description: "Pantalones tailored de cintura alta para la mujer moderna",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris Carbón", "Azul Marino"],
  },
  {
    id: "4",
    name: "Abrigo de Lana",
    price: 249,
    originalPrice: 329,
    image: "/premium-wool-coat-black.jpg",
    category: "outerwear",
    description: "Abrigo de lana premium para un estilo invernal sofisticado",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Camel", "Gris Carbón"],
  },
  {
    id: "5",
    name: "Vestido Midi Elegante",
    price: 119,
    image: "/flowy-midi-dress-white-womens.jpg",
    category: "dresses",
    description: "Vestido midi elegante con silueta fluida",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco", "Crema", "Verde Salvia"],
  },
  {
    id: "6",
    name: "Suéter de Cachemira",
    price: 189,
    image: "/luxury-cashmere-sweater-cream.jpg",
    category: "tops",
    description: "Suéter suave de cachemira para máxima comodidad",
    rating: 4.8,
    reviews: 203,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Crema", "Negro", "Gris"],
  },
  {
    id: "7",
    name: "Jeans de Pierna Ancha",
    price: 99,
    image: "/premium-wide-leg-jeans-denim.jpg",
    category: "bottoms",
    description: "Jeans contemporáneos de pierna ancha con ajuste perfecto",
    rating: 4.5,
    reviews: 178,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Índigo", "Negro", "Blanco"],
  },
  {
    id: "8",
    name: "Chaqueta Blazer",
    price: 179,
    image: "/structured-blazer-jacket-navy.jpg",
    category: "outerwear",
    description: "Blazer estructurado para elegancia profesional",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul Marino", "Negro", "Gris Carbón"],
  },
]
