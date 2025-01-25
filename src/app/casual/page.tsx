"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
}

interface ColorOption {
  id: string;
  color: string;
  className: string;
}

const colorOptions: ColorOption[] = [
  { id: "blue", color: "Blue", className: "bg-blue-500" },
  { id: "red", color: "Red", className: "bg-red-500" },
  { id: "green", color: "Green", className: "bg-green-500" },
  { id: "yellow", color: "Yellow", className: "bg-yellow-500" },
  { id: "purple", color: "Purple", className: "bg-purple-500" },
  { id: "orange", color: "Orange", className: "bg-orange-500" },
];

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductGrid = () => {
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  return (
    <section>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Casual</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 p-6">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Price Filter */}
            <div>
              <h3 className="font-semibold mb-4">Price</h3>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors Filter */}
            <div>
              <h3 className="font-semibold mb-4">Colors</h3>
              <div className="grid grid-cols-6 gap-2">
                {colorOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`w-6 h-6 rounded-full cursor-pointer ${option.className}`}
                    role="button"
                    aria-label={`Select ${option.color}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-semibold mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizeOptions.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div>
              <h3 className="font-semibold mb-4">Dress Style</h3>
              <div className="space-y-2">
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox id={style.toLowerCase()} />
                    <label htmlFor={style.toLowerCase()}>{style}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Product Card */}
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <div key={product} className="group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <img
                    src="/api/placeholder/400/400"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">(123)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">$45.00</span>
                    <span className="text-sm text-gray-500 line-through">
                      $60.00
                    </span>
                    <span className="text-sm text-green-600">-25%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
