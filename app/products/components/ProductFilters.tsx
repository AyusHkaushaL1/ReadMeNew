"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")

  const categories = [
    { value: "", label: "All Categories" },
    { value: "rings", label: "Rings" },
    { value: "earrings", label: "Earrings" },
    { value: "necklace", label: "Necklaces" },
    { value: "bracelets-and-bangles", label: "Bracelets & Bangles" },
    { value: "pendant-and-mangalsutra", label: "Pendants & Mangalsutra" },
  ]

  const shapes = [
    { value: "", label: "All Shapes" },
    { value: "round", label: "Round" },
    { value: "oval", label: "Oval" },
    { value: "cushion", label: "Cushion" },
    { value: "emerald", label: "Emerald" },
    { value: "pear", label: "Pear" },
    { value: "heart", label: "Heart" },
  ]

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete("page") // Reset to first page when filtering
    router.push(`/products?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilter("search", searchTerm)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

      {/* Search */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => updateFilter("category", category.value)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                searchParams.get("category") === category.value
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Shapes */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Shape</h4>
        <div className="space-y-2">
          {shapes.map((shape) => (
            <button
              key={shape.value}
              onClick={() => updateFilter("shape", shape.value)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                searchParams.get("shape") === shape.value ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {shape.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button onClick={() => router.push("/products")} variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )
}
