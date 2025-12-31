import { ServicesSection } from "../components/sections/ServicesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { ClientsSection } from "../components/sections/ClientsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { TeamsSection } from "../components/sections/TeamsSection";
import { EventsSection } from "../components/sections/EventsSection";
import { CommitmentSection } from "../components/sections/CommitmentSection";
import { CTASection } from "../components/sections/CTASection";
import VideoShrinkScroll from "../components/sections/VideoShrinkScroll";
import ScrollToTopButton from "../components/sections/ScrollToTopButton";


import { clients } from "../data/clientsData";

import man1 from "../assets/man1.png";
import event1 from "../assets/event1.png";
import Banner from "../components/sections/Banner";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";

const HomePage = () => {
  const teamImages = [
  { src: man1, name: "Nirmalya Basu", role: "Founder & CEO" },
  { src: team1, name: "Sweta Bhattacharya", role: "Founder & COO" },
  { src: team2, name: "Asif Khan", role: "PR Manager" },
  { src: team3, name: "Biswanath Sarkar", role: "Accounts" },
  { src: team4, name: "Pritam Suin", role: "Operations" },
  { src: team5, name: "Titas Basu", role: "Account Manager" },
];


  const eventImages = [event1, event2, event3, event4, event5];

  return (
    <>
      {/* <HeroSection /> */}
      <Banner />
      <VideoShrinkScroll />
      <ServicesSection />
      <ProcessSection />
      <ClientsSection clients={clients} />
      <AboutSection />
      <TeamsSection images={teamImages} />
      <EventsSection images={eventImages} />
      <CommitmentSection />
      <CTASection />
      
    <ScrollToTopButton />
    </>
  );
};

export default HomePage;
