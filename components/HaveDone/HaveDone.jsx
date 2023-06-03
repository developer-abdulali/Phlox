

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { TfiAngleRight } from "react-icons/tfi";

// const DataDoneCard = [
//   {
//     id: 1,
//     image: "/images/Business-Advisor.jpeg",
//     title: "Business Advisor",
//     text: "Agency-Finance"
//   },
//   {
//     id: 2,
//     image: "/images/Business-Growth.jpeg",
//     title: "Business Growth",
//     text: "Agency-Finance"
//   },
//   {
//     id: 3,
//     image: "/images/FinancialService.jpeg",
//     title: "Financial Services",
//     text: "Agency-Finance"
//   },
//   {
//     id: 4,
//     image: "/images/Investing-Advisor.jpeg",
//     title: "Investing Advisor",
//     text: "Agency-Finance"
//   },
//   {
//     id: 5,
//     image: "/images/Environment.jpeg",
//     title: "Environment",
//   },
// ];

// const HaveDone = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 relative">
//       <Slider {...settings}>
//         {DataDoneCard.map((data) => (
     
//             <div
//               key={data.id}
//               className="h-auto px-5 relative overflow-visible"
//             >
//               <Image
//                 className="mx-auto rounded-[10px] left-0 top-3 right-0"
//                 src={data.image}
//                 alt="Banking"
//                 width={150}
//                 height={100}
//               />
//               <div className="p-12 -mt-[83px] border rounded-3xl hover:text-white duration-300 cursor-pointer z-1 hover:bg-blue-800">
//                 <h2 className="mx-auto text-center mt-36 text-4xl font-bold">
//                   {data.title}
//                 </h2>
//                 <span className="text-2xl text-center text-auto flex mt-10">
//                   {data.text}
//                 </span>
//                 <div className="mt-12 w-12 h-12 mx-auto bg-blue-700 rounded-xl">
//                   <TfiAngleRight
//                     size={25}
//                     className="mx-auto relative top-[10px] text-white"
//                   />
//                 </div>
//               </div>
//             </div>
 
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HaveDone;









import React from "react";
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
      <Slider {...settings}>
        {DataDoneCard.map((data) => (
          <div key={data.id} className="px-20 relative">
            <div className="bg-cover">
              <Image src={data.image} width={400} height={50}/>
            </div>
            <h2 className="absolute top-72 ml-10 text-2xl text-white">{data.title}</h2>
           <span className="absolute top-[330px] ml-10 text-white">{data.text}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HaveDone;
