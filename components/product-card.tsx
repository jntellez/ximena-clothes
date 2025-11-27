"use client"

import Link from "next/link"
import { Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/mock-data"

interface ProductCardProps {
  product: Product
  onAddToCart?: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              Sale
            </div>
          )}
        </div>
      </Link>

      <div className="space-y-4 p-4">
        <Link href={`/product/${product.id}`} className="block hover:text-accent">
          <h3 className="font-semibold text-foreground transition-colors">{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        {onAddToCart ? (
          <Button onClick={onAddToCart} className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        ) : (
          <Link href={`/product/${product.id}`} className="block">
            <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <ShoppingBag className="h-4 w-4" />
              View Details
            </Button>
          </Link>
        )}
      </div>
    </Card>
  )
}
