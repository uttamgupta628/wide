import { TrendingUp, Handshake, ThumbsUp } from 'lucide-react';

export const CommitmentSection = () => {
  const commitments = [
    { icon: <TrendingUp className="w-16 h-16 text-yellow-500" />, title: "Customzied Strategies", desc: "Bespoke marketing strategies tailored to your brand's unique" },
    { icon: <Handshake className="w-16 h-16 text-yellow-500" />, title: "Transparent Workflow", desc: "Clear communication and honest process at every stage" },
    { icon: <ThumbsUp className="w-16 h-16 text-yellow-500" />, title: "Proven Results", desc: "Trackable success metrics that demonstrate real impact" }
  ];

  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Your Brand, Our Commitment</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
          At Wide horizons we take ownerships of your brands success as if it were our own, From Strategic Planning to flowless execution, we decided to delivering that results matter
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-6">{c.icon}</div>
              <h3 className="font-bold text-xl mb-4">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
