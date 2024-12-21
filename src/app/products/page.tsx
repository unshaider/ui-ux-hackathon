'use client'
import Image from "next/image"
import { useState } from "react"
import { Star, Minus, Plus } from 'lucide-react'

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("brown")
  const [selectedSize, setSelectedSize] = useState("medium")
  const [quantity, setQuantity] = useState(1)

  const colors = [
    { name: "Brown", class: "bg-brown-500" },
    { name: "Black", class: "bg-black" },
    { name: "Navy", class: "bg-navy-500" },
  ]

  const sizes = ["Small", "Medium", "Large", "X-Large"]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section - Images */}
        <div className="md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((index) => (
              <Image
                key={index}
                src={`/image1.png?text=Thumbnail+${index}`}
                alt={`Thumbnail ${index}`}
                width={80}
                height={80}
                className="rounded-md cursor-pointer"
              />
            ))}
          </div>
          <div className="flex-grow">
            <Image
              src="/image2.png?text=Main+Product+Image"
              alt="Main Product Image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right section - Product details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(4.5)</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-bold">$26.0</span>
            <span className="ml-2 text-gray-500 line-through">$30.0</span>
            <span className="ml-2 text-green-500">-20%</span>
          </div>
          <p className="text-gray-600 mb-6">
            This stylish graphic t-shirt is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers both comfort and style.
          </p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Color</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name.toLowerCase()
                      ? "ring-2 ring-offset-2 ring-gray-800"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color.name.toLowerCase())}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size.toLowerCase()
                      ? "bg-gray-800 text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size.toLowerCase())}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                className="px-3 py-1"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

