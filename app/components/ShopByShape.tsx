import Link from "next/link"

const shapes = [
  { name: "Round", icon: "●" },
  { name: "Oval", icon: "○" },
  { name: "Cushion", icon: "◆" },
  { name: "Emerald", icon: "▭" },
  { name: "Pear", icon: "◐" },
  { name: "Heart", icon: "♡" },
  { name: "Radiant", icon: "◇" },
  { name: "Princess", icon: "◆" },
  { name: "Marquise", icon: "◊" },
  { name: "Asscher", icon: "◈" },
]

export default function ShopByShape() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">Shop By Shape</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6">
          {shapes.map((shape) => (
            <Link
              key={shape.name}
              href={`/products?shape=${shape.name.toLowerCase()}`}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                <span className="text-2xl text-gray-600">{shape.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{shape.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
