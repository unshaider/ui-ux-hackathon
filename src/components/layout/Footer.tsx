import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";

const Footer = () => {
  return (
    <footer className="bg-main px-5 md:px-[50px] h-[499px]">
      <NewsLetterSection />

      <div className="mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <h1 className="font-bold text-[33px]">SHOP.CO</h1>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 mt-9">
            <div className="text-black bg-white rounded-full border border-black p-2">
              <FaTwitter className="h-6 w-6" />
            </div>
            <div className="text-white bg-black rounded-full border border-black p-2">
              <FaFacebookF className="h-6 w-6" />
            </div>
            <div className="text-black bg-white rounded-full border border-black p-2">
              <FaInstagram className="h-6 w-6" />
            </div>
            <div className="text-black bg-white rounded-full border border-black p-2">
              <FaGithub className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Feature</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Works</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Career</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Customer Support
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Delivery Details
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              FAQ
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Account</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  manage Deliveries
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Orders</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Payments</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  How to - Blog
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Youtube Playlist
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              Shopco © 2000-2023. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="rounded-md bg-white w-[46px] h-[30px] flex items-center justify-center">
                <Image src="/visa.png" alt="Visa" width={32} height={10} />
              </div>
              <div className="rounded-md bg-white w-[46px] h-[30px] flex items-center justify-center">
                <Image
                  src="/master-card.png"
                  alt="Mastercard"
                  width={25}
                  height={15}
                />
              </div>
              <div className="rounded-md bg-white w-[46px] h-[30px] flex items-center justify-center">
                <Image src="/paypal.png" alt="PayPal" height={9} width={34} />
              </div>
              <div className="rounded-md bg-white w-[46px] h-[30px] flex items-center justify-center">
                <Image
                  src="/apple-pay.png"
                  alt="Apple Pay"
                  width={26}
                  height={11}
                />
              </div>
              <div className="rounded-md bg-white w-[46px] h-[30px] flex items-center justify-center">
                <Image
                  src="/gpay.png"
                  alt="Google Pay"
                  width={28}
                  height={11}
                />
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
