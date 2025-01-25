import { BsEnvelope } from "react-icons/bs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsLetterSection = () => {
  return (
    <section className="relative bottom-20 mx-auto">
      {/* Newsletter Section */}
      <div className="bg-black text-white mt-12 rounded-xl flex flex-col sm:flex-row justify-between items-center px-16 py-9">
        <h1 className="text-[32px] sm:text-[40px] font-bold w-[297px] lg:w-[551px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="mt-5 sm:mt-0">
          <div className="relative w-[311px] sm:w-[349px]">
            <BsEnvelope className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <Input
              type="email"
              placeholder="Enter your email address"
              className="pl-12 rounded-full bg-white h-12 text-black"
            />
          </div>

          <br />
          <Button
            type="submit"
            className="bg-white text-black h-12 font-semibold rounded-full hover:bg-gray-200 w-[311px] sm:w-[349px]"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
