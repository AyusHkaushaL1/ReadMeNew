"use client"

import type React from "react"

import { useState } from "react"
import type { Product } from "../../api/products/route"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductFormProps {
  product?: Product | null
  onProductCreated: (product: Product) => void
  onProductUpdated: (product: Product) => void
  onCancel: () => void
}

export default function ProductForm({ product, onProductCreated, onProductUpdated, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    price: product?.price?.toString() || "",
    imageUrl: product?.image || "",
    category: product?.category || "rings",
    shape: product?.shape || "",
    description: product?.description || "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const categories = [
    { value: "rings", label: "Rings" },
    { value: "earrings", label: "Earrings" },
    { value: "necklace", label: "Necklaces" },
    { value: "bracelets-and-bangles", label: "Bracelets & Bangles" },
    { value: "pendant-and-mangalsutra", label: "Pendants & Mangalsutra" },
    { value: "other-jewellery", label: "Other Jewellery" },
  ]

  const shapes = [
    { value: "", label: "No specific shape" },
    { value: "round", label: "Round" },
    { value: "oval", label: "Oval" },
    { value: "cushion", label: "Cushion" },
    { value: "emerald", label: "Emerald" },
    { value: "pear", label: "Pear" },
    { value: "heart", label: "Heart" },
    { value: "radiant", label: "Radiant" },
    { value: "princess", label: "Princess" },
    { value: "marquise", label: "Marquise" },
    { value: "asscher", label: "Asscher" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const url = product ? `/api/products/${product.id}` : "/api/products"
      const method = product ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          price: Number(formData.price),
          imageUrl: formData.imageUrl,
          category: formData.category,
          shape: formData.shape || undefined,
          description: formData.description,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to save product")
      }

      const savedProduct = await response.json()

      if (product) {
        onProductUpdated(savedProduct)
      } else {
        onProductCreated(savedProduct)
      }

      // Reset form
      setFormData({
        name: "",
        price: "",
        imageUrl: "",
        category: "rings",
        shape: "",
        description: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product ? "Edit Product" : "Add New Product"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹) *
              </label>
              <Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="1"
                placeholder="Enter price"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="shape" className="block text-sm font-medium text-gray-700 mb-1">
                Shape (Optional)
              </label>
              <select
                id="shape"
                name="shape"
                value={formData.shape}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {shapes.map((shape) => (
                  <option key={shape.value} value={shape.value}>
                    {shape.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL *
            </label>
            <Input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter product description"
            />
          </div>

          <div className="flex space-x-4">
            <Button type="submit" disabled={loading} className="bg-black hover:bg-gray-800 text-white">
              {loading ? "Saving..." : product ? "Update Product" : "Add Product"}
            </Button>
            <Button type="button" onClick={onCancel} variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
