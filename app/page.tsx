import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { categories, products } from "@/lib/mock-data"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl">Elegancia Redefinida</h1>
                  <p className="text-lg text-muted-foreground">
                    Descubre nuestra colección curada de piezas atemporales diseñadas para la mujer moderna y
                    sofisticada.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/catalog">
                    <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-base">
                      Comprar Ahora
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="px-6 py-3 text-base bg-transparent">
                      Aprender Más
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <img
                  src="/luxury-fashion-woman-elegant-pose.jpg"
                  alt="Hero"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">Compra por Categoría</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.id} href={`/catalog?category=${category.slug}`}>
                  <Card className="group overflow-hidden cursor-pointer transition-all hover:shadow-lg">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <h3 className="font-semibold text-foreground">{category.name}</h3>
                      <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">Colección Destacada</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/catalog">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
                  Ver Todos los Productos
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16 md:py-24 text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center space-y-6">
            <h2 className="text-4xl font-bold md:text-5xl">Únete a Nuestra Comunidad</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Suscríbete para recibir ofertas exclusivas, nuevas llegadas y consejos de estilo de nuestros expertos en
              moda.
            </p>
            <div className="flex justify-center gap-3">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="rounded-lg bg-secondary-foreground/10 px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Suscribir</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
