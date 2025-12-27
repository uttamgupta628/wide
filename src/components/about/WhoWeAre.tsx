import founderImg from '../../assets/man.png';

export const WhoWeAre = () => {
  return (
    <section className="px-6 sm:px-16 py-16 bg-white">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <img
          src={founderImg}
          alt="Founder"
          className="rounded-xl shadow-lg w-full max-w-sm mx-auto lg:mx-0"
        />

        {/* Text Content */}
        <div>
          <h3 className="text-3xl sm:text-3xl font-bold mb-5">Who We are</h3>
          <p className="text-black mb-6">
            Wide Horizon is the founder, vision firm of joints of our brands
            get with one industry with same where we speak the
          </p>

          {/* Testimonial Box */}
          <div className="flex border-l-4 border-yellow-400 pl-4 bg-gray-50 p-6 rounded">
            <div>
              <p className="text-gray-700 italic mb-4">
                “Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit”
              </p>
              <p className="font-semibold">Nirmalya Basu</p>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
