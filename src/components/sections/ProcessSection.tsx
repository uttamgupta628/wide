import { useRef, useEffect, useState } from "react";

export const ProcessSection = () => {
  const steps = [
    { n: "01", t: "Documentation", s: "of Project" },
    { n: "02", t: "Detailed", s: "Planning" },
    { n: "03", t: "Improvement", s: "of Planning &", s2: "Finalization" },
    { n: "04", t: "Budget", s: "Finalization" },
    { n: "05", t: "Team Allocation &", s: "Production", s2: "Check" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalWidth = Array.from(container.children).reduce((sum, child) => {
      const el = child as HTMLElement;
      return sum + el.offsetWidth + 24; // gap between cards
    }, 0);

    const speed = 1; // pixels per frame
    let animationFrame: number;

    const animate = () => {
      setOffset((prev) => {
        let newOffset = prev + speed;
        if (newOffset >= totalWidth) newOffset = 0; // loop seamlessly
        return newOffset;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [steps]);

  return (
    <section
      id="process"
      className="px-4 sm:px-6 py-20 overflow-hidden relative"
      style={{ background: "linear-gradient(90deg, #FFE8E1 0%, #FFDA0080 100%)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">How We Work</h2>

        <div className="relative w-full overflow-hidden h-52">
          <div
            ref={containerRef}
            className="flex gap-6 absolute top-0 left-0"
            style={{
              transform: `translateX(${-offset}px)`,
              transition: "transform 0.016s linear",
            }}
          >
            {steps.concat(steps).map((step, i) => (
              <div
                key={i}
                className="bg-white w-55 sm:w-72  h-44 sm:h-52 rounded-[40px] shadow-lg flex flex-col items-center justify-center text-center px-4 shrink-0"
              >
                <div className="text-[#FFB800] font-bold text-2xl sm:text-3xl mb-3">{step.n}</div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
