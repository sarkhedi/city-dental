import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import { FaCalendarAlt, FaStethoscope, FaHandHoldingMedical } from 'react-icons/fa';

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Book an Appointment",
      desc: "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: FaCalendarAlt
    },
    {
      title: "What conditions can manual therapy treat?",
      desc: "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: FaStethoscope
    },
    {
      title: "Expert Care",
      desc: "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: FaHandHoldingMedical
    }
  ];

  return (
    <section className="bg-[#F2F8FB] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(10,43,66,0.15)]">
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1784B4] blur-[80px] opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="How it works" 
                className="w-full h-full min-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-[#0A2B42]/5"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <FiPlus className="text-[#1784B4] text-xl" />
                <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">How It Work</span>
              </div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#0A2B42] mb-6 tracking-tight leading-[1.1]">
                <span className="text-[#1784B4]">What We Do</span> for Your Teeth
              </h2>
              <p className="text-gray-500 font-medium text-[15px] leading-relaxed max-w-[500px]">
                We are committed to sustainability. Our clinic practices eco-friendly initiatives like digital records to reduce paper waste and energy-efficient equipment.
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-5">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-[24px] border-2 ${isOpen ? 'border-[#1784B4] shadow-lg' : 'border-transparent shadow-sm'} overflow-hidden transition-all duration-300`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none"
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#1784B4]' : 'bg-[#F2F8FB]'}`}>
                          <item.icon className={`text-2xl transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#1784B4]'}`} />
                        </div>
                        <h3 className={`text-[17px] sm:text-[19px] font-bold capitalize transition-colors duration-300 pr-2 ${isOpen ? 'text-[#1784B4]' : 'text-[#0A2B42]'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#1784B4] text-white rotate-180' : 'bg-[#F2F8FB] text-[#0A2B42]'}`}>
                        <FiChevronDown className="text-lg" />
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-7 pt-1 sm:pl-[100px] text-gray-500 font-medium text-[14px] sm:text-[15px] leading-relaxed">
                            {item.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
