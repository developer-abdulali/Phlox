import React from "react";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi"
import Image from "next/image";

const Footer=()=> {
  return (
    <div>
      <footer className="bg-[#061757] text-white mt-10">
        <div className="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div className="text-white">
              <Image
                src="/images/companyLogo.png"
                width={100}
                height={300}
                className="sm:h-12 rounded-full h-60"
                alt="logo"
              />
              <div className="flex items-center gap-2">
                <div className="mt-4">
                  <MdOutlineLocationOn size={20} />
                </div>
                <div>
                  <p className="max-w-xs mt-4 text-md text-white">
                    34 Hamston, Times Avnue NY
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="mt-4">
                  <BsHeadphones size={20} />
                </div>
                <div>
                  <p className="max-w-xs mt-4 text-md text-white">
                    +1-3454-5678-77
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="mt-4"><HiOutlineMail  size={20} /></div>
                <div>
                <p className="max-w-xs mt-4 text-md text-white">
                Phlox@Averta.net
              </p>
                </div>
              </div>
          
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-medium text-xl">Useful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
                  <Link className="hover:text-red-500 duration-300" href="/">
                    About Us
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Our Team
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Our Services
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    News
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Career
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-xl">What We Do</p>
                <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
                  <Link className="hover:text-red-500 duration-300" href="">
                    Financial Advice
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Planning Strategies
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Taxation Planning
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Investment Trading
                  </Link>
                  <Link className="hover:text-red-500 duration-300" href="/">
                    Wealth Marketing
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-xl">Newsletter</p>
                <div className="flex flex-col mt-4 space-y-2 text-md text-white">
                  <p>Get in your inbox the latest News</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-blue-700 py-3 rounded-lg p-6"
                    />
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="py-3 rounded-lg p-6 bg-blue-700"
                    />
                    <button className="bg-red-500 text-white py-3 rounded-lg p-7 hover:bg-white hover:text-red-500 duration-300">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-[1200px]" />
          </div>
          <p className="text-center mt-8 text-xs text-white">
            © 2023 Agency Finance - Phlox Elementor WordPress Theme. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer