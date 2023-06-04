import React from "react";
import Link from "next/link"
import Image from "next/image"

const OurBlog = () => {
  return (
    <div className="w-[1000px] mx-auto flex justify-between mt-10">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xl text-red-500 font-semibold">OUR BLOG</p>
          <div className="bg-red-500 p-1 w-14"></div>
        </div>
        <h2 className="text-5xl mt-8">Read Latest Articles</h2>
        <p className="text-lg mt-7 text-[#505050d4]">
        A wonderful serenity has taken possession of my entire soul, <br /> like these sweet mornings.
        </p>
        <div className="mt-10">
        <Link
            href="/"
            className="text-white bg-red-500 mt-10 py-4 px-14 rounded-lg hover:bg-white hover:text-red-500 hover:border-2 duration-300 cursor-pointer shadow-xl"
          >
            All Posts
        </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 relative">

        <Image src="/images/CoupleTaxReview.jpg" alt="Team Member" width={400} height={100} className="rounded-xl" />
        <Image src="/images/Business-Growth.jpeg" alt="Team Member" width={400} height={100} className="rounded-xl"/>
        <div className="absolute left-10 top-72 text-white text-lg font-semibold">
            <p>May 11, 2021</p>
            <h4 className="mt-5">Finance Is The Process Of <br /> Channeling Money</h4>
        </div>
        <div className="absolute left-[55%] top-72 text-white text-lg font-semibold">
            <p>May 11, 2021</p>
            <h4 className="mt-5">Finance Is The Process Of <br /> Channeling Money</h4>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
