"use client"

import Link from "next/link"
import { Search, User, ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    "RINGS",
    "EARRINGS",
    "NECKLACE",
    "BRACELETS AND BANGLES",
    "PENDANT AND MANGALSUTRA",
    "OTHER JEWELLERY",
  ]

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        10% OFF on Diamonds + 50% OFF on Making Charges.
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-gray-900">Geer</span>
              <span className="text-sm text-gray-500 ml-1">.in</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {category}
                </Link>
              ))}
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                CONTACT
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                ABOUT
              </Link>
              <Link href="/admin" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                ADMIN
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block py-2 text-sm font-medium text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link href="/contact" className="block py-2 text-sm font-medium text-gray-700">
                CONTACT
              </Link>
              <Link href="/about" className="block py-2 text-sm font-medium text-gray-700">
                ABOUT
              </Link>
              <Link href="/admin" className="block py-2 text-sm font-medium text-gray-700">
                ADMIN
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
