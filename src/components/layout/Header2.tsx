import Link from "next/link";
import { IoCartOutline, IoMenu, IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header2 = () => {
  return (
    <header className="flex justify-around h-24 items-center px-5 md:px-[50px]">
      <div className="block md:hidden">
        <IoMenu className="h-7 w-7" />
      </div>
      <div>
        <Link href={"/"}>
          <h1 className="font-bold text-[32px]">SHOP.CO</h1>
        </Link>
      </div>
      <nav className="hidden md:block items-center gap-6">
        <Link href={"/"} className="mr-6">
          <label htmlFor="Shop">Shop</label>
          <select name="Shop">Shop</select>
        </Link>
        <Link href={"/"} className="mr-6">
          On Sale
        </Link>
        <Link href={"/"} className="mr-6">
          New Arrivals
        </Link>
        <Link href={"/"} className="">
          Brands
        </Link>
      </nav>
      <div className="w-[577px] bg-primary h-12 rounded-full px-4 hidden md:block">
        <div className="flex items-center gap-3">
          <IoSearch className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-primary h-12"
          />
        </div>
      </div>
      <div className="flex gap-2 md:gap-[14px]">
        <IoSearch className="w-6 h-6 block md:hidden" />
        <IoCartOutline className="w-6 h-6" />
        <CgProfile className="w-6 h-6" />
      </div>
    </header>
  );
};

export default Header2;
