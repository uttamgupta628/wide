// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// // replace with your images
// import bg1 from '../../assets/Banner.png';
// import bg2 from '../../assets/Banner.png';

// export const HeroSection: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden">

//       {/* 🔁 MOVING BACKGROUND */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 flex animate-bg-scroll">
//           <img src={bg1} className="w-screen h-full object-cover shrink-0" />
//           <img src={bg2} className="w-screen h-full object-cover shrink-0" />
//           <img src={bg1} className="w-screen h-full object-cover shrink-0" />
//           <img src={bg2} className="w-screen h-full object-cover shrink-0" />
//         </div>
//       </div>

//       {/* 🟡 YELLOW OVERLAY */}
//       <div className="absolute inset-0  z-10"></div>

//       {/* 🌟 CONTENT */}
//       <div className="relative z-20 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto">

//           {/* TOP CONTENT */}
//           <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
//             <div className="w-full lg:w-1/2">
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 text-black">
//                 Right Budget
//                 <br />
//                 for Right Execution
//               </h1>

//               <button className="border border-black text-black px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-black hover:text-[#FFDA00] transition">
//                 Contact us <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* STACKED CARDS */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="relative bg-gray-800 text-white px-8 py-12 rounded-lg shadow-2xl z-30 w-[90%] ml-auto">
//                 <span className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></span>
//                 <p>widest network of media</p>
//               </div>

//               <div className="relative bg-[#FFDA00] px-8 py-10 rounded-lg shadow-xl z-20 w-[95%] -mt-4 ml-8">
//                 <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
//                 <p className="text-black">widest repertoire of customization</p>
//               </div>

//               <div className="relative bg-[#FFF4CC] px-8 py-10 rounded-lg shadow-lg z-10 w-full -mt-4 ml-4">
//                 <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
//                 <p className="text-black">widest repertoire of customization</p>
//               </div>
//             </div>
//           </div>

//           {/* QUOTE SECTION */}
//           <div className="relative max-w-5xl mx-auto mt-20 px-6 sm:px-12 py-12 sm:py-16">
//             <span className="absolute left-6 top-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
//               “
//             </span>

//             <p className="max-w-3xl ml-10 text-sm sm:text-base leading-relaxed font-medium text-black">
//               Help our Clients to reach their business goals through our services in OOH
//               communications, education, measurement, rewards and events to inspire their
//               employee, channel partners and customers.
//             </p>

//             <span className="absolute right-6 bottom-6 text-6xl sm:text-8xl font-serif text-[#8C7700]">
//               ”
//             </span>
//           </div>

//         </div>
//       </div>

//       {/* 🎞️ CSS ANIMATION */}
//       <style>
//         {`
//           @keyframes bg-scroll {
//             from { transform: translateX(0); }
//             to { transform: translateX(-50%); }
//           }

//           .animate-bg-scroll {
//             width: 200%;
//             animation: bg-scroll 45s linear infinite;
//           }
//         `}
//       </style>

//     </section>
//   );
// };

import React from "react";
import bg1 from "../../assets/Banner.png";
import bg2 from "../../assets/Banner.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg1}
          className="absolute inset-0 w-full h-full object-cover animate-slide1"
        />
        <img
          src={bg2}
          className="absolute inset-0 w-full h-full object-cover animate-slide2"
        />
      </div>

      {/* CSS */}
      <style>
        {`
          /* Image 1 */
          @keyframes slide1 {
            0% { transform: translateX(0); opacity: 1; }
            40% { transform: translateX(0); opacity: 1; } /* stay 2s */
            50% { transform: translateX(-100%); opacity: 0; } /* slide out fast */
            100% { transform: translateX(-100%); opacity: 0; }
          }

          /* Image 2 */
          @keyframes slide2 {
            0% { transform: translateX(100%); opacity: 0; }
            40% { transform: translateX(100%); opacity: 0; }
            50% { transform: translateX(0); opacity: 1; } /* slide in fast */
            90% { transform: translateX(0); opacity: 1; } /* stay */
            100% { transform: translateX(-100%); opacity: 0; }
          }

          .animate-slide1 {
            animation: slide1 6s infinite ease-in-out;
          }

          .animate-slide2 {
            animation: slide2 6s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};
