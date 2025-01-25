'use client'
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Products } from "./ProductCard";

const NewArrivals = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch('*[_type == "product"][0..3]');
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full py-16 border-b-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-center text-5xl font-bold text-black mb-8">NEW ARRIVALS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-gray-600 hover:text-black hover:bg-main border-2 rounded-full w-[218px] h-[52px]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
