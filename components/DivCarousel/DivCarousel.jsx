import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TfiAngleRight } from "react-icons/tfi";
import Link from "next/link";

const DivCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Slider {...settings}>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
        <div className="p-10 h-auto w-[800px] border rounded-xl shadow-xl hover:bg-blue-900 hover:text-white duration-300 cursor-pointer">
          <Image
            className="mx-auto rounded-[30px] shadow-xl"
            src={"/images/BI.png"}
            alt="Banking Insurance"
            width={250}
            height={100}
          />
          <h2 className="mx-auto text-center mt-20 text-4xl font-bold">
            Business <br /> Insurance
          </h2>
            <span className="text-2xl text-center text-[#505050] flex mt-10">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </span>
          <div className="mt-12 w-12 h-12 mx-auto bg-blue-900 rounded-xl hover:bg-red-500">
            <TfiAngleRight size={25} className="mx-auto relative top-[10px] text-white" />
          </div>
        </div>
    
      </Slider>
    </div>
  );
};

export default DivCarousel;
