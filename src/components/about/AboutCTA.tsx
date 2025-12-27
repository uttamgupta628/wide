import event from '../../assets/event1.png';

export const AboutCTA = () => {
  return (
    <section className="bg-[#FFF1A8] px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Let’s Get Your Brand Notice
          </h3>
          <button className="bg-black text-yellow-400 px-6 py-3 rounded">
            Contact us
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src={event} className="rounded-lg" />
          <img src={event} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};
