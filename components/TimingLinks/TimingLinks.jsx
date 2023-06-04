import React from "react";
import { LuClock9 } from "react-icons/lu";
import { BsHeadphones } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

const TimingLinks = () => {
  return (
    <header className="bg-[#061757]">
      <div className="max-w-screen-2xl mx-auto -mt-5 hidden md:block px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-x-0 md:gap-x-10 text-[#ffffffb5] mb-4 md:mb-0">
            <span className="flex items-center gap-1">
              <LuClock9 />
              <span className="hidden md:inline">Mon - Fri</span> 10:00-18:00
            </span>
            <span className="flex items-center gap-1">
              <BsHeadphones />
              Fri 10:00-18:00
            </span>
            <span className="flex items-center gap-1">
              <GoMail />
              Phlox@averta.net
            </span>
          </div>
          <div className="flex gap-x-8 md:gap-x-12 text-white">
            <FaFacebookF className="hover:text-red-600 duration-500 cursor-pointer" />
            <FaTwitter className="hover:text-red-600 duration-500 cursor-pointer" />
            <FaPinterest className="hover:text-red-600 duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TimingLinks;



























// import React from "react";
// import { LuClock9 } from "react-icons/lu";
// import { BsHeadphones } from "react-icons/bs";
// import { GoMail } from "react-icons/go";
// import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

// const TimingLinks = () => {
//   return (
//     <header className="bg-[#061757]">
//       <div className="max-w-screen-2xl mx-auto hidden md:flex justify-between h-[90px] md:px-5">
//         <div className="flex items-center gap-x-10 text-[#ffffffb5] -mt-10">
//           <span className="flex items-center gap-1">
//             <LuClock9 />
//             Mon - Fri 10:00-18:00
//           </span>
//           <span className="flex items-center gap-1">
//             <BsHeadphones />
//             Fri 10:00-18:00
//           </span>
//           <span className="flex items-center gap-1">
//             <GoMail />
//             Phlox@averta.net
//           </span>
//         </div>
//         <div>
//           <div className="flex gap-x-12 mt-4 text-white">
//             <FaFacebookF className="hover:text-red-600 duration-500 cursor-pointer" />
//             <FaTwitter className="hover:text-red-600 duration-500 cursor-pointer" />
//             <FaPinterest className="hover:text-red-600 duration-500 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TimingLinks;