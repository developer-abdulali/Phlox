import React from "react";

export default function Location() {
  return (
    <section className="max-w-screen-2xl mx-auto pt-10 pb-10 text-gray-600 body-font ">
      <div className="w-full relative">
        <div className="w-full lg:w-6/12">
          <div className="container mx-auto flex">
            <div className="bg-[#061757] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md ">
              <h2 className="text-white text-4xl mb-1 font-medium title-font">
                Request For Quote
              </h2>
              <p className="leading-relaxed mb-5 text-white">
                A wonderful serenity has taken possession of my entire soul
              </p>
              <div className="relative mb-4 mt-10">
                <p className="leading-7 text-xl text-white">
                  I would like to discuss:
                </p>
                <div className="flex gap-10">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="How To Assits You"
                    className="w-full bg-blue-800 rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Name"
                    className="w-full bg-blue-800 rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="flex gap-10">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Phone Number"
                    className="w-[330px] bg-blue-800 rounded border border-gray-300 mt-5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button className="text-white mt-6 bg-indigo-500 border-0 px-20 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
                </div>
              </div>
        
              
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="absolute rounded-lg inset-0 bg-[#061757]">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
