import { Shield, DollarSign, Target, Clock, FileText } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    { icon: <Shield className="w-12 h-12 text-yellow-500 shrink-0" />, title: "Extremely Stringent Quality Standards", desc: "We uphold the highest quality standards to exceptional results" },
    { icon: <DollarSign className="w-12 h-12 text-green-500 shrink-0" />, title: "Right Budget for Right Execution", desc: "We deliver results within the optimal budget for unmatched value" },
    { icon: <Target className="w-12 h-12 text-purple-500 shrink-0" />, title: "Highly Skilled, Efficient & Experienced Planning & Buying Team", desc: "Our team comprised seasoned professionals adapt in strategic planning and procurement" },
    { icon: <Clock className="w-12 h-12 text-yellow-500 shrink-0" />, title: "Stringent Timeline Meetups", desc: "We adhere to strict timelines, ensuring timely delivery of all projects" },
    { icon: <FileText className="w-12 h-12 text-gray-800 shrink-0" />, title: "High Quality Post Production Documentation & Reporting", desc: "We provide detailed and accurate post production documentation and reporting" }
  ];

  return (
    <section id="about" className="bg-gray-100 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 border-4 border-gray-300 max-w-md">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">What set<br />us apart</h2>
        </div>
        <div className="space-y-4">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              {f.icon}
              <div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
