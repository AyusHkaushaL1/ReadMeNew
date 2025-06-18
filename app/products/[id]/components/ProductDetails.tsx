"use client"

import Image from "next/image"
import { useState } from "react"
import { Star, Heart, Share2, ShoppingBag } from "lucide-react"
import type { Product } from "../../../api/products/route"
import { Button } from "@/components/ui/button"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const images = [product.image, product.image, product.image] // Mock multiple images

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image src={images[selectedImage] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-black" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium text-gray-900">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1 bg-black hover:bg-gray-800 text-white" disabled={!product.inStock}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Product Details</h3>
            <dl className="space-y-2">
              <div className="flex">
                <dt className="font-medium text-gray-600 w-24">Category:</dt>
                <dd className="text-gray-900 capitalize">{product.category.replace("-", " ")}</dd>
              </div>
              {product.shape && (
                <div className="flex">
                  <dt className="font-medium text-gray-600 w-24">Shape:</dt>
                  <dd className="text-gray-900 capitalize">{product.shape}</dd>
                </div>
              )}
              <div className="flex">
                <dt className="font-medium text-gray-600 w-24">Stock:</dt>
                <dd className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
