import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import heroSection from "@/components/heroSection"
import HeroSection from "@/components/HeroSection"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EADDCF" }}>
      {/* Top Banner */}
      <div className="text-white text-center py-2 text-sm" style={{ backgroundColor: "#3B5044" }}>
        Free shipping on orders over $75
        <button className="ml-4 opacity-70 hover:opacity-100">×</button>
      </div>

      {/* Header Navigation */}
      <header className="bg-white border-b" style={{ borderColor: "#EADDCF" }}>
        <Navbar />
      </header>

      {/* Hero Section - Split Screen */}
      <section >
        <HeroSection />
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden rounded-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Harmony Blend"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-sm mb-1" style={{ color: "#3B5044" }}>
                Harmony Blend
              </h3>
              <p className="text-sm" style={{ color: "#C47C55" }}>
                $28.00
              </p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden rounded-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Vitality Boost"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-sm mb-1" style={{ color: "#3B5044" }}>
                Vitality Boost
              </h3>
              <p className="text-sm" style={{ color: "#C47C55" }}>
                $32.00
              </p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden rounded-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dreamtime Ritual"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-sm mb-1" style={{ color: "#3B5044" }}>
                Dreamtime Ritual
              </h3>
              <p className="text-sm" style={{ color: "#C47C55" }}>
                $26.00
              </p>
            </div>

            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden rounded-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ritual Collection"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-light text-sm mb-1" style={{ color: "#3B5044" }}>
                Ritual Collection
              </h3>
              <p className="text-sm" style={{ color: "#C47C55" }}>
                $78.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero - Full Width */}
      <section className="relative h-96 mb-16">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Our farmers" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(59, 80, 68, 0.3)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-6">
            <h2
              className="text-3xl md:text-4xl font-light mb-4 tracking-wide"
              style={{ fontFamily: "serif", color: "#FFF942" }}
            >
              Ubuntu + Chi
            </h2>
            <p className="text-lg font-light mb-6 opacity-90">
              Tea cultivated by women, for wellness that connects us all
            </p>
            <Button
              variant="outline"
              className="px-8 py-3 text-sm font-light tracking-wider border-2 hover:opacity-90 transition-opacity bg-transparent"
              style={{
                backgroundColor: "transparent",
                borderColor: "#FFF942",
                color: "#FFF942",
              }}
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16" style={{ backgroundColor: "#3B5D44" }}>
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-light mb-4 tracking-wide"
            style={{ fontFamily: "serif", color: "#FFF942" }}
          >
            Join the Ritual
          </h2>
          <p className="mb-8 max-w-md mx-auto font-light" style={{ color: "#EADDCF" }}>
            Receive early access to new collections and wellness insights
          </p>
          <div className="max-w-sm mx-auto flex">
            <Input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-none border-0"
              style={{ backgroundColor: "#EADDCF", color: "#3B5044" }}
            />
            <Button
              className="px-6 rounded-none font-light tracking-wider hover:opacity-90"
              style={{ backgroundColor: "#C9A063", color: "white" }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12" style={{ borderTop: "1px solid #EADDCF" }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-light text-sm mb-4 tracking-wider" style={{ color: "#3B5044" }}>
                SHOP
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/new-arrivals"
                    className="hover:opacity-70 text-sm font-light"
                    style={{ color: "#3B5D44" }}
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bestsellers"
                    className="hover:opacity-70 text-sm font-light"
                    style={{ color: "#3B5D44" }}
                  >
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="hover:opacity-70 text-sm font-light"
                    style={{ color: "#3B5D44" }}
                  >
                    All Collections
                  </Link>
                </li>
                <li>
                  <Link href="/gift-sets" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-light text-sm mb-4 tracking-wider" style={{ color: "#3B5044" }}>
                COMPANY
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/farmers" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Our Farmers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:opacity-70 text-sm font-light"
                    style={{ color: "#3B5D44" }}
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-light text-sm mb-4 tracking-wider" style={{ color: "#3B5044" }}>
                SUPPORT
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-light text-sm mb-4 tracking-wider" style={{ color: "#3B5044" }}>
                CONNECT
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/instagram" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/rituals" className="hover:opacity-70 text-sm font-light" style={{ color: "#3B5D44" }}>
                    Tea Rituals
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center"
            style={{ borderTop: "1px solid #EADDCF" }}
          >
            <p className="text-xs font-light" style={{ color: "#3B5D44" }}>
              © 2024 Ūbūchi. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs font-light" style={{ color: "#3B5D44" }}>
                We accept:
              </span>
              <div className="flex space-x-2">
                <div className="text-white px-2 py-1 text-xs font-light" style={{ backgroundColor: "#C9A063" }}>
                  VISA
                </div>
                <div className="text-white px-2 py-1 text-xs font-light" style={{ backgroundColor: "#C9A063" }}>
                  MC
                </div>
                <div className="text-white px-2 py-1 text-xs font-light" style={{ backgroundColor: "#C9A063" }}>
                  AMEX
                </div>
                <div className="text-white px-2 py-1 text-xs font-light" style={{ backgroundColor: "#C9A063" }}>
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
