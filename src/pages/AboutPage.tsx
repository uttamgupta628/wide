import { Layout } from '../components/layout/Layout';
import { AboutHero } from '../components/about/AboutHero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { WhatSetsUsApart } from '../components/about/WhatSetsUsApart';
import { LeadersSection } from '../components/about/LeadersSection';
import { AboutCTA } from '../components/about/AboutCTA';

export const AboutPage = () => {
  return (
    <Layout>
      <AboutHero />
      <WhoWeAre />
      <WhatSetsUsApart />
      <LeadersSection />
      <AboutCTA />
    </Layout>
  );
};
