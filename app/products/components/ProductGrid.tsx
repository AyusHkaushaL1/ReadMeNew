"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "./ProductCard"
import type { Product } from "../../api/products/route"
import { Button } from "@/components/ui/button"

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  })

  const searchParams = useSearchParams()

  useEffect(() => {
    fetchProducts()
  }, [searchParams])

  const fetchProducts = async (page = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams(searchParams.toString())
      params.set("page", page.toString())
      params.set("limit", "12")

      const response = await fetch(`/api/products?${params}`)
      const data = await response.json()

      if (page === 1) {
        setProducts(data.products)
      } else {
        setProducts((prev) => [...prev, ...data.products])
      }
      setPagination(data.pagination)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (pagination.page < pagination.totalPages) {
      fetchProducts(pagination.page + 1)
    }
  }

  if (loading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing {products.length} of {pagination.total} products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {pagination.page < pagination.totalPages && (
        <div className="text-center">
          <Button onClick={loadMore} disabled={loading} variant="outline" size="lg">
            {loading ? "Loading..." : "Load More Products"}
          </Button>
        </div>
      )}
    </div>
  )
}
