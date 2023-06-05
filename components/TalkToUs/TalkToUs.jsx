import React from "react";
import Link from "next/link";

const TalkToUs = () => {
  return (
    <div className="max-w-screen-2xl sm:mx-auto mt-10 mx-5 px-6 md:px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-center bg-blue-700 rounded-2xl">
      <div className="text-center lg:text-left lg:mr-10">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl">
          Wanna Talk To Us?
        </h2>
        <p className="text-[#ffffffc8] text-lg mt-4">
          Wonderful serenity has taken possession of my entire soul, like these
          sweet
        </p>
      </div>
      <div className="text-center mt-6 lg:mt-0">
        <Link
          href="/"
          className="text-white bg-red-500 py-4 px-10 rounded-lg hover:bg-white hover:text-red-500 duration-300 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default TalkToUs;