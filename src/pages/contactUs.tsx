// import ContactUs from '../components/contactUs/ContactUs';
import ContactFormSection from "../components/contactUs/ContactFormSection";
import ContactSection from "../components/contactUs/ContactSection";
import EventSection from "../components/contactUs/EventSection";
import SuccessSection from "../components/contactUs/SuccessSection";
import Breadcrumb from "../components/Global/Breadcrumb";

const ContactUsPage = () => {
  return (
    // <ContactUs />
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      {/* // <ContactUs /> */}
      <EventSection />
      <ContactSection />
      <SuccessSection />
      <ContactFormSection />
    </>
  );
};

export default ContactUsPage;
