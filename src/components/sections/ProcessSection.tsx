export const ProcessSection = () => {
  const steps = [
    { n: "01", t: "Documentation", s: "of Project" },
    { n: "02", t: "Detailed", s: "Planning" },
    { n: "03", t: "Improvement", s: "of Planning &", s2: "Finalization" },
    { n: "04", t: "Budget", s: "Finalization" },
    { n: "05", t: "Team Allocation &", s: "Production", s2: "Check" }
  ];

  return (
    <section id="process" className="px-4 sm:px-6 py-20" style={{ background: "linear-gradient(90deg, #FFE8E1 0%, #FFDA0080 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">How We Work</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white w-44 sm:w-52 h-44 sm:h-52 rounded-[40px] shadow-lg flex flex-col items-center justify-center text-center px-4">
              <div className="text-[#FFB800] font-bold text-2xl sm:text-3xl mb-3">{step.n}</div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                {step.t}<br />{step.s}
                {step.s2 && <><br />{step.s2}</>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};