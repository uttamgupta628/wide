import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

export const AboutCTA = () => {
  return (
    <section className="bg-linear-to-r from-[#FFEB77] to-[#FFFBE2] px-2 py-20 lg:py-24  mb-7">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="relative lg:pl-12">
          <div className="bg-[#FFEB77] rounded-full w-80 h-80 flex flex-col justify-center items-start pl-12">
            <h3 className="text-4xl font-extrabold leading-tight mb-4 whitespace-nowrap">
              Let’s Get Your Brand Notice
            </h3>
            <button className="underline font-bold text-lg">Contact us</button>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-end items-center">
          {/* Overlapping Image */}
          <img
            src={about2}
            className="w-72 h-96 object-cover absolute right-48 z-10 shadow-xl"
          />

          {/* Base Image */}
          <img
            src={about3}
            className="w-72 h-96 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
