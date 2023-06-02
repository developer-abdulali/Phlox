

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TfiAngleRight } from "react-icons/tfi";

const CardData = [
  {
    id: 1,
    image: "/images/BI.png",
    title: "Business Insurance",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 2,
    image: "/images/FM.png",
    title: "Banking Investigation",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 3,
    image: "/images/BI.png",
    title: "Finance Management",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 4,
    image: "/images/FM.png",
    title: "Banking Investigation",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];

const DivCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 relative">
      <Slider {...settings}>
        {CardData.map((data) => (
     
            <div
              key={data.id}
              className="h-auto px-5 relative overflow-visible"
            >
              <Image
                className="mx-auto rounded-[30px] left-0 right-0"
                src={data.image}
                alt="Banking Insurance"
                width={150}
                height={100}
              />
              <div className="p-12 -mt-[83px] border rounded-3xl hover:text-white duration-300 cursor-pointer z-1 hover:bg-blue-800">
                <h2 className="mx-auto text-center mt-36 text-4xl font-bold">
                  {data.title}
                </h2>
                <span className="text-2xl text-center text-auto flex mt-10">
                  {data.text}
                </span>
                <div className="mt-12 w-12 h-12 mx-auto bg-blue-700 rounded-xl">
                  <TfiAngleRight
                    size={25}
                    className="mx-auto relative top-[10px] text-white"
                  />
                </div>
              </div>
            </div>
 
        ))}
      </Slider>
    </div>
  );
};

export default DivCarousel;
