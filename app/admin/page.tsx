"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Product } from "@/lib/mock-data"
import { Edit2, Trash2, Plus, X } from "lucide-react"

interface ProductForm {
  id?: string
  name: string
  price: number
  originalPrice?: number
  category: string
  description: string
  inStock: boolean
  sizes: string[]
  colors: string[]
  image: string
}

const API_URL = "http://localhost:3001/api"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    price: 0,
    category: "dresses",
    description: "",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    image: "/placeholder.svg",
  })

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/products`)
      if (!res.ok) throw new Error("Failed to fetch products")
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
      alert("Error al cargar productos")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts()
    }
  }, [isAuthenticated])

  // Simple password check (replace with real auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Contraseña inválida")
    }
  }

  const handleAddProduct = () => {
    setFormData({
      name: "",
      price: 0,
      category: "dresses",
      description: "",
      inStock: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White"],
      image: "/placeholder.svg",
    })
    setEditingId(null)
    setShowForm(true)
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    // Enviar solo los campos necesarios según la API
    const productData = {
      name: formData.name,
      price: formData.price,
      originalPrice: formData.originalPrice || null,
      image: formData.image,
      category: formData.category,
      description: formData.description,
      inStock: formData.inStock,
      sizes: formData.sizes,
      colors: formData.colors,
    }

    try {
      setLoading(true)

      if (editingId) {
        // UPDATE
        const res = await fetch(`${API_URL}/products/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.error || "Failed to update product")
        }
        alert("Producto actualizado exitosamente")
      } else {
        // CREATE
        const res = await fetch(`${API_URL}/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.error || "Failed to create product")
        }
        alert("Producto creado exitosamente")
      }

      setShowForm(false)
      fetchProducts() // Reload products
    } catch (error) {
      console.error("Error saving product:", error)
      alert(`Error al guardar el producto: ${error instanceof Error ? error.message : "Error desconocido"}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este producto?")) return

    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Failed to delete product")
      alert("Producto eliminado exitosamente")
      fetchProducts() // Reload products
    } catch (error) {
      console.error("Error deleting product:", error)
      alert("Error al eliminar el producto")
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md p-8">
            <h1 className="text-2xl font-bold text-foreground mb-6">Inicio de Sesión Admin</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Ingresa contraseña"
                />
              </div>
              <p className="text-xs text-muted-foreground">Contraseña de demostración: admin123</p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Entrar</Button>
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
            <h1 className="text-4xl font-bold text-foreground">Panel de Administración</h1>
            <Button
              onClick={() => {
                setIsAuthenticated(false)
                setPassword("")
              }}
              variant="outline"
            >
              Cerrar Sesión
            </Button>
          </div>

          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-foreground">Productos</h2>
            <Button
              onClick={handleAddProduct}
              className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={loading}
            >
              <Plus className="h-5 w-5" />
              Añadir Producto
            </Button>
          </div>

          {/* Product Form */}
          {showForm && (
            <Card className="mb-8 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">
                  {editingId ? "Editar Producto" : "Añadir Nuevo Producto"}
                </h3>
                <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nombre del Producto</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Categoría</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="dresses">Vestidos</option>
                      <option value="tops">Blusas</option>
                      <option value="bottoms">Pantalones</option>
                      <option value="outerwear">Abrigos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Precio</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Precio Original (Opcional)</label>
                    <input
                      type="number"
                      step="0.01"
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">URL de Imagen</label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="https://url-de-tu-imagen.com/foto.jpg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Descripción</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tallas (separadas por coma)</label>
                    <input
                      type="text"
                      value={formData.sizes.join(", ")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sizes: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="XS, S, M, L, XL"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Colores (separados por coma)</label>
                    <input
                      type="text"
                      value={formData.colors.join(", ")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          colors: e.target.value.split(",").map((c) => c.trim()).filter(Boolean),
                        })
                      }
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Rojo, Azul, Negro"
                    />
                  </div>
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
                    En Stock
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={loading}
                  >
                    {loading ? "Guardando..." : editingId ? "Actualizar Producto" : "Crear Producto"}
                  </Button>
                  <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="flex-1">
                    Cancelar
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Products Table */}
          {loading && <p className="text-center text-muted-foreground">Cargando productos...</p>}

          {!loading && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Producto</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Categoría</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Precio</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Estado</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Acciones</th>
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
                          className={`px-3 py-1 rounded-full text-xs font-medium ${product.inStock ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"
                            }`}
                        >
                          {product.inStock ? "En Stock" : "Agotado"}
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
                              sizes: product.sizes || ["XS", "S", "M", "L", "XL"],
                              colors: product.colors || ["Black", "White"],
                              image: product.image || "/placeholder.svg",
                            })
                            setShowForm(true)
                          }}
                          disabled={loading}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive bg-transparent"
                          onClick={() => handleDeleteProduct(product.id)}
                          disabled={loading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
