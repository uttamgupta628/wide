import React, { useState } from "react";
import {
  ArrowRight,
  Flag,
  Calendar,
  Megaphone,
  Star,
  Mic,
  Edit3,
  Menu,
  X,
  Shield,
  DollarSign,
  Target,
  Clock,
  FileText,
  TrendingUp,
  Handshake,
  ThumbsUp,
  Facebook,
  Instagram,
} from "lucide-react";
import heroImg from "./assets/hero.png";
import fortisImg from "./assets/fortis.png";
import govinda from "./assets/govinda.png";
import glout from "./assets/glout.png";
import z from "./assets/z.png";
import itc from "./assets/itc.png";
import nk from "./assets/nk.png";
import abp from "./assets/abp.png";
import apollo from "./assets/apollo.png";
import hoichoi from "./assets/hoichoi.png";
import adani from "./assets/adani.png";
import cipla from "./assets/cipla.png";
import pc from "./assets/pc.png";
import mpj from "./assets/mpj.png";
import svf from "./assets/svf.png";
import man1 from './assets/man.png';
import event1 from './assets/event1.png';



const images = [man1, man1, man1, man1, man1];
const images1 = [event1, event1, event1, event1, event1];
const WideHorizonsLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-gray-800 text-gray-400 px-4 sm:px-6 py-2 text-sm">
        Home
      </div>

      {/* Header */}
      <header className="bg-yellow-400 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-xl sm:text-2xl font-black leading-none text-white">
              WIDE
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-white">
              HORIZONS
            </div>
          </div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
            <a href="#about" className="text-blue-600 hover:text-blue-800">
              About
            </a>
            <a href="#services" className="text-blue-600 hover:text-blue-800">
              Services
            </a>
            <a href="#portfolio" className="text-blue-600 hover:text-blue-800">
              Portfolio
            </a>
            <a href="#process" className="text-blue-600 hover:text-blue-800">
              Process
            </a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800">
              Contact
            </a>
          </nav>

          <button className="hidden lg:block bg-gray-900 text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800">
            Contact us
          </button>

          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3">
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#about" className="text-black">
              About
            </a>
            <a href="#services" className="text-black">
              Services
            </a>
            <a href="#portfolio" className="text-black">
              Portfolio
            </a>
            <a href="#process" className="text-black">
              Process
            </a>
            <a href="#contact" className="text-black">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-yellow-400 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="rakkas-regular text-[80px] leading-tight mb-8 text-black">
                Right Budget
                <br />
                for Right Execution
              </h1>

              <button className="border border-black text-black px-6 py-3 rounded font-medium flex items-center gap-2">
                Contact us <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full lg:w-1/2 relative">
              {/* Top card */}
              <div className="relative bg-gray-800 text-white px-8 py-12 rounded-lg shadow-2xl z-30 w-[90%] ml-auto">
                <span className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></span>
                <p className="text-base">widest network of media</p>
              </div>

              {/* Middle card */}
              <div className="relative bg-yellow-300 px-8 py-10 rounded-lg shadow-xl z-20 w-[95%] -mt-4 ml-8">
                <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
                <p className="text-base text-black">
                  widest repertoire of customization
                </p>
              </div>

              {/* Bottom card */}
              <div className="relative bg-yellow-100 px-8 py-10 rounded-lg shadow-lg z-10 w-full -mt-4 ml-4">
                <span className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></span>
                <p className="text-base text-black">
                  widest repertoire of customization
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full mt-16 sm:mt-24 overflow-hidden rounded-xl min-h-70 sm:min-h-85">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImg})` }}
            />

            {/* Yellow overlay */}
            <div className="absolute inset-0 bg-[#FFDA00] opacity-75"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-6 sm:px-12 py-10 sm:py-14 text-center">
              <span className="absolute left-6 top-6 text-5xl sm:text-7xl font-serif text-[#9C8600]">
                “
              </span>

              <p className="text-sm sm:text-base leading-relaxed text-[#9C8600] font-medium">
                Help our Clients to reach their business goals through our
                services in OOH communications, education, measurement, rewards
                and events to inspire their employee, channel partners and
                customers.
              </p>

              <span className="absolute right-6 bottom-6 text-5xl sm:text-7xl font-serif text-[#9C8600]">
                ”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHAT WE DO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <Flag className="w-10 h-10" />, title: "OOH" },
              {
                icon: <Calendar className="w-10 h-10" />,
                title: "Corporate",
                sub: "Events",
              },
              {
                icon: <Megaphone className="w-10 h-10" />,
                title: "Brand",
                sub: "Activations",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Celebrity",
                sub: "Management",
              },
              {
                icon: <Mic className="w-10 h-10" />,
                title: "Public",
                sub: "Relations (PR)",
              },
              { icon: <Edit3 className="w-10 h-10" />, title: "Branding" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-lg transition text-center group"
              >
                <div className="flex justify-center mb-4 sm:mb-6 text-gray-800 group-hover:text-yellow-500">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-base sm:text-lg">
                  {s.title}
                  {s.sub && (
                    <>
                      <br />
                      {s.sub}
                    </>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="px-4 sm:px-6 py-20"
        style={{
          background: "linear-gradient(90deg, #FFE8E1 0%, #FFDA0080 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How We Work
          </h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { n: "01", t: "Documentation", s: "of Project" },
              { n: "02", t: "Detailed", s: "Planning" },
              {
                n: "03",
                t: "Improvement",
                s: "of Planning &",
                s2: "Finalization",
              },
              { n: "04", t: "Budget", s: "Finalization" },
              {
                n: "05",
                t: "Team Allocation &",
                s: "Production",
                s2: "Check",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white w-44 sm:w-52 h-44 sm:h-52
                     rounded-[40px] shadow-lg
                     flex flex-col items-center justify-center text-center px-4"
              >
                <div className="text-[#FFB800] font-bold text-2xl sm:text-3xl mb-3">
                  {step.n}
                </div>

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
      </section>

      {/* Clients - keeping previous code */}
      <section id="portfolio" className="bg-white px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-4">
            {[
              { name: "Fortis Hospital", img: fortisImg },
              { name: "NuVoCo", img: "/images/nuvoco.png" },
              { name: "Svf", img: svf },
              { name: "GOVINDA", img: govinda },
              { name: "GLOUT", img: glout },
              { name: "Z", img: z },
              { name: "itc", img: itc },
              { name: "NK", img: nk },
              { name: "abp", img: abp },
              { name: "Apollo", img: apollo },
              { name: "Hoichoi", img: hoichoi },
              { name: "adani", img: adani },
              { name: "Cipla", img: cipla },
              { name: "PC EXPRESS", img: pc },
              { name: "mpj", img: mpj },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition min-h-25 sm:min-h-30"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="max-h-12 sm:max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="about" className="bg-gray-100 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl shadow-lg p-12 border-4 border-gray-300 max-w-md">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              What set
              <br />
              us apart
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <Shield className="w-12 h-12 text-yellow-500 shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Extremely Stringent Quality Standards
                </h3>
                <p className="text-gray-600 text-sm">
                  We uphold the highest quality standards to exceptional results
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <DollarSign className="w-12 h-12 text-green-500 shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Right Budget for Right Execution
                </h3>
                <p className="text-gray-600 text-sm">
                  We deliver results within the optimal budget for unmatched
                  value
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <Target className="w-12 h-12 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Highly Skilled, Efficient & Experienced Planning & Buying Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team comprised seasoned professionals adapt in strategic
                  planning and procurement
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <Clock className="w-12 h-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Stringent Timeline Meetups
                </h3>
                <p className="text-gray-600 text-sm">
                  We adhere to strict timelines, ensuring timely delivery of all
                  projects
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <FileText className="w-12 h-12 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  High Quality Post Production Documentation & Reporting
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide detailed and accurate post production documentation
                  and reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-gray-100 px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Teams
        </h2>
        <div className="bg-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="flex justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
            {images.map((img, i) => {
              const isCenter = i === 2; 
              return (
                <div
                  key={i}
                  className={`transition-all duration-300 transform ${
                    isCenter
                      ? 'w-64 h-64 scale-110'
                      : 'w-48 h-48 opacity-70'
                  } rounded-lg overflow-hidden flex-shrink-0`}
                >
                  <img
                    src={img}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>


      {/* Events */}
      <section className="bg-white px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our beloved events
        </h2>
        <div className="  pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large first image */}
          <div className="lg:row-span-2 rounded-xl overflow-hidden">
            <img
              src={images[0]}
              alt="Event 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Remaining images */}
          {images1.slice(1).map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`Event ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Commitment */}
      <section className=" px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
            Your Brand, Our Commitment
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
            At Wide horizons we take ownerships of your brands success as if it
            were our own, From Strategic Planning to flowless execution, we
            decided to delivering that results matter
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-16 h-16 text-yellow-500" />,
                title: "Customzied Strategies",
                desc: "Bespoke marketing strategies tailored to your brand's unique",
              },
              {
                icon: <Handshake className="w-16 h-16 text-yellow-500" />,
                title: "Transparent Workflow",
                desc: "Clear communication and honest process at every stage",
              },
              {
                icon: <ThumbsUp className="w-16 h-16 text-yellow-500" />,
                title: "Proven Results",
                desc: "Trackable success metrics that demonstrate real impact",
              },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-6">{c.icon}</div>
                <h3 className="font-bold text-xl mb-4">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className=" px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-r from-yellow-200 to-yellow-100 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-full bg-yellow-400 transform -skew-x-12"></div>
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to make an impact in the real world?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                At Wide Horizons we take ownersing of your brand's success us if
                it were our own. From strategic planning to flawless execution,
                we are dedicated to delivering results that matter
              </p>
            </div>
            <button className="relative z-10 bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-bold">
              Start your Campaign
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#3D3533] px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-black text-white">WIDE</div>
            <div className="text-xs font-bold tracking-[0.3em] text-white">
              HORIZONS
            </div>
            <div className="text-[10px] text-gray-400 mt-1">
              AN ANTHERA PRIVATE LIMITED
            </div>
            <div className="flex gap-4 mt-6">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <div className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer">
                𝕏
              </div>
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Pages</h4>
            <div className="space-y-2 text-yellow-400 text-sm">
              <div>Home</div>
              <div>About us</div>
              <div>Services</div>
              <div>Portfolio</div>
              <div>Process</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>Contact us</div>
              <div>Privacy Policy</div>
              <div>Terms & Condition</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact us</h4>
            <div className="space-y-2 text-yellow-400 text-sm">
              <div>+91-9831047413/8910665795</div>
              <div>nirmalya@widehorizons.co.in</div>
              <div className="text-gray-400">
                Godrej Waterside, Tower -II, 12th Floor
                <br />
                Block-DP, Sector-V, Kolkata - 700091
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-gray-700">
          All rights to reserved @ 2025
        </div>
      </footer>
    </div>
  );
};

export default WideHorizonsLanding;
