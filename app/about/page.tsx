import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">Acerca de Ximena</h1>
            <p className="mt-4 text-xl opacity-90">Redefiniendo la moda con elegancia, sostenibilidad y artesanía</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Nuestra Historia</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ximena Ropa nació de una pasión por el diseño atemporal y un compromiso con la calidad. Fundada en
                  2020, creemos que toda mujer merece acceso a piezas bellamente elaboradas que la hagan sentir confiada
                  y empoderada.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestra misión es crear un futuro más sostenible para la moda mientras mantenemos los más altos
                  estándares de artesanía e innovación en el diseño.
                </p>
              </div>
              <img
                src="/fashion-atelier-workspace-creative.jpg"
                alt="Nuestro Estudio"
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Nuestros Valores</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Calidad", desc: "Materiales premium y artesanía meticulosa en cada pieza" },
                { title: "Sostenibilidad", desc: "Producción ética y prácticas ambientalmente conscientes" },
                { title: "Empoderamiento", desc: "Creando piezas que inspiren confianza y autoexpresión" },
              ].map((value, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">¿Listo para Explorar?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra colección completa de piezas curadas diseñadas para la mujer moderna.
            </p>
            <Link href="/catalog">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
                Comprar Ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
