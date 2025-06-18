import Header from "./components/Header"
import Hero from "./components/Hero"
import ShopByShape from "./components/ShopByShape"
import ShopByCategory from "./components/ShopByCategory"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ShopByShape />
      <ShopByCategory />
      <Footer />
    </main>
  )
}
