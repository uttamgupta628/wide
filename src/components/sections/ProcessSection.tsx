export const ProcessSection = () => {
  const steps = [
    {
      n: "01",
      t: "Documentation",
      s: "of Project",
      desc: "We understand client objectives, campaign goals, target audience, and execution requirements in detail.",
    },
    {
      n: "02",
      t: "Detailed",
      s: "Planning",
      desc: "We design a strategic  plan with ideal locations, formats, timelines, and media mix.",
    },
    {
      n: "03",
      t: "Improvement",
      s: "of Planning &",
      s2: "Finalization",
      desc: "We refine the plan based on insights, feasibility, and client feedback for maximum impact.",
    },
    {
      n: "04",
      t: "Budget",
      s: "Finalization",
      desc: "We optimize costs and finalize budgets ensuring transparency and value-driven execution.",
    },
    {
      n: "05",
      t: "Team Allocation &",
      s: "Production",
      s2: "Check",
      desc: "We assign expert teams and ensure production quality meets brand and media standards.",
    },
    {
      n: "06",
      t: "Post Documentation",
      // s: "Production",
      // s2: "Check",
      desc: "We provide performance reports, visual proofs, and detailed post-campaign documentation.",
    },
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
          background:
            "linear-gradient(90deg, #FFDA0080 0%, #FFE8E1 50%, #FFDA0080 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-20">How We Work</h2>

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
                      {step.desc}
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
