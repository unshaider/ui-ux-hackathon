import Image from "next/image";
const BrowseByDressStyle: React.FC = () => {
  return (
    <section className="bg-primary py-8 w-[90%] rounded-3xl mx-auto px-5 md:px-[50px]">
      <div className="mx-auto text-center">
        <h1 className="text-5xl font-bold my-[64px]">BROWSE BY DRESS STYLE</h1>
        <div className="grid grid-cols-12 gap-6">
          {/* Casual Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden col-span-12 md:col-span-4">
            <Image
              src={"/casual.png"}
              alt={"Casual"}
              width={407}
              height={289}
              className="object-cover w-full h-full"
            />
            <div className="absolute flex top-[25px] left-9">
              <span className="text-black text-4xl font-bold">Casual</span>
            </div>
          </div>

          {/* Formal Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden md:col-span-8 col-span-12">
            <Image
              src={"/formal.png"}
              alt="Formal"
              width={684}
              height={289}
              className="object-cover"
            />
            <div className="absolute inset-0 flex top-[25px] left-9">
              <span className="text-black text-4xl font-bold">Formal</span>
            </div>
          </div>

          {/* Party Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden md:col-span-8 col-span-12">
            <Image
              src={"/party.png"}
              alt="Party"
              width={684}
              height={289}
              className="object-cover"
            />
            <div className="absolute inset-0 flex top-[25px] left-9">
              <span className="text-black text-4xl font-bold">Party</span>
            </div>
          </div>

          {/* Gym Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden  md:col-span-4 col-span-12">
            <Image
              src={"/gym.png"}
              alt="Gym"
              width={407}
              height={289}
              className="object-cover"
            />
            <div className="absolute inset-0 flex top-[25px] left-9">
              <span className="text-black text-4xl font-bold">Gym</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
