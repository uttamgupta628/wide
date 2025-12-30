export const ProcessSection = () => {
  const steps = [
    { n: "01", t: "Documentation", s: "of Project" },
    { n: "02", t: "Detailed", s: "Planning" },
    { n: "03", t: "Improvement", s: "of Planning &", s2: "Finalization" },
    { n: "04", t: "Budget", s: "Finalization" },
    { n: "05", t: "Team Allocation &", s: "Production", s2: "Check" },
  ];

  return (
    <>
      {/* Scoped animation styles */}
      <style>{`
        .flip-card {
          perspective: 1200px;
        }

        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flip-card:hover .flip-card-inner {
          transform: rotate3d(1, 1, 0, 180deg);
        }

        .flip-face {
          backface-visibility: hidden;
        }

        .flip-back {
          transform: rotate3d(1, 1, 0, 180deg);
        }
      `}</style>

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
              <div key={i} className="flip-card">
                {/* Card */}
                <div
                  className="
                    flip-card-inner
                    relative
                    w-72 h-64 sm:w-80 sm:h-72
                    rounded-[40px]
                  "
                >
                  {/* Front */}
                  <div
                    className="
                      flip-face
                      absolute inset-0
                      bg-white
                      rounded-[40px]
                      shadow-xl
                      flex flex-col items-center justify-center
                      text-center px-6
                    "
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
                    className="
                      flip-face flip-back
                      absolute inset-0
                      bg-white
                      rounded-[40px]
                      shadow-xl
                      flex items-center justify-center
                      text-center px-6
                    "
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
    </>
  );
};
