import { useEffect } from 'react';
import './LandingPage.css';
import Navbar from './LandingNavbar';
import ImageCarousel from './LandingImageCarousel';
import WhyChooseUs from './WhyChooseUs ';
import IndustryVerticals from './IndustryVerticals';
import ImageContentSection from './ImageContentSection';
import CoreModules from './CoreModules';
import OptionalModules from './OptionalModules';
import Testimonials from './Testimonials';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='w-full'>
      <Navbar />
      <ImageCarousel />
      <WhyChooseUs />
      <IndustryVerticals />
      <ImageContentSection leftImage />
      <CoreModules />
      <OptionalModules />
      <Testimonials />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default LandingPage;
