import man1 from "../../assets/man.png";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import { motion } from "framer-motion";

const team = [
  {
    name: "Nirmalya Basu",
    role: "Founder & CEO",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: man1,
    align: "left",
  },
  {
    name: "Sweta Bhattacharya",
    role: "Founder & COO",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: team1,
    align: "right",
  },
  {
    name: "Asif Khan",
    role: "PR Manager",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: team2,
    align: "left",
  },
  {
    name: "Biswanath Sarkar",
    role: "Accounts",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: team3,
    align: "right",
  },
  {
    name: "Pritam Suin",
    role: "Operations",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: team4,
    align: "left",
  },
  {
    name: "Tital Basu",
    role: "Accounts Manager",
    quote:
      "Lorem ipsum dolor sit lorem ipsum dolor sit amet, lorem dolor sit amet, dolor sit amet, lorem dolor amit, lorem sit dolor amit",
    image: team5,
    align: "right",
  },
];

export const Portfolio = () => {
  return (
    <section className="bg-[#faf7f4] pb-20 px-4 sm:px-0">
      {/* Breadcrumb */}
      <div className="bg-[#3C3533] text-white text-sm py-4 tracking-wide w-full mb-5">
        <div className="px-4">
          <span className="text-gray-400">Home</span>
          <span className="mx-2">&gt;</span>
          <span>Portfolio</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We are</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A dedicated group building meaningful solutions with purpose and
            care.
          </p>
        </div>

        {/* Team blocks */}
        <div className="space-y-28 sm:space-y-20">
          {team.map((member, i) => {
            const isLeft = member.align === "left";

            return (
              <div
                key={i}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-70 sm:w-[320px] h-90 object-cover rounded-2xl shadow-md"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ x: isLeft ? 120 : -120, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
                >
                  <span className="text-6xl text-gray-400 absolute -top-8 left-0">
                    “
                  </span>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-1 h-16 bg-yellow-400"></div>

                    <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm font-bold text-gray-700">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-6xl text-gray-400 absolute -bottom-8 right-0">
                    ”
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
