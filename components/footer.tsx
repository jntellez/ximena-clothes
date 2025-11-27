import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">XIMENA</h3>
            <p className="text-sm opacity-75">Discover premium, sustainable fashion for the modern woman.</p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog?category=dresses" className="hover:underline">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=tops" className="hover:underline">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=bottoms" className="hover:underline">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=outerwear" className="hover:underline">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@ximena.com" className="hover:underline">
                  hello@ximena.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>123 Fashion Ave, NYC 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Ximena Clothes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
