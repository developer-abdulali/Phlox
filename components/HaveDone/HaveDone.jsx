// import React from "react";
// import { TfiAngleRight } from "react-icons/tfi"
// import Slider from "react-slick";
// import Image from "next/image";

// const HaveDone = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const DataDoneCard = [
//     {
//       id: 1,
//       image: "/images/Business-Advisor.jpeg",
//       title: "Business Advisor",
//       text: "Agency-Finance",
//     },
//     {
//       id: 2,
//       image: "/images/Business-Growth.jpeg",
//       title: "Business Growth",
//       text: "Agency-Finance",
//     },
//     {
//       id: 3,
//       image: "/images/FinancialService.jpeg",
//       title: "Financial Services",
//       text: "Agency-Finance",
//     },
//     {
//       id: 4,
//       image: "/images/Investing-Advisor.jpeg",
//       title: "Investing Advisor",
//       text: "Agency-Finance",
//     },
//     {
//       id: 5,
//       image: "/images/Environment.jpeg",
//       title: "Environment",
//     },
//   ];

//   return (
//     <div className="max-w-screen-2xl mx-auto">
//       <div className="text-center">
//         <div className="flex justify-center items-center gap-3">
//           <h4 className="text-2xl text-red-500 font-semibold">OUR CASES</h4>
//           <div className="bg-red-500 border p-1 w-12"></div>
//         </div>
//         <h2 className="text-6xl font-light mt-3">What We Have Done</h2>
//       </div>
//       <Slider {...settings} className="mt-20">
//         {DataDoneCard.map((data) => (
//           <div key={data.id} className="px-6 md:px-10 lg:px-20 relative cursor-pointer">
//             <div className="bg-cover">
//               <Image src={data.image} width={400} height={500} />
//             </div>
//             <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl text-white">
//               {data.title}
//             </h2>
//             {data.text && (
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
//                 {data.text}
//               </span>
//             )}
//             <div className="absolute top-3/ left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 w-12 h-12 mx-auto bg-blue-700 rounded-xl hover:bg-red-500 duration-300">
//               <TfiAngleRight
//                 size={25}
//                 className="mx-auto relative top-[10px] text-white"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HaveDone;


























import React from "react";
import { TfiAngleRight } from "react-icons/tfi"
import Slider from "react-slick";
import Image from "next/image";

const HaveDone = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const DataDoneCard = [
    {
      id: 1,
      image: "/images/Business-Advisor.jpeg",
      title: "Business Advisor",
      text: "Agency-Finance",
    },
    {
      id: 2,
      image: "/images/Business-Growth.jpeg",
      title: "Business Growth",
      text: "Agency-Finance",
    },
    {
      id: 3,
      image: "/images/FinancialService.jpeg",
      title: "Financial Services",
      text: "Agency-Finance",
    },
    {
      id: 4,
      image: "/images/Investing-Advisor.jpeg",
      title: "Investing Advisor",
      text: "Agency-Finance",
    },
    {
      id: 5,
      image: "/images/Environment.jpeg",
      title: "Environment",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center">
        <div className="flex justify-center items-center gap-3">
          <h4 className="text-2xl text-red-500 font-semibold">OUR CASES</h4>
          <div className="bg-red-500 border p-1 w-12"></div>
        </div>
        <h2 className="text-4xl font-light mt-3 md:text-5xl lg:text-6xl">What We Have Done</h2>
      </div>
      <Slider {...settings} className="mt-20">
        {DataDoneCard.map((data) => (
          <div key={data.id} className="px-20 relative cursor-pointer">
            <div className="bg-cover">
              <Image src={data.image} width={400} height={50} />
            </div>
            <h2 className="absolute top-72 ml-10 text-2xl text-white">
              {data.title}
            </h2>
            <span className="absolute top-[320px] ml-10 text-white">
              {data.text}
            </span>
            <div className="absolute top-60 right-28 mt-12 w-12 h-12 mx-auto bg-blue-700 rounded-xl hover:bg-red-500 duration-300">
                  <TfiAngleRight
                    size={25}
                    className="mx-auto relative top-[10px] text-white"
                  />
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HaveDone;
