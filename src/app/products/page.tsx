'use client'
// import Image from "next/image"
// import { useState } from "react"
// import { Star, Minus, Plus } from 'lucide-react'

// const ProductDetail = () => {
//   const [selectedColor, setSelectedColor] = useState("brown")
//   const [selectedSize, setSelectedSize] = useState("medium")
//   const [quantity, setQuantity] = useState(1)

//   const colors = [
//     { name: "Brown", class: "bg-brown-500" },
//     { name: "Black", class: "bg-black" },
//     { name: "Navy", class: "bg-navy-500" },
//   ]

//   const sizes = ["Small", "Medium", "Large", "X-Large"]

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left section - Images */}
//         <div className="md:w-1/2 flex gap-4">
//           <div className="flex flex-col gap-4">
//             {[1, 2, 3].map((index) => (
//               <Image
//                 key={index}
//                 src={`/image1.png?text=Thumbnail+${index}`}
//                 alt={`Thumbnail ${index}`}
//                 width={80}
//                 height={80}
//                 className="rounded-md cursor-pointer"
//               />
//             ))}
//           </div>
//           <div className="flex-grow">
//             <Image
//               src="/image2.png?text=Main+Product+Image"
//               alt="Main Product Image"
//               width={400}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Right section - Product details */}
//         <div className="md:w-1/2">
//           <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
//           <div className="flex items-center mb-4">
//             {[...Array(5)].map((_, index) => (
//               <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
//             ))}
//             <span className="ml-2 text-gray-600">(4.5)</span>
//           </div>
//           <div className="mb-4">
//             <span className="text-2xl font-bold">$26.0</span>
//             <span className="ml-2 text-gray-500 line-through">$30.0</span>
//             <span className="ml-2 text-green-500">-20%</span>
//           </div>
//           <p className="text-gray-600 mb-6">
//             This stylish graphic t-shirt is perfect for any occasion. Crafted from a soft and
//             breathable fabric, it offers both comfort and style.
//           </p>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Select Color</h3>
//             <div className="flex gap-2">
//               {colors.map((color) => (
//                 <button
//                   key={color.name}
//                   className={`w-8 h-8 rounded-full ${color.class} ${
//                     selectedColor === color.name.toLowerCase()
//                       ? "ring-2 ring-offset-2 ring-gray-800"
//                       : ""
//                   }`}
//                   onClick={() => setSelectedColor(color.name.toLowerCase())}
//                   aria-label={`Select ${color.name} color`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   className={`px-3 py-1 border rounded ${
//                     selectedSize === size.toLowerCase()
//                       ? "bg-gray-800 text-white"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => setSelectedSize(size.toLowerCase())}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center border rounded">
//               <button
//                 className="px-3 py-1"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 aria-label="Decrease quantity"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-3 py-1">{quantity}</span>
//               <button
//                 className="px-3 py-1"
//                 onClick={() => setQuantity(quantity + 1)}
//                 aria-label="Increase quantity"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
//             <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetail




import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

// Types
interface ProductColor {
  name: string;
  code: string;
};

interface Product  {
  id: string;
  name: string;
  price: number;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  description: string;
  rating: number;
  reviews: number;
};

// This would typically come from your data source
const SAMPLE_PRODUCT: Product = {
  id: "girls-graphic-tshirt",
  name: "Girls Life Graphic T-Shirt",
  price: 29.99,
  colors: [
    { name: "Brown", code: "#8B4513" },
    { name: "Black", code: "#000000" },
    { name: "Gray", code: "#808080" }
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "/image1.png",
    "/image2.png",
    "/image3.png"
  ],
  description: "Comfortable cotton blend graphic t-shirt with modern design.",
  rating: 4.5,
  reviews: 128
};

const RelatedProducts = [
  { id: "1", name: "Blue Polo Shirt", price: "$45.99", image: "/api/placeholder/200/250" },
  { id: "2", name: "Pink Blouse", price: "$39.99", image: "/api/placeholder/200/250" },
  { id: "3", name: "Brown Shirt", price: "$49.99", image: "/api/placeholder/200/250" },
  { id: "4", name: "Black Dress", price: "$79.99", image: "/api/placeholder/200/250" }
];

interface ProductPageProps {
  params: {
    id: string;
  };
};

// This component would go in app/product/[id]/page.tsx
const ProductPage = ({ params }: ProductPageProps) => {
  const [selectedColor, setSelectedColor] = React.useState<string>(SAMPLE_PRODUCT.colors[0].code);
  const [selectedSize, setSelectedSize] = React.useState<string>(SAMPLE_PRODUCT.sizes[0]);
  const [mainImage, setMainImage] = React.useState<string>(SAMPLE_PRODUCT.images[0]);
  
  // In a real app, you'd fetch the product data using the ID
  // const productId = params.id;
  
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <img
              src={mainImage}
              alt={SAMPLE_PRODUCT.name}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {SAMPLE_PRODUCT.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${SAMPLE_PRODUCT.name} view ${index + 1}`}
                  className="w-full cursor-pointer rounded-md hover:opacity-75"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{SAMPLE_PRODUCT.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(SAMPLE_PRODUCT.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span>({SAMPLE_PRODUCT.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-bold">${SAMPLE_PRODUCT.price}</p>

            {/* Colors */}
            <div>
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex gap-2">
                {SAMPLE_PRODUCT.colors.map((color) => (
                  <button
                    key={color.code}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.code
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(color.code)}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex gap-2">
                {SAMPLE_PRODUCT.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RelatedProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto mb-4"
                  />
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-lg font-bold">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;