import { Link } from "react-router-dom";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

export const AboutCTA = () => {
  return (
    <section className="bg-linear-to-r from-[#FFEB77] to-[#FFFBE2] px-6 py-10 lg:py-12 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="relative">
          <div className="bg-[#FFEB77] rounded-full w-80 h-80 flex flex-col justify-center items-start pl-6">
            <h3 className="text-3xl font-semibold leading-tight mb-4 whitespace-nowrap ">
              Let’s Get Your Brand Notice
            </h3>
            <Link
              to="/contact-us"
              className="underline font-semibold text-[28px]"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-end items-center pr-6">
          {/* Overlapping Image */}
          <img
            src={about2}
            className="w-72 h-96 object-cover absolute right-48 z-10 shadow-xl"
          />

          {/* Base Image */}
          <img src={about3} className="w-72 h-96 object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
};
