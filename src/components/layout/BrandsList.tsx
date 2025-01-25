import Image from "next/image";

interface IBrands {
  name: string;
  img: string;
  width: number;
  height: number;
}

const brands: IBrands[] = [
  { name: "VERSACE", img: "/versace.png", width: 166, height: 33 },
  { name: "ZARA", img: "/zara.png", width: 91, height: 38 },
  { name: "GUCCI", img: "/gucci.png", width: 156, height: 36 },
  { name: "PRADA", img: "/prada.png", width: 194, height: 32 },
  { name: "Calvin Klein", img: "/calvin.png", width: 206, height: 33 },
];

const BrandShowcase = () => {
  return (
    <div className="w-full bg-black text-white py-6">
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center">
          {brands.map((brand) => (
            <div key={brand.name} className={`${brand.width} text-center`}>
              <Image
                src={brand.img}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className={`${brand.width} text-center`}>
              <Image
                src={brand.img}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
