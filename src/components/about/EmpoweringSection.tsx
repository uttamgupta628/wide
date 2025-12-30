import topwave from "../../assets/top-wave.svg";
import bottomwave from "../../assets/bottom-wave.svg";
const EmpoweringSection = () => {
  return (
    <section className="relative w-full bg-[#F8F3F3] py-28 overflow-hidden">
      {/* TOP RIGHT IMAGE */}
      <img
        src={topwave} // replace with your top image
        alt="Top Decoration"
        className="absolute top-0 right-0 w-[320px] md:w-[500px]"
      />

      {/* BOTTOM LEFT IMAGE */}
      <img
        src={bottomwave} // replace with your bottom image
        alt="Bottom Decoration"
        className="absolute bottom-0 left-0 w-[320px] md:w-[500px]"
      />

      {/* CONTENT */}
      <div className="relative max-w-full mx-auto px-6">
        <h2
          className="bg-clip-text text-transparent text-[42px] font-medium"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFDA00 0%, #998300 100%)",
          }}
        >
          Empowering Your brand for Unmatched Growth
        </h2>

        <p className="text-black text-2xl leading-relaxed ">
          Our mission is to empower businesses by expanding their reach and
          enhancing their market presence. We achieve this through innovative
          advertising that connects with your audience and elevates your brand
          above the competition.
        </p>
      </div>
    </section>
  );
};

export default EmpoweringSection;
