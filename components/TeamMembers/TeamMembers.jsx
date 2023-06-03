import React from "react";
import Link from "next/link"
import Image from "next/image"

const TeamMembers = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-between mt-10">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xl text-red-500 font-semibold">TEAM MEMBER</p>
          <div className="bg-red-500 p-1 w-14"></div>
        </div>
        <h2 className="text-5xl mt-10">Our Team Is Very <br /> Expert To Help</h2>
        <p className="text-xl mt-7">
          A wonderful serenity has taken possession of my entire soul, <br /> like
          these sweet mornings.
        </p>
        <div className="mt-10">
        <Link
            href="/"
            className="text-white bg-red-500 mt-10 py-4 px-14 rounded-lg hover:bg-white hover:text-red-500 duration-300 cursor-pointer"
          >
            About
        </Link>
        </div>
      </div>
      <div className="flex gap-5">
        <Image src="/images/teamMember1.jpeg" alt="Team Member" width={300} height={100}/>
        <Image src="/images/teamMember2.jpeg" alt="Team Member" width={300} height={100}/>
        <Image src="/images/teamMember3.jpeg" alt="Team Member" width={300} height={100}/>
      </div>
    </div>
  );
};

export default TeamMembers;
