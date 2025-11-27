"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { X, ArrowRight } from "lucide-react"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="text-muted-foreground">Add some beautiful pieces from our collection to get started.</p>
            <Link href="/catalog">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                Continue Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-12">Shopping Cart</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="flex gap-6 p-6">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-32 w-32 rounded-lg object-cover bg-muted"
                  />

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.selectedSize} | Color: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 rounded border border-border hover:bg-muted flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-border hover:bg-muted flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right space-y-1">
                        <p className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">${item.price} each</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div>
              <Card className="sticky top-24 p-6 space-y-6">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-4 border-b border-border pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base">
                  Proceed to Checkout
                </Button>

                <Link href="/catalog">
                  <Button variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>

                <button onClick={clearCart} className="w-full text-sm text-destructive hover:underline">
                  Clear Cart
                </button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
