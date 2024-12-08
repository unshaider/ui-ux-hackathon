import Image from "next/image";
const BrowseByDressStyle: React.FC = () => {
  return (
    <section className="bg-primary py-8 px-4 w-[90%] h-[866px] rounded-3xl mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold my-[64px]">BROWSE BY DRESS STYLE</h1>
        <div className="grid grid-cols-12 gap-6">
          {/* Casual Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-[289px] col-span-4">
            <Image
              src={"/casual.png"}
              alt={"Casual"}
              width={407}
              height={289}
              className="object-cover h-full"
            />
            <div className="absolute flex top-[25px] left-9">
              <span className="text-black text-4xl font-bold">Casual</span>
            </div>
          </div>

          {/* Formal Card */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-[289px] col-span-8">
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
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-[289px] col-span-8">
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
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-[289px] col-span-4">
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
