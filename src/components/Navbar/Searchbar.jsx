import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState("Search Amazon");

  return (
    <div className="h-[60px] md:h-[80px] w-full md:w-[860px] py-[10px] px-[5px]">
      <div className="w-full md:w-[840px] h-[50px] bg-white rounded-lg flex">
        {/* show all categories div */}
        <div className="hidden md:flex justify-center items-center h-full w-[70px] rounded-l-lg bg-[#e6e6e6] hover:cursor-pointer hover:bg-[#d4d4d4] ">
          <div className="flex items-center gap-1">
            <span className="font-semibold">All</span>
            <IoMdArrowDropdown />
          </div>
        </div>
        {/* search input div */}
        <div className="h-full w-[700px] border-0">
          <input
            className="h-full w-full p-3 font-semibold text-gray-400 rounded-s-lg"
            type="text"
            name="searchItem"
            placeholder="Search Amazon"
            onChange={(event) => setSearchItem(event.target.value)}
          />
        </div>

        {/* search icon div */}
        <div className=" w-[100px] md:w-[70px] bg-[#febd69] hover:bg-[#f3a847] rounded-lg md:rounded-r-lg flex justify-center items-center">
          <IoSearch className="font-semibold text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
