import Breadcrumb from "../components/Global/Breadcrumb";
import { ServicesSection } from "../components/sections/ServicesSection";

const service = () => {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesSection />
    </>
  );
};

export default service;
