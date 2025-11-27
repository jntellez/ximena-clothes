"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/mock-data"
import { Edit2, Trash2, Plus, X } from "lucide-react"

interface ProductForm {
  id?: string
  name: string
  price: number
  originalPrice?: number
  category: string
  description: string
  inStock: boolean
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    price: 0,
    category: "dresses",
    description: "",
    inStock: true,
  })

  // Simple password check (replace with real auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password")
    }
  }

  const handleAddProduct = () => {
    setFormData({
      name: "",
      price: 0,
      category: "dresses",
      description: "",
      inStock: true,
    })
    setEditingId(null)
    setShowForm(true)
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    // Ready for API POST request
    console.log("Form data ready for API:", {
      ...formData,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White"],
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 0,
    })
    setShowForm(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md p-8">
            <h1 className="text-2xl font-bold text-foreground mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter password"
                />
              </div>
              <p className="text-xs text-muted-foreground">Demo password: admin123</p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Login</Button>
            </form>
          </Card>
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <Button
              onClick={() => {
                setIsAuthenticated(false)
                setPassword("")
              }}
              variant="outline"
            >
              Logout
            </Button>
          </div>

          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-foreground">Products</h2>
            <Button onClick={handleAddProduct} className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Plus className="h-5 w-5" />
              Add Product
            </Button>
          </div>

          {/* Product Form */}
          {showForm && (
            <Card className="mb-8 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">{editingId ? "Edit Product" : "Add New Product"}</h3>
                <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="dresses">Dresses</option>
                      <option value="tops">Tops</option>
                      <option value="bottoms">Bottoms</option>
                      <option value="outerwear">Outerwear</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Original Price (Optional)</label>
                    <input
                      type="number"
                      value={formData.originalPrice || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          originalPrice: e.target.value ? Number.parseFloat(e.target.value) : undefined,
                        })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <label htmlFor="inStock" className="text-sm font-medium text-foreground cursor-pointer">
                    In Stock
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                    {editingId ? "Update Product" : "Create Product"}
                  </Button>
                  <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Product</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-card">
                    <td className="px-4 py-3 text-foreground font-medium">{product.name}</td>
                    <td className="px-4 py-3 text-muted-foreground capitalize">{product.category}</td>
                    <td className="px-4 py-3 text-foreground font-semibold">${product.price}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.inStock ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingId(product.id)
                          setFormData({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            originalPrice: product.originalPrice,
                            category: product.category,
                            description: product.description,
                            inStock: product.inStock,
                          })
                          setShowForm(true)
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive bg-transparent"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
