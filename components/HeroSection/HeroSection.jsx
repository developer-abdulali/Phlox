import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto relative mt-10 h-auto bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-20 bg-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div className="content px-5">
          <div className="flex items-center gap-3">
            <span className="md:text-[30px] font-medium text-red-500">
              FINANCE
            </span>
            <div className="w-20 bg-red-500 border py-1" />
          </div>
          <p className="text-[50px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0">
            Our Finance <br /> Can Give More <br /> Possibilities
          </p>
          <p className="mt-5 md:text-md md:text-2xl mx-auto sm:text-left text-md">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. A wonderful serenity has taken.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="text-[16px] flex bg-white border px-10 py-5 md:py-4 md:px-8 relative gap-2 text-red-500 shadow-glass rounded-xl hover:bg-red-500 hover:text-white transition duration-300">
              READ MORE
              <span className="absolute right-0 top-0 w-3 h-3 rounded-full"></span>
            </button>
          </div>
        </div>
        <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
          <Image src={"/images/girlworking.png"} alt="poster" width={800} height={100} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;