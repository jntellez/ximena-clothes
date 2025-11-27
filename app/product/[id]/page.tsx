"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mock-data"
import { useCart } from "@/lib/cart-context"
import { Star, ShoppingBag, Heart } from "lucide-react"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <p className="text-xl text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12">
          {/* Product */}
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            {/* Image */}
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full rounded-lg bg-muted object-cover h-[600px]"
              />
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-accent mb-2">{product.category.toUpperCase()}</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 text-3xl mb-6">
                  <span className="font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{product.description}</p>
              </div>

              {/* Options */}
              <div className="space-y-6">
                {/* Size */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Size</label>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded-lg border-2 transition-all font-medium ${
                          selectedSize === size
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border hover:border-accent"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Color</label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                          selectedColor === color
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border hover:border-accent"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-border hover:bg-muted flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-border hover:bg-muted flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </Button>
                <Button variant="outline" size="lg" className="px-6 bg-transparent">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {!product.inStock && <p className="text-red-600 font-semibold">Out of Stock</p>}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Related Products</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
