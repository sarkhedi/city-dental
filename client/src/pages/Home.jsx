import React from 'react';
import Hero from '../components/home/Hero';
import ContactInfoBar from '../components/home/ContactInfoBar';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import VideoBanner from '../components/home/VideoBanner';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import OurTeam from '../components/home/OurTeam';
import Testimonial from '../components/home/Testimonial';
import BlogSection from '../components/home/BlogSection';
import ContactNow from '../components/home/ContactNow';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ContactInfoBar />
      <AboutSection />
      <ServicesSection />
      <VideoBanner />
      <StatsSection />
      <WhyChooseUs />
      <HowItWorks />
      <OurTeam />
      <Testimonial />
      <BlogSection />
      <ContactNow />
    </div>
  );
};

export default Home;
