import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#061757] text-white mt-10">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div className="text-white">
              <img
                src="/images/companyLogo.png"
                className="mr-5 h-60 sm:h-12 w-40 rounded-full"
                alt="logo"
              />
              <p className="max-w-xs mt-4 text-sm text-white">
                34 Hamston, Times Avnue NY
              </p>
              <p className="max-w-xs mt-4 text-sm text-white">
                +1-3454-5678-77
              </p>
              <p className="max-w-xs mt-4 text-sm text-white">
                Phlox@Averta.net
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-medium text-xl">Useful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
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
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <Link className="hover:opacity-75" href="">
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
                <div className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <a className="hover:opacity-75" href="">
                    Get in your inbox the latest News
                  </a>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-200 py-3 rounded-lg p-6"
                    />
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="bg-gray-200 py-3 rounded-lg p-6"
                    />
                    <button className="bg-red-500 text-white py-3 rounded-lg p-7">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-[1200px]" />
          </div>
          <p className="text-center mt-8 text-xs text-white">
            © 2023 Agency Finance - Phlox Elementor WordPress Theme. All rights reserved.

          </p>
        </div>
      </footer>
    </div>
  );
}
