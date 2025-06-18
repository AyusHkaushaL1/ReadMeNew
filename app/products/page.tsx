import { Suspense } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductGrid from "./components/ProductGrid"
import ProductFilters from "./components/ProductFilters"
import LoadingSkeleton from "./components/LoadingSkeleton"

function ProductsContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-64 flex-shrink-0">
        <Suspense fallback={<div className="bg-white p-6 rounded-lg shadow-md animate-pulse h-96"></div>}>
          <ProductFilters />
        </Suspense>
      </aside>

      <div className="flex-1">
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our exquisite collection of handcrafted jewelry</p>
        </div>

        <ProductsContent />
      </main>
      <Footer />
    </div>
  )
}
