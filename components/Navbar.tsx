import Link from "next/link"
import { TeaLeafLogo } from "@/components/tea-leaf-logo"
import { Search, ShoppingBag, User } from "lucide-react"

export default function Navbar() {
  return (
    <div className="container mx-auto px-6 py-4">
      <nav className="flex items-center justify-between">
        <TeaLeafLogo />

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/new-arrivals"
            className="hover:opacity-70 text-sm font-light tracking-wide"
            style={{ color: "#3B5D44" }}
          >
            New Arrivals
          </Link>
          <Link
            href="/bestsellers"
            className="hover:opacity-70 text-sm font-light tracking-wide"
            style={{ color: "#3B5D44" }}
          >
            Bestsellers
          </Link>
          <Link
            href="/shop"
            className="hover:opacity-70 text-sm font-light tracking-wide"
            style={{ color: "#3B5D44" }}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:opacity-70 text-sm font-light tracking-wide"
            style={{ color: "#3B5D44" }}
          >
            About the Brand
          </Link>
          <Link
            href="/rituals"
            className="hover:opacity-70 text-sm font-light tracking-wide"
            style={{ color: "#3B5D44" }}
          >
            The Rituals
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs hidden sm:block" style={{ color: "#3B5D44" }}>
            United States Dollar (USD $)
          </span>
          <Search className="h-4 w-4 cursor-pointer hover:opacity-70" style={{ color: "#3B5D44" }} />
          <User className="h-4 w-4 cursor-pointer hover:opacity-70" style={{ color: "#3B5D44" }} />
          <div className="flex items-center space-x-1 cursor-pointer hover:opacity-70">
            <ShoppingBag className="h-4 w-4" style={{ color: "#3B5D44" }} />
            <span className="text-xs" style={{ color: "#3B5D44" }}>
              (0)
            </span>
          </div>
        </div>
      </nav>
    </div>

  )
}
