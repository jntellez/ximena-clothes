import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">Get in Touch</h1>
            <p className="mt-4 text-xl opacity-90">We'd love to hear from you. Reach out to us anytime.</p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "hello@ximena.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+1 (555) 123-4567",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  info: "123 Fashion Ave, NYC 10001",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <Card key={i} className="p-6 text-center space-y-4">
                    <Icon className="h-8 w-8 text-accent mx-auto" />
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.info}</p>
                  </Card>
                )
              })}
            </div>

            {/* Contact Form */}
            <Card className="max-w-2xl mx-auto p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
