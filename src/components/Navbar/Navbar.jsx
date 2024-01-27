import React from "react";
import logoimg from "../../assets/amazon-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";
import Searchbar from "./Searchbar";
import enUsIcon from "../../assets/en-us-icon.png";

const Navbar = () => {
  return (
    <div className="h-[150px] md:h-[100px] w-full bg-[#131921] md:flex justify-center">
      <div className="h-[60px] md:h-[] flex items-center gap-2  p-2 border-2 border-white">
        <RxHamburgerMenu className="text-3xl text-white block md:hidden" />
        <img className="w-[100px] h-[40px] " src={logoimg} alt="amazon-logo" />

        {/* large view deliver to country icon */}
        <div className=" h-[60px] w-[120px] hidden md:flex flex-col justify-center items-center border-2 border-green-500">
          <span className="text-[#d6d6d6] font-semibold">Deliver To</span>
          <div className="flex text-white items-center">
            <SlLocationPin />
            <span>Bangladesh</span>
          </div>
        </div>

        {/* large view search bar */}
        <div className="hidden md:block">
          <Searchbar />
        </div>

        {/* language selection */}
        <div className="w-[80px] h-[60px] text-white hidden md:flex items-center gap-1 hover:cursor-pointer">
          <img className="size-8" src={enUsIcon} alt="" />
          <span>ENG</span>
          <IoMdArrowDropdown />
        </div>

        {/* large view sign in button */}

        <div className="hidden md:block w-[180px] h-[60px] border-2 border-blue-500 text-white p-2 hover:cursor-pointer">
          <div className="text-sm">
            <span>Hello, </span>
            <span>Sign in</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold">Accounts and Lists</span>
            <IoMdArrowDropdown />
          </div>
        </div>

        {/* large view returns and orders section */}

        <div className="hidden md:block w-[140px] h-[60px] border-2 border-yellow-500 text-white p-2 hover:cursor-pointer">
          <div className="text-sm">
            <span>Returns </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold">& Orders</span>
            <IoMdArrowDropdown />
          </div>
        </div>

        {/* sign in button */}
        <button className="ms-auto flex items-center md:hidden">
          <div className="flex items-center text-white ">
            <span className="text-[10px]">Sign In</span>
            <MdKeyboardArrowRight />
            <FaRegUser className="text-white font-bold text-xl" />
          </div>
        </button>

        {/* cart button */}
        <div className="relative ms-3 md:w-[100px] md:h-[60px] border-2 border-red-500 md:flex items-center justify-center gap-1">
          <FiShoppingCart className="text-white font-bold text-xl md:text-4xl" />
          <span className="text-white font-semibold text-lg hidden md:block">
            Cart
          </span>
          <div className="absolute top-[-15px] left-[10px] md:top-[-5px] md:left-[30px]">
            <span className="font-bold text-orange-400 text-xs md:text-lg">
              0
            </span>
          </div>
        </div>
      </div>
      {/* mobile view search bar */}
      <div className="block md:hidden w-full">
        <Searchbar />
      </div>
    </div>
  );
};

export default Navbar;
