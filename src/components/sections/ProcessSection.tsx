export const ProcessSection = () => {
  const steps = [
    { n: "01", t: "Documentation", s: "of Project" },
    { n: "02", t: "Detailed", s: "Planning" },
    { n: "03", t: "Improvement", s: "of Planning &", s2: "Finalization" },
    { n: "04", t: "Budget", s: "Finalization" },
    { n: "05", t: "Team Allocation &", s: "Production", s2: "Check" },
  ];

  return (
    <section
      id="process"
      className="px-4 sm:px-6 py-24"
      style={{
        background: "linear-gradient(90deg, #FFE8E1 0%, #FFDA0080 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-20">
          How We Work
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {steps.map((step, i) => (
            <div key={i} className="group [perspective:1200px]">
              {/* Card */}
              <div
                className="relative
                  w-72 h-64 sm:w-80 sm:h-72
                  rounded-[40px]
                  transition-transform duration-1000 ease-in-out
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateX(180deg)_rotateY(180deg)]"
              >
                {/* Front */}
                <div
                  className="absolute inset-0 bg-white rounded-[40px]
                    shadow-xl flex flex-col items-center justify-center
                    text-center px-6
                    [backface-visibility:hidden]"
                >
                  <div className="text-[#FFB800] font-bold text-3xl mb-4">
                    {step.n}
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-snug">
                    {step.t}
                    <br />
                    {step.s}
                    {step.s2 && (
                      <>
                        <br />
                        {step.s2}
                      </>
                    )}
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-white
                    rounded-[40px]
                    shadow-xl
                    flex items-center justify-center
                    text-center px-6
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]"
                >
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    We carefully execute this step to ensure
                    smooth project delivery, quality output,
                    and timely completion.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
