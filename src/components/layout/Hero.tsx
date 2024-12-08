import Image from "next/image"

const Hero = () => {
  return (
    <section className="px-5 md:px-[50px] h-[663px] relative flex items-center justify-between bg-main p-8">
      {/* Text Section */}
      <div className="max-w-[545px]">
        <h1 className="text-[54px] font-bold text-black mb-4">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-gray-700 mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className='rounded-full bg-black text-white px-[54px] py-4 hover:bg-gray-800'>Shop Now</button>
      </div>

      {/* Image Section */}
      <div className="w-1/2">
      <Image src={"/hero-section.png"} alt={"Stylish clothing"} width={500} height={500} className="w-full object-cover" />
      </div>
    </section>
  )
}

export default Hero
