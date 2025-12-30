// import { AboutHero } from "../components/about/AboutHero";
// import { WhoWeAre } from "../components/about/WhoWeAre";
// import { WhatSetsUsApart } from "../components/about/WhatSetsUsApart";
// import { LeadersSection } from "../components/about/LeadersSection";
import { AboutCTA } from "../components/about/AboutCTA";
import Breadcrumb from "../components/Global/Breadcrumb";
import AboutIntroSection from "../components/about/AboutIntroSection";
import EmpoweringSection from "../components/about/EmpoweringSection";
import OurMissionSection from "../components/about/OurMissionSection";
import OurExpertTeamSection from "../components/about/OurExpertTeamSection";
import BrandEvolutionSection from "../components/about/BrandEvolutionSection";

export const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />
      <AboutIntroSection />
      <EmpoweringSection />
      <OurMissionSection />
      <BrandEvolutionSection />
      <OurExpertTeamSection />
      <AboutCTA />
    </>
  );
};
