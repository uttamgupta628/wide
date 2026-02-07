import React from "react";

/* ================== IMAGE IMPORTS ================== */
// import heroImg from "../../assets/cele1.png";

// // Celebrities
// import madhumita from "../../assets/cele2.png";
// import shiboprosad from "../../assets/cele3.png";
// import trina from "../../assets/cele4.png";
// import oindrila from "../../assets/cele5.png";

// // Press Meets
// import pressMain from "../../assets/cele6.png";
// import press1 from "../../assets/cele7.png";
// import press2 from "../../assets/cele8.png";

// // Meet & Greet
// import meet1 from "../../assets/cele9.png";
// import meet2 from "../../assets/cele10.png";
// import meet3 from "../../assets/cele11.png";
// import meet4 from "../../assets/cele12.png";
// import meet5 from "../../assets/cele13.png";
import Breadcrumb from "../Global/Breadcrumb";

/* ================================================== */

const Management: React.FC = () => {
  return (
    <div className="bg-[#faf7f4]">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Celebrity Management" },
        ]}
      />
      <div className="max-w-7xl mx-auto  py-12 px-4 sm:px-8 space-y-12">
        {/* ================= HEADER ================= */}
        <section>
          <h1 className="text-3xl font-bold mb-2">Celebrity Management</h1>
          <p className="text-gray-600 max-w-3xl">
            Expert management of celebrity partnerships and appearances to boost
            your brand’s impact and visibility
          </p>
        </section>

        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#D0D0D0] rounded-xl p-12 sm:p-20 grid md:grid-cols-2 gap-2 items-center justify-between">
          <div className="relative w-fit">
            <div className="absolute -left-4 -top-4  h-full w-50 bg-yellow-400 rounded-bl-[120px]" />
            {/* <img
              src={heroImg}
              alt="Celebrity"
              className="relative z-10 rounded-bl-[120px] rounded-tr-xl max-w-70"
            /> */}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              the ultimate platform to connect with your favourite celebrities
            </h2>
            <p className="text-gray-700 max-w-xl">
              The ultimate platform for planning and promoting successful
              events, bringing tools, insights, and audiences together to
              simplify coordination, boost visibility, drive engagement, and
              deliver memorable experiences every time, globally effortlessly.
            </p>
          </div>
        </section>

        {/* ================= CELEBRITY GRID ================= */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {[
            {
              img: "https://res.cloudinary.com/demo/image/upload/w_400,h_500,c_fill/sample.jpg",
              name: "Madhumita Sarkar",
            },
            {
              img: "https://res.cloudinary.com/demo/image/upload/w_400,h_500,c_fill/woman.jpg",
              name: "Shiboprosad Mukherjee",
            },
            {
              img: "https://res.cloudinary.com/demo/image/upload/w_400,h_500,c_fill/face_top.jpg",
              name: "Trina Saha",
            },
          ].map((celeb, i) => (
            <div key={i} className="flex flex-col gap-4">
              <img
                src={celeb.img}
                className="w-full h-80 object-cover rounded-xl"
                alt={celeb.name}
              />
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-yellow-400" />
                <div className="bg-white px-6 py-3 rounded-lg shadow text-sm font-medium">
                  {celeb.name}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 sm:p-8 rounded-lg shadow gap-4">
            {/* TEXT */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-gray-700 font-medium text-xl sm:text-2xl">
                Where star power meets strategy — elevate your celebrity brand to new heights
              </h2>
             
            </div>
            {/* BUTTON */}
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="bg-[#3C3533] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition whitespace-nowrap"
            >
              Contact us
            </button>
          </div>
      </div>
    </div>
  );
};

export default Management;
