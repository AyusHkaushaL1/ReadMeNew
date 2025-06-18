import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-yellow-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Exquisite
              <br />
              <span className="text-pink-600">Jewelry</span>
              <br />
              Collection
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Discover our handcrafted jewelry pieces that blend traditional artistry with contemporary elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
                  Shop Now
                </Button>
              </Link>
              <Link href="/collections">
                <Button variant="outline" size="lg" className="border-gray-300 px-8">
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <div className="relative h-full w-full">
              <Image
                src="https://sjc.microlink.io/LAXCuPdPF-EE7Y3JRHPTVMnN9rhvM3Zwe4BWCCJA7lLoxK_z3jucpttMYSLe1ui8SDjByMN9oCnbHOaTlCqMGQ.jpeg"
                alt="Elegant woman wearing jewelry"
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
