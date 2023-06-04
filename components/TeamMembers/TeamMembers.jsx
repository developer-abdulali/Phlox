










import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div className="max-w-screen-2xl mx-10 m flex flex-col-reverse lg:flex-row justify-between mt-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <p className="text-xl text-red-500 font-semibold">TEAM MEMBER</p>
          <div className="bg-red-500 p-1 w-14"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl mt-10">Our Team Is Very Expert To Help</h2>
        <p className="text-lg sm:text-xl mt-7 text-[#505050d4]">
          A wonderful serenity has taken possession of my entire soul, <br /> like these sweet mornings.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-white bg-red-500 mt-10 py-4 px-14 rounded-lg hover:bg-white hover:text-red-500 hover:border-2 duration-300 cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 lg:mt-0">
        <div className="w-full sm:w-1/2 lg:w-auto">
          <Image src="/images/teamMember1.jpeg" alt="Team Member" width={270} height={100} className="rounded-xl" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          <Image src="/images/teamMember2.jpeg" alt="Team Member" width={270} height={100} className="rounded-xl"/>
        </div>
        <div className="w-full sm:w-1/2 lg:w-auto">
          <Image src="/images/teamMember3.jpeg" alt="Team Member" width={270} height={100} className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
