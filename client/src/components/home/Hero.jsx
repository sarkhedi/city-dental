import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import heroImg from '../../assets/images/hero-img.jpeg';
import toothIcon1 from '../../assets/images/icon-hero-theeth-1.svg';
import toothIcon2 from '../../assets/images/icon-hero-theeth-2.svg';
import toothIcon3 from '../../assets/images/icon-hero-theeth-3.svg';
import heroBg from '../../assets/images/hero-bg.svg';

const Hero = () => {
  return (
    <section 
      className="relative bg-[#F2F8FB] bg-cover bg-center bg-no-repeat pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Decorative Background Elements */}
      <motion.div style={{ willChange: 'transform' }} animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-32 left-[48%] w-14 h-14 text-[#1784B4] opacity-90 hidden lg:block">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
      </motion.div>
      <motion.div style={{ willChange: 'transform' }} animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute bottom-24 left-[30%] w-10 h-10 text-[#c2e4f3] opacity-80 hidden lg:block">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
      </motion.div>
      <div className="absolute top-40 left-10 w-12 h-12 text-[#c2e4f3] opacity-70">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
      </div>
      <div className="absolute top-32 right-12 w-10 h-10 text-[#c2e4f3] opacity-70 hidden md:block">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
      </div>
      <div className="absolute bottom-32 right-8 w-20 h-20 text-[#c2e4f3] opacity-80">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] pt-10"
          >
<motion.h1 
              className="text-[44px] sm:text-5xl lg:text-[62px] font-extrabold text-[#0A2B42] leading-[1.15] mb-6 tracking-tight"
            >
              {/* Word 1: Experience - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="inline-block mr-[0.2em]"
              >
                Experience{" "}
              </motion.span>
               
              {/* Word 2: Dental - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="inline-block text-[#1784B4] mr-[0.2em]"
              >
                Dental
              </motion.span>
               
              {/* Word 3: Excellence - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="inline-block mr-[0.2em]"
              >
                Excellence
              </motion.span>
               
              {/* Word 4: with - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="inline-block"
              >
                with
              </motion.span>{" "}
               
              {/* Word 5: a - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="inline-block text-[#1784B4]"
              >
                a
              </motion.span>{" "}
               
              {/* Word 6: Gentle - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="inline-block"
              >
                Gentle
              </motion.span>{" "}
               
              {/* Word 7: Touch - Fade + Slide Up */}
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                className="inline-block"
              >
                Touch
              </motion.span>
</motion.h1>

              {/* Paragraph animation - same style */}
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] text-gray-500 mb-10 max-w-[560px] leading-relaxed font-medium"
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            </motion.p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/book-appointment"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#1784B4] text-white pl-8 pr-2 py-2 rounded-full font-bold shadow-md hover:shadow-lg text-[15px]"
                >
                  {/* Sweep Background */}
                  <div className="absolute top-0 left-0 h-full w-full bg-[#0A2B42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  
                  <span className="relative z-10 tracking-wide">Make An Appointment</span>
                  <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-500">
                    <FiArrowUpRight className="text-lg stroke-[3]" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <span className="text-[#0A2B42] font-semibold text-[15px]">Google Rating</span>
              <span className="text-[#F59E0B] font-bold text-[15px]">4.5</span>
              <div className="flex text-[#F59E0B] gap-1 text-[13px]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-[#0A2B42] font-semibold text-[14px] sm:ml-2">Based On 492 Reviews</span>
            </motion.div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%] relative mt-10 lg:mt-0 flex justify-center lg:justify-end h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full max-w-[500px]">

              {/* Doctor Image */}
              <img
                src={heroImg}
                alt="Dr. Khyati Sarkhedi"
                className="w-full h-full object-cover object-top rounded-[40px] shadow-sm z-10 relative border-4 border-white"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />

              {/* Floating Profile Card */}
              <div className="absolute bottom-16 -left-6 bg-white p-3 pr-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] flex items-center gap-4 z-20 border border-gray-50">
                <img
                  src={heroImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-xl object-cover object-top"
                />
                <div>
                  <h4 className="text-[#0A2B42] font-bold text-[14px]">Dr. Khyati Sarkhedi</h4>
                  <p className="text-[#1784B4] text-[12px] font-semibold">Dentist</p>
                </div>
              </div>

              {/* Floating Icon 1 (Top Right) */}
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 -right-4 w-[64px] h-[64px] bg-white rounded-full shadow-[0_10px_30px_rgba(23,132,180,0.12)] flex items-center justify-center z-20 border border-gray-50"
              >
                <img src={toothIcon1} alt="Dental Service" className="w-8 h-8" />
              </motion.div>

              {/* Floating Icon 2 (Middle Left) */}
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[45%] -left-12 w-[72px] h-[72px] bg-white rounded-full shadow-[0_10px_30px_rgba(23,132,180,0.12)] flex items-center justify-center z-20 border border-gray-50"
              >
                <img src={toothIcon2} alt="Tooth Protection" className="w-9 h-9" />
              </motion.div>

              {/* Floating Icon 3 (Bottom Right) */}
              <motion.div
                style={{ willChange: 'transform' }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -right-6 w-[76px] h-[76px] bg-white rounded-full shadow-[0_10px_30px_rgba(23,132,180,0.12)] flex items-center justify-center z-20 border border-gray-50"
              >
                <img src={toothIcon3} alt="Dental Implant" className="w-10 h-10" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
