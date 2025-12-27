import heroIllustration from '../../assets/about1.png';

export const AboutHero = () => {
  return (
    <section className="bg-[#FBF7F5] px-6 py-20 font-['Outfit']">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Innovative OOH strategies<br />Real World Impact
          </h1>
          <p className="text-gray-600 max-w-md">
            Helping brands connect with their audience through strategic
            out-of-home advertising and experimental marketing
          </p>
        </div>

        <img
          src={heroIllustration}
          alt="Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};
