import { BsEnvelope } from "react-icons/bs";

const NewsLetterSection = () => {
  return (
    <section className="relative bottom-20">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-6 mt-12 rounded-xl flex flex-col md:flex-row justify-between items-center px-14">
        <h1 className="text-[40px] text-center font-bold w-[297px] md:w-[551px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div>
          <div className="bg-white h-12 rounded-full px-4 mx-auto">
            <div className="flex items-center gap-3">
              <BsEnvelope className="w-6 h-6 text-black" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-whitw h-12"
              />
            </div>
          </div>

          <br />
          <button className="bg-white text-black h-12 w-[270px] md:w-[349px] font-semibold rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
