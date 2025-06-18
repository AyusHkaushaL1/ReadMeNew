"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductForm from "./components/ProductForm"
import ProductTable from "./components/ProductTable"
import type { Product } from "../api/products/route"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?limit=100")
      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleProductCreated = (newProduct: Product) => {
    setProducts([newProduct, ...products])
    setShowForm(false)
  }

  const handleProductUpdated = (updatedProduct: Product) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))
    setEditingProduct(null)
    setShowForm(false)
  }

  const handleProductDeleted = (productId: string) => {
    setProducts(products.filter((p) => p.id !== productId))
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleCancelEdit = () => {
    setEditingProduct(null)
    setShowForm(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">Product Management</h1>
              <p className="text-gray-600">Manage your jewelry inventory</p>
            </div>
            <Button onClick={() => setShowForm(true)} className="bg-black hover:bg-gray-800 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {showForm && (
          <div className="mb-8">
            <ProductForm
              product={editingProduct}
              onProductCreated={handleProductCreated}
              onProductUpdated={handleProductUpdated}
              onCancel={handleCancelEdit}
            />
          </div>
        )}

        <ProductTable products={products} onEdit={handleEdit} onDelete={handleProductDeleted} />
      </main>
      <Footer />
    </div>
  )
}
