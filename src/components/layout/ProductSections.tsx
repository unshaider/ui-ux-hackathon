import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const NewArrivals = () => {
  const products = [
    {
      image: "/t-shirt.png",
      name: "T-shirt with Tape Details",
      stars: [<FaStar key={"star1"} />, <FaStar key={"star2"} />, <FaStar key={"star3"} />, <FaStar key={"star4"} />, <FaStarHalf key={"star5"} />],
      rating: 4.5,
      price: "$120",
      oldPrice: null,
      discount: null,
    },
    {
      image: "/skinny.png",
      name: "Skinny Fit Jeans",
      stars: [<FaStar key={"star1"} />, <FaStar key={"star2"} />, <FaStar key={"star3"} />, <FaStar key={"star4"} />, <FaStarHalf key={"star5"} />],
      rating: 3.5,
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
    },
    {
      image: "/checkered.png",
      name: "Checkered Shirt",
      stars: [<FaStar key={"star1"} />, <FaStar key={"star2"} />, <FaStar key={"star3"} />, <FaStar key={"star4"} />, <FaStarHalf key={"star5"} />],
      rating: 4.8,
      price: "$180",
      oldPrice: null,
      discount: null,
    },
    {
      image: "/sleeve.png",
      name: "Sleeve Striped T-shirt",
      stars: [<FaStar key={"star1"} />, <FaStar key={"star2"} />, <FaStar key={"star3"} />, <FaStar key={"star4"} />, <FaStarHalf key={"star5"} />],
      rating: 4.5,
      price: "$130",
      oldPrice: "$140",
      discount: "-30%",
    },
  ];

  return (
    <section className="py-10 px-5 md:px-[50px] border-b-2 border-b-gray-400 mb-3">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-black mb-8">
        NEW ARRIVALS
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={296}
              height={444}
              className="w-full h-48  rounded-md mb-4 bg-[#F0EEED]"
            />
            <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <div className="flex gap-[13px] items-center mb-2">
              <div className="text-yellow-500 text-[18px] flex gap-[5px]">
                {product.stars}
              </div>
              <p>{product.rating}<span className="text-gray-600">/5</span></p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-2xl font-bold">
                  {product.oldPrice}
                </span>
              )}
              <div className="rounded-full  text-[#FF3333] bg-[#FFD3D3] px-[14px] py-[6px]">{product.discount}</div>
            </div>
            </div>
            
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-black border-2 px-[54px] py-4 rounded-full">
          View All
        </button>
      </div>
    </section>
  );
};




export default NewArrivals;