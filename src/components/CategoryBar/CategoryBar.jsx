import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryBar = () => {
  return (
    <div className="h-[50px] md:h-[50px] w-full bg-[#131921] md:bg-[#232f3e] flex justify-center items-center md:hidden ">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        className="text-white px-2"
      >
        <SwiperSlide className="w-[50px] h-full  flex justify-center items-center">
          <span className="text-sm">Deals</span>
        </SwiperSlide>
        <SwiperSlide className="w-[110px] h-full flex justify-center items-center">
          <span className="text-sm">Amazon Basics</span>
        </SwiperSlide>
        <SwiperSlide className="w-[100px] h-full flex justify-center items-center">
          <span className="text-sm">Best Sellers</span>
        </SwiperSlide>
        <SwiperSlide className="w-[50px] h-full flex justify-center items-center">
          <span className="text-sm">Music</span>
        </SwiperSlide>
        <SwiperSlide className="w-[50px] h-full flex justify-center items-center">
          <span className="text-sm">Video</span>
        </SwiperSlide>
        <SwiperSlide className="w-[50px] h-full flex justify-center items-center">
          <span className="text-sm">Home</span>
        </SwiperSlide>
        <SwiperSlide className="w-[50px] h-full flex justify-center items-center">
          <span className="text-sm">Books</span>
        </SwiperSlide>
        <SwiperSlide className="w-[135px] h-full flex justify-center items-center">
          <span className="text-sm">Health & Household</span>
        </SwiperSlide>
        <SwiperSlide className="w-[20px] h-full flex justify-center items-center">
          <span className="text-sm">PC</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryBar;
