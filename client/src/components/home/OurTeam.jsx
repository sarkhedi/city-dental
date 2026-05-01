import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Dr. Deep Sarkhedi",
    role: "B. D. S."
  },
  {
    name: "Dr. Khyati Sarkhedi",
    role: "B. D. S."
  },
  {
    name: "Dr. Khushbhu Sarkhedi",
    role: "B. D. S."
  }
];

const OurTeam = () => {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      
      {/* Decorative stars */}
      <div className="absolute top-20 right-20 w-8 h-8 text-[#cae8f5] opacity-60">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlus className="text-[#1784B4] text-xl" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Our Team</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] mb-4 tracking-tight"
          >
            <span className="text-[#1784B4]">Our Friendly</span> Dentists Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 font-medium text-[15px]"
          >
            Meet the dedicated dental professionals who care for your smile every day.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
{teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/5] shadow-md border-4 border-transparent group-hover:border-[#F2F8FB] transition-all duration-300 bg-[#cae8f5] flex items-center justify-center">
                <span className="text-[#1784B4] text-6xl font-extrabold">{member.name.charAt(0)}</span>
              </div>
              <div className="text-center">
                <h3 className="text-[20px] font-bold text-[#0A2B42] capitalize mb-1">{member.name}</h3>
                <p className="text-[#1784B4] font-bold text-[14px] uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
