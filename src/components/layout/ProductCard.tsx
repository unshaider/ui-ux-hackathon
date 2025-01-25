import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export interface Products {
  _id: string;
  name: string;
  description: string;
  category: string;
  discountPercent: number;
  price: number;
  imageUrl: string;
  isNew: boolean;
  colors: string[];
  sizes: string[];
}


export async function getProducts() {
  const products: Products = await client.fetch(`
   *[_type=="product"]{
  _id,
  name,
  description,
  price,
  "imageUrl" : image.asset->url,
  category,
  discountPercent,
  isNew,
  colors,
  sizes
}
    `);
  return NextResponse.json(products);
}
getProducts()

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="space-y-2">
      <div className="relative bg-main rounded-lg overflow-hidden h-[298px] flex items-center justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={296}
          height={444}
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
      {/* <div className="flex items-center gap-2">
        <RatingStars rating={product.rating} />
        <p>
          {product.reviews}
          <span className="text-gray-600">/5</span>
        </p>
      </div> */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl">${product.price}</span>
        {product.price && (
          <span className="text-gray-500 line-through font-bold text-2xl">
            ${product.price}
          </span>
        )}
        {product.discountPercent && (
          <span className="rounded-full bg-main2 px-5 py-1 text-sm text-red-600">
            -{product.discountPercent}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard