import { NextResponse } from "next/server"
import type { Product } from "../route"

// Mock products array - in a real app, this would be in a database
const products: Product[] = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 45000,
    originalPrice: 50000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
    category: "earrings",
    description:
      "Classic pearl drop earrings with gold accents. Timeless elegance meets modern sophistication in these beautiful freshwater pearl earrings.",
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Gold Chain Necklace",
    price: 28000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center",
    category: "necklace",
    description:
      "Delicate 22k gold chain necklace. A versatile piece that complements any outfit, perfect for layering or wearing alone.",
    inStock: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Emerald Tennis Bracelet",
    price: 65000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
    category: "bracelets-and-bangles",
    shape: "emerald",
    description:
      "Stunning emerald tennis bracelet in white gold. Features premium emerald-cut stones in a secure setting for everyday luxury.",
    inStock: false,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "5",
    name: "Rose Gold Engagement Ring",
    price: 55000,
    image: "https://images.unsplash.com/photo-1603561596112-db1d4d4e4c3a?w=400&h=400&fit=crop&crop=center",
    category: "rings",
    shape: "cushion",
    description:
      "Beautiful cushion cut diamond in rose gold setting. The warm rose gold perfectly complements the brilliant cushion-cut diamond.",
    inStock: true,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "6",
    name: "Sapphire Pendant",
    price: 18000,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center",
    category: "pendant-and-mangalsutra",
    shape: "oval",
    description:
      "Royal blue sapphire pendant with diamond halo. A captivating centerpiece that adds elegance to any neckline.",
    inStock: true,
    rating: 4.5,
    reviews: 78,
  },
  {
    id: "7",
    name: "Diamond Stud Earrings",
    price: 35000,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop&crop=center",
    category: "earrings",
    shape: "round",
    description:
      "Classic diamond stud earrings in platinum. Timeless round brilliant diamonds in secure four-prong settings.",
    inStock: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "8",
    name: "Vintage Gold Bangle",
    price: 22000,
    originalPrice: 25000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center",
    category: "bracelets-and-bangles",
    description:
      "Antique-inspired gold bangle with intricate patterns. Handcrafted details showcase traditional artistry with modern appeal.",
    inStock: true,
    rating: 4.4,
    reviews: 95,
  },
  {
    id: "9",
    name: "Ruby Heart Pendant",
    price: 24000,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&crop=center",
    category: "pendant-and-mangalsutra",
    shape: "heart",
    description:
      "Romantic ruby heart pendant in white gold. Perfect symbol of love with a brilliant red ruby centerpiece.",
    inStock: true,
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "10",
    name: "Platinum Wedding Band",
    price: 38000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
    category: "rings",
    description:
      "Classic platinum wedding band with subtle diamond accents. Timeless design for your special day and beyond.",
    inStock: true,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "11",
    name: "Chandelier Earrings",
    price: 16000,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop&crop=center",
    category: "earrings",
    description:
      "Elegant chandelier earrings with crystal drops. Statement pieces that add glamour to any evening look.",
    inStock: true,
    rating: 4.5,
    reviews: 76,
  },
  {
    id: "12",
    name: "Multi-Strand Pearl Necklace",
    price: 32000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
    category: "necklace",
    description:
      "Luxurious multi-strand pearl necklace. Three strands of lustrous pearls create a sophisticated layered look.",
    inStock: true,
    rating: 4.6,
    reviews: 134,
  },
  {
    id: "13",
    name: "Amethyst Cocktail Ring",
    price: 19000,
    image: "https://images.unsplash.com/photo-1603561596112-db1d4d4e4c3a?w=400&h=400&fit=crop&crop=center",
    category: "rings",
    shape: "oval",
    description:
      "Bold amethyst cocktail ring in yellow gold. Large oval amethyst surrounded by diamond accents for maximum impact.",
    inStock: true,
    rating: 4.4,
    reviews: 58,
  },
  {
    id: "14",
    name: "Diamond Tennis Necklace",
    price: 85000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center",
    category: "necklace",
    description:
      "Spectacular diamond tennis necklace in white gold. Continuous line of brilliant diamonds for ultimate luxury.",
    inStock: true,
    rating: 4.9,
    reviews: 45,
  },
  {
    id: "15",
    name: "Turquoise Statement Earrings",
    price: 14000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
    category: "earrings",
    description:
      "Vibrant turquoise statement earrings in silver. Bold color and unique design make these perfect conversation starters.",
    inStock: true,
    rating: 4.3,
    reviews: 92,
  },
  {
    id: "16",
    name: "Infinity Symbol Bracelet",
    price: 26000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center",
    category: "bracelets-and-bangles",
    description:
      "Elegant infinity symbol bracelet with diamonds. Symbolic design representing eternal love and friendship.",
    inStock: true,
    rating: 4.7,
    reviews: 118,
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
