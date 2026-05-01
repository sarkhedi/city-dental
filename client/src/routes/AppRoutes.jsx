import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Contact from '../pages/Contact';
import BookAppointment from '../pages/BookAppointment';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FAQs from '../pages/FAQs';
import Team from '../pages/Team';
import ScrollToTop from './ScrollToTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
