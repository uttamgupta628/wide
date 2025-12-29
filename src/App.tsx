import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import ContactUsPage from './pages/contactUs';
import TestimonialsPage from './pages/TestimonialsPage';
import ServicePage from './pages/ServicePage';
import { OOHAdvertising } from './components/service/OOH';
import { Layout } from './components/layout/Layout';
import { Corporate } from './components/service/corporate';
import { Branding } from './components/service/brand-activation';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/ooh" element={<OOHAdvertising />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/services/branding" element={<Branding />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
