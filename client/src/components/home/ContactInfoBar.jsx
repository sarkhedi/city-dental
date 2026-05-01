import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const PhoneIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
    <path d="M21 15.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.92z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3a7 7 0 0 1 6 6" stroke="#1784B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 7a3 3 0 0 1 2 2" stroke="#1784B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
    <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="1.5"/>
    <path d="M12 9v3l1.5 1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19.5 14.5A8.5 8.5 0 1 1 12 3.5" stroke="#1784B4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 16l1.5-1.5L21 16" stroke="#1784B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactInfoBar = () => {
  return (
    <div className="bg-[#0A2B42] py-6 border-t-2 border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Phone Block */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="shrink-0 transition-transform hover:scale-105">
              <PhoneIcon />
            </div>
            <div>
              <h4 className="text-[17px] text-white font-bold tracking-wide mb-1">Need Dental Services ?</h4>
              <p className="text-[14px] text-gray-200 font-medium tracking-wide">Call on : +(91) 97245-11575</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/10 mx-4 lg:mx-8"></div>

          {/* Clock Block */}
          <div className="flex items-center gap-4 w-full md:w-auto md:flex-1">
            <div className="shrink-0 transition-transform hover:scale-105">
              <ClockIcon />
            </div>
            <div>
              <h4 className="text-[17px] text-white font-bold tracking-wide mb-1">Opening Hours</h4>
              <p className="text-[14px] text-gray-200 font-medium tracking-wide">Mon to Sat 9:00AM to 9:00PM</p>
            </div>
          </div>

          {/* Button Block */}
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0">
            <motion.div 
              whileHover={{ y: -4 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                to="/book-appointment" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#1784B4] hover:bg-[#126b94] text-white pl-8 pr-2 py-2 rounded-full font-bold transition-colors shadow-md hover:shadow-lg text-[15px]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
                <span className="relative z-10 tracking-wide">Make An Appointment</span> 
                <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-300">
                  <FiArrowUpRight className="text-lg stroke-[3]" />
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactInfoBar;
