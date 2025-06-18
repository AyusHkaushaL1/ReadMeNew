import { NextResponse } from "next/server"

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  shape?: string
  description: string
  inStock: boolean
  rating: number
  reviews: number
}

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 45000,
    originalPrice: 50000,
    image: "/placeholder.svg?height=400&width=400",
    category: "rings",
    shape: "round",
    description: "Elegant diamond solitaire ring with 18k gold band",
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const shape = searchParams.get("shape")
    const search = searchParams.get("search")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    let filteredProducts = [...products]

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    // Filter by shape
    if (shape) {
      filteredProducts = filteredProducts.filter((product) => product.shape?.toLowerCase() === shape.toLowerCase())
    }

    // Filter by search term
    if (search) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, price, imageUrl, category, shape, description } = body

    // Validation
    if (!name || !price || !imageUrl) {
      return NextResponse.json({ error: "Name, price, and imageUrl are required" }, { status: 400 })
    }

    // Generate new product
    const newProduct: Product = {
      id: (products.length + 1).toString(),
      name,
      price: Number(price),
      image: imageUrl,
      category: category || "other-jewellery",
      shape,
      description: description || "",
      inStock: true,
      rating: 0,
      reviews: 0,
    }

    // Add to products array (in real app, this would be saved to database)
    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
