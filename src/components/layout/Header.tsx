import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <header className="bg-black flex justify-center h-[38px] text-xs items-center text-white w-full ">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <span className="font-bold underline">Sign Up Now</span>
      </p>
      <RxCross2 className="absolute right-[100px] h-5 w-5 hidden md:block" />
    </header>
  );
};

export default Header;
