import man from "../../assets/man1.png";
const OurExpertTeamSection = () => {
  return (
    <section className="w-full bg-[#fbf6f3] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h4 className="text-5xl font-medium text-black mb-2">
          OUR <span className="text-[#FFCD29]">EXPERT</span> TEAM
        </h4>

        <p className="text-[#686775] font-light text-3xl mb-16">
          The minds driving success at Wide Horizons
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {[
            { name: "Asif Khan", role: "PR Manager", img: man },
            {
              name: "Biswanath Sarkar",
              role: "Accounts",
              img: man,
            },
            {
              name: "Pritam Suin",
              role: "Operations",
              img: man,
            },
            {
              name: "Tital Basu",
              role: "Accounts Manager",
              img: man,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="py-4">
                <h3 className="font-semibold text-2xl text-black">
                  {member.name}
                </h3>
                <p className="text-xl font-light text-[#797979]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#FFCD29] text-black font-medium px-10 py-3 rounded-full text-xl cursor-pointer hover:opacity-90 transition">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default OurExpertTeamSection;
