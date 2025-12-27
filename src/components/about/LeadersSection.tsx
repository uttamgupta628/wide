import man from '../../assets/man.png';

const leaders = [
  { name: 'Asif Khan', role: 'PR Manager' },
  { name: 'Biswanath Sarkar', role: 'Accounts' },
  { name: 'Pritam Suin', role: 'Operations' },
  { name: 'Tirthal Basu', role: 'Accounts Manager' },
];

export const LeadersSection = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <h2 className="text-center font-bold text-4xl mb-2">Meet Our Leaders</h2>
      <p className="text-center text-gray-500 mb-10 text-3xl">
        The minds driving success at Wide Horizons
      </p>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {leaders.map((l, i) => (
    <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
      {/* Image takes full width of the card */}
      <img src={man} className="w-full object-cover" alt={l.name} />
      {/* Text section */}
      <div className="p-4">
        <h4 className="font-semibold">{l.name}</h4>
        <p className="text-sm text-gray-500">{l.role}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};
