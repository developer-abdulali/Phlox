import React from "react";
import Image from "next/image";
import Link from "next/link";
const Partnership = () => {
  return (
    <div class="relative mt-10 h-auto bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-20 bg-blue-500">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div class="content px-5">
          <div class="flex items-center gap-3">
            <span class="md:text-[30px] font-medium text-red-500">Welcome</span>
            <div class="w-20 bg-red-500 border py-1" />
          </div>
          <p class="text-[50px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
            Largest Demand Partnership Buidling Financial Experts
          </p>
          <p class="mt-5 md:text-md md:text-xl mx-auto sm:text-left text-md">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.{" "}
            <Link href="/" className="text-red-500 underline">
              A wonderful serenity
            </Link>{" "}
            has taken possession of my entire soul, like these sweet mornings of
            spring which. <br /> <br />
            like these sweet mornings of spring which I enjoy with my whole
            heart. A wonderful serenity has taken possession of my entire soul,
            like these sweet
          </p> <br />
          <div className="font-bold">
            <h2>Call to ask any question 540-325-1523 or 540-328-1265</h2>
            <Image
            src={"/images/signature.png"}
            alt="poster"
            width={200}
            height={100}
          />
          </div>
        </div>
        <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
        <iframe class="mx-auto w-[700px] lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/kh8Gtj-E1JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
