import Image from "next/image";

const BrandList = () => {
  return (
    <div className="flex items-center justify-between bg-black py-4 h-[122px] px-5 md:px-[50px]">
      <Image src={"/versace.png"} alt={"VERSACE"} width={166.48} height={33.16} />
      <Image src={"/zara.png"} alt={"ZARA"} width={91} height={37.98} />
      <Image src={"/gucci.png"} alt={"GUCCI"} width={156} height={36} />
      <Image src={"/prada.png"} alt={"PRADA"} width={194} height={32} />
      <Image src={"/calvin.png"} alt={"Calvin Klein"} width={206.79} height={33.35} />
    </div>
  );
};

export default BrandList;