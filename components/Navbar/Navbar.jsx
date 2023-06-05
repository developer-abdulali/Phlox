"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-screen-2xl mx-auto rounded-xl md:-mt-7 shadow-lg py-5 px-6 bg-red-500 md:px-6 md:mx-5 lg:mx-10 xl:mx-5 2xl:mx-auto">
      <div className="flex justify-between items-center h-10">
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg">
                Home
              </li>
            </Link>
            <Link href="/Services">
              <li className="ml-14 text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg sm:ml-8">
                About
              </li>
            </Link>
            <Link href="/Services">
              <li className="ml-14 text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg sm:ml-8">
                Services
              </li>
            </Link>
            <Link href="/About">
              <li className="ml-14 text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg sm:ml-8">
                Our Cases
              </li>
            </Link>
            <Link href="/Contact">
              <li className="ml-14 text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg sm:ml-8">
                Blog
              </li>
            </Link>
            <Link href="/Services">
              <li className="ml-14 text-white hover:text-cyan-500 duration-300 text-xl sm:text-lg sm:ml-8">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <Link href="/" className="text-xl text-white bg-black px-8 py-[26px] rounded-xl cursor-pointer -mx-6 hover:bg-white hover:text-black duration-300">
          <button>
            GET A QOUTE
          </button>
        </Link>
        <div
          onClick={handleNav}
          className="md:hidden sm:hidden cursor-pointer pl-24 text-white duration-300"
        >
          <AiOutlineMenu size={35} className="active:shadow-inner" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "relative -left-10 -top-16 w-auto sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
        }
      >
        <div
          onClick={handleNav}
          className="absolute top-4 right-4 hover:text-black rounded-full duration-300 cursor-pointer"
        >
          <AiOutlineClose size={35} className="active:shadow-inner" />
        </div>
        <div className="flex justify-center w-[65%] items-center">
          <div className="flex-col py-20">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  Home
                </li>
              </Link>
              <Link href="/Services">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  About
                </li>
              </Link>
              <Link href="/About">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  Services
                </li>
              </Link>
              <Link href="/Contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  Our Cases
                </li>
              </Link>
              <Link href="/Contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  Blog
                </li>
              </Link>
              <Link href="/Contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-2 cursor-pointer text-[28px] hover:text-cyan-500 duration-300"
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;