import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ClientsSection } from '../components/sections/ClientsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TeamsSection } from '../components/sections/TeamsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { CommitmentSection } from '../components/sections/CommitmentSection';
import { CTASection } from '../components/sections/CTASection';
import VideoShrinkScroll from '../components/sections/VideoShrinkScroll';

import { clients } from '../data/clientsData';

import man1 from '../assets/man.png';
import event1 from '../assets/event1.png';

const HomePage = () => {
  const teamImages = [man1, man1, man1, man1, man1];
  const eventImages = [event1, event1, event1, event1, event1];

  return (
    <Layout>
      <HeroSection  />
      <VideoShrinkScroll/>
      <ServicesSection />
      <ProcessSection />
      <ClientsSection clients={clients} />
      <AboutSection />
      <TeamsSection images={teamImages} />
      <EventsSection images={eventImages} />
      <CommitmentSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
