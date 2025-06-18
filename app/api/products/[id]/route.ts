import { NextResponse } from "next/server"
import type { Product } from "../route"

// Mock products array - in a real app, this would be in a database
const products: Product[] = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 45000,
    originalPrice: 50000,
    image: "/placeholder.svg?height=400&width=400",
    category: "rings",
    shape: "round",
    description:
      "Elegant diamond solitaire ring with 18k gold band. This stunning piece features a brilliant cut diamond set in a classic prong setting, perfect for engagements or special occasions.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Pearl Drop Earrings",
    price: 12000,
    image: "/placeholder.svg?height=400&width=400",
    category: "earrings",
    description: "Classic pearl drop earrings with gold accents",
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Gold Chain Necklace",
    price: 28000,
    originalPrice: 32000,
    image: "/placeholder.svg?height=400&width=400",
    category: "necklace",
    description: "Delicate 22k gold chain necklace",
    inStock: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Emerald Tennis Bracelet",
    price: 65000,
    image: "/placeholder.svg?height=400&width=400",
    category: "bracelets-and-bangles",
    shape: "emerald",
    description: "Stunning emerald tennis bracelet in white gold",
    inStock: false,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "5",
    name: "Rose Gold Engagement Ring",
    price: 55000,
    image: "/placeholder.svg?height=400&width=400",
    category: "rings",
    shape: "cushion",
    description: "Beautiful cushion cut diamond in rose gold setting",
    inStock: true,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "6",
    name: "Sapphire Pendant",
    price: 18000,
    image: "/placeholder.svg?height=400&width=400",
    category: "pendant-and-mangalsutra",
    shape: "oval",
    description: "Royal blue sapphire pendant with diamond halo",
    inStock: true,
    rating: 4.5,
    reviews: 78,
  },
  {
    id: "7",
    name: "Diamond Stud Earrings",
    price: 35000,
    image: "/placeholder.svg?height=400&width=400",
    category: "earrings",
    shape: "round",
    description: "Classic diamond stud earrings in platinum",
    inStock: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "8",
    name: "Vintage Gold Bangle",
    price: 22000,
    originalPrice: 25000,
    image: "/placeholder.svg?height=400&width=400",
    category: "bracelets-and-bangles",
    description: "Antique-inspired gold bangle with intricate patterns",
    inStock: true,
    rating: 4.4,
    reviews: 95,
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const product = products.find((p) => p.id === params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const productIndex = products.findIndex((p) => p.id === params.id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Remove product from array
    const deletedProduct = products.splice(productIndex, 1)[0]

    return NextResponse.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const productIndex = products.findIndex((p) => p.id === params.id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Update product
    products[productIndex] = {
      ...products[productIndex],
      ...body,
      id: params.id, // Ensure ID doesn't change
    }

    return NextResponse.json(products[productIndex])
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}
