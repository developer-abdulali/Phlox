import React from "react";
import Image from "next/image";
import Link from "next/link";

const Partnership = () => {
  return (
    <div className="max-w-screen-2xl mx-auto relative mt-10 h-auto bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-20 bg-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div className="content px-5">
          <div className="flex items-center gap-3">
            <span className="md:text-[30px] font-medium text-red-500">
              Welcome
            </span>
            <div className="w-20 bg-red-500 border py-1" />
          </div>
          <p className="text-[30px] sm:text-[50px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
            Largest Demand Partnership Building Financial Experts
          </p>
          <p className="mt-5 text-sm sm:text-md md:text-xl mx-auto sm:text-left text-md">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
            <Link href="/" className="text-red-500 underline">
              A wonderful serenity
            </Link>{" "}
            has taken possession of my entire soul, like these sweet mornings of
            spring which.
          </p>
          <p className="mt-5 text-sm sm:text-md md:text-xl mx-auto sm:text-left text-md">
            Like these sweet mornings of spring which I enjoy with my whole
            heart. A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which.
          </p>
          <br />
          <div className="font-bold">
            <h2>Call to ask any question 540-325-1523 or 540-328-1265</h2>
            <div className="mx-auto w-52 sm:w-64">
              <Image
                src={"/images/signature.png"}
                alt="poster"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg sm:h-[22rem] lg:h-[28rem] xl:h-[32rem] shadow-xl"
              src="https://www.youtube.com/embed/kh8Gtj-E1JE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;