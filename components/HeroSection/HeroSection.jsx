import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div class="relative mt-10 h-auto bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-20 bg-blue-500">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div class="content px-5">
          <div class="flex items-center gap-3">
            <span class="md:text-[30px] font-medium text-red-500">
              FINANCE
            </span>
            <div class="w-20 bg-red-500 border py-1" />
          </div>
          <p class="text-[50px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
          Our Finance <br /> Can Give More <br /> Possiblities
          </p>
          <p class="mt-5 md:text-md md:text-2xl mx-auto sm:text-left text-md">
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken.
          </p>
          <div class="flex gap-4 mt-10">
            <button class="text-[16px] flex bg-white border px-10 py-5 md:py-4 md:px-8 relative gap-2 text-red-500 shadow-glass rounded-xl hover:bg-red-500 hover:text-white transition duration-300">
              READ MORE
              <span class="absolute right-0 top-0 w-3 h-3 rounded-full"></span>
            </button>
          </div>
        </div>
        <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
         <Image src={"/images/girlworking.png"} alt="poster" width={800} height={100} />
        </div>
      </div>
    </div>

    // <section className="bg-[#dfece7] -mt-11">
    //   <div className="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto px-5 md:px-0">
    //     <div className="mt-20">
    //       <div className="flex justify-center md:flex-row items-center gap-5">
    //         <span className="text-[#E52C48] text-2xl md:text-3xl font-semibold">
    //           FINANCE
    //         </span>
    //         <div className="bg-red-500 px-10 py-1 h-0 border"></div>
    //       </div>
    //       <h1 className="text-[#061757] text-4xl text-center md:text-left font-normal md:text-8xl mt-5 md:mt-0">
    //         Our Finance Can Give More Possiblities
    //       </h1>
    //       <p className="text-[#505050] mt-5 text-md leading-7 md:leading-8 text-center md:text-left md:text-2xl">
    //         A wonderful serenity has taken possession of my entire soul,
    //         like these sweet mornings of spring which I enjoy with my
    //         whole heart. A wonderful serenity has taken.
    //       </p>
    //       <button className="bg-white text-[#E52C48] ml-16 sm:ml-20 md:ml-0 mt-8 py-4 px-7 md:py-5 md:px-10 rounded-xl hover:bg-red-500 hover:text-white duration-300">
    //         READ MORE
    //       </button>
    //     </div>
    //     <div className="mt-10">
    //       <img
    //         src="images/img1.png"
    //         alt="poster"
    //         className="w-[700px] h-[300px] md:h-[500px]"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
