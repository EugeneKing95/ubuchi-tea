import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-white py-12"
      style={{ borderTop: "1px solid #EADDCF" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              className="font-light text-sm mb-4 tracking-wider"
              style={{ color: "#3B5044" }}
            >
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
                <Link
                  href="/gift-sets"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-light text-sm mb-4 tracking-wider"
              style={{ color: "#3B5044" }}
            >
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/farmers"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
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
                <Link
                  href="/press"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-light text-sm mb-4 tracking-wider"
              style={{ color: "#3B5044" }}
            >
              SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-light text-sm mb-4 tracking-wider"
              style={{ color: "#3B5044" }}
            >
              CONNECT
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/instagram"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/rituals"
                  className="hover:opacity-70 text-sm font-light"
                  style={{ color: "#3B5D44" }}
                >
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
              <div
                className="text-white px-2 py-1 text-xs font-light"
                style={{ backgroundColor: "#C9A063" }}
              >
                VISA
              </div>
              <div
                className="text-white px-2 py-1 text-xs font-light"
                style={{ backgroundColor: "#C9A063" }}
              >
                MC
              </div>
              <div
                className="text-white px-2 py-1 text-xs font-light"
                style={{ backgroundColor: "#C9A063" }}
              >
                AMEX
              </div>
              <div
                className="text-white px-2 py-1 text-xs font-light"
                style={{ backgroundColor: "#C9A063" }}
              >
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
