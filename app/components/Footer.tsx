import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Geer.in</h3>
            <p className="text-gray-400 text-sm">
              Premium jewelry crafted with precision and elegance for the modern connoisseur.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/products?category=rings" className="hover:text-white">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products?category=necklace" className="hover:text-white">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/products?category=earrings" className="hover:text-white">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="hover:text-white">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care" className="hover:text-white">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Geer.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
