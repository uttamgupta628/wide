import Breadcrumb from '../components/Global/Breadcrumb';
import { ServiceGrid } from '../components/service/ServicesGrid';

const service = () => {
  return (
    <>
    <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
    <ServiceGrid/>
    </>
      
  );
};

export default service;
