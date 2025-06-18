import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Rings",
    image: "/placeholder.svg?height=300&width=300",
    href: "/products?category=rings",
  },
  {
    name: "Necklaces",
    image: "/placeholder.svg?height=300&width=300",
    href: "/products?category=necklace",
  },
  {
    name: "Earrings",
    image: "/placeholder.svg?height=300&width=300",
    href: "/products?category=earrings",
  },
  {
    name: "Bracelets",
    image: "/placeholder.svg?height=300&width=300",
    href: "/products?category=bracelets-and-bangles",
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
