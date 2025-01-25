"use client";
import { useState } from "react";
import { Search, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const shopCategories = [
  {
    title: "Clothing",
    items: ["T-Shirts", "Jeans", "Dresses", "Jackets"],
  },
  {
    title: "Accessories",
    items: ["Watches", "Bags", "Jewelry", "Belts"],
  },
  {
    title: "Footwear",
    items: ["Sneakers", "Boots", "Sandals", "Formal"],
  },
];

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full">
      {showBanner && (
        <div className="w-full bg-black text-white text-sm py-2 px-4 flex justify-center items-center gap-2">
          <span>Sign up and get 20% off to your first order.</span>
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white p-0 h-auto">
              Sign Up Now
            </Button>
            <Button
              className="hidden sm:block p-0 h-auto text-white hover:bg-transparent relative left-72"
              onClick={() => setShowBanner(false)}
            >
              <X />
            </Button>
          </div>
        </div>
      )}

      <header className="w-full border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu */}
            <Button variant="ghost" className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="font-bold text-3xl">SHOP.CO</div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-4 p-6 w-[600px]">
                      {shopCategories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="font-medium text-sm">
                            {category.title}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item}>
                                <NavigationMenuLink asChild>
                                  <a className="text-sm text-gray-600 hover:text-black block py-1">
                                    {item}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {["On Sale", "New Arrivals", "Brands"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="px-3 py-2 hover:text-gray-600 text-sm text-black">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-8 rounded-full bg-main2"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
