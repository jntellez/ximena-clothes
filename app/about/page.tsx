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
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">About Ximena</h1>
            <p className="mt-4 text-xl opacity-90">
              Redefining fashion with elegance, sustainability, and craftsmanship
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ximena Clothes was born from a passion for timeless design and a commitment to quality. Founded in
                  2020, we believe that every woman deserves access to beautifully crafted pieces that make her feel
                  confident and empowered.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to create a more sustainable future for fashion while maintaining the highest standards
                  of craftsmanship and design innovation.
                </p>
              </div>
              <img src="/fashion-atelier-workspace-creative.jpg" alt="Our Studio" className="rounded-lg object-cover w-full h-96" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Quality", desc: "Premium materials and meticulous craftsmanship in every piece" },
                { title: "Sustainability", desc: "Ethical production and environmentally conscious practices" },
                { title: "Empowerment", desc: "Creating pieces that inspire confidence and self-expression" },
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
            <h2 className="text-4xl font-bold text-foreground">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our full collection of curated pieces designed for the modern woman.
            </p>
            <Link href="/catalog">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
