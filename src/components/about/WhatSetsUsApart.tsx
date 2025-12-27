import { CurrencyDollarIcon, ShieldCheckIcon, DocumentTextIcon, CalendarIcon } from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Right Budget for Right Execution',
    desc: 'We ensure cost effective solutions tailored to your needs',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Extremely Stringent Quality Standards',
    desc: 'We adhere to highest level of quality assurance',
    icon: ShieldCheckIcon,
  },
  {
    title: 'High Quality Post Production Documentation & Reporting',
    desc: 'We provide thorough reports and documentation post project executions',
    icon: DocumentTextIcon,
  },
  {
    title: 'Stringent Timeline Meetups',
    desc: 'We prioritize timely delivery of all projects',
    icon: CalendarIcon,
  },
];

export const WhatSetsUsApart = () => {
  return (
    <section className="bg-[#FBF7F5] px-6 py-20">
      <h2 className="text-center font-bold text-2xl mb-12">
        WHAT SET US APART
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-center  gap-4 h-35">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
