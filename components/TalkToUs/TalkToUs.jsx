import React from "react";
import Link from "next/link";

const TalkToUs = () => {
  return (
    <div className="max-w-screen-2xl m-auto mt-10 px-36 py-10 flex justify-between items-center bg-blue-700 rounded-2xl">
        <div>
            <h2 className="text-white text-6xl">Wanna Talk To Us?</h2>
            <p className="text-[#ffffffc8] text-lg">wonderful serenity has taken possession of my entire soul, like these sweet</p>
        </div>
        <div className="text-white bg-red-500 py-4 px-10 rounded-lg hover:bg-white hover:text-red-500 duration-300 cursor-pointer">
            <Link href="/">Contact Us</Link>
        </div>
    </div>
  )
}

export default TalkToUs
