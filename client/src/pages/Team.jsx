import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Dr. Deep Sarkhedi",
    designation: "General & Restorative Dentist",
    bio: "Dr. Deep Sarkhedi holds a Bachelor of Dental Surgery degree and brings expertise in general dentistry, dental restorations, and preventive care. He is committed to making every patient feel comfortable and confident in their treatment."
  },
  {
    name: "Dr. Khyati Sarkhedi",
    designation: "Cosmetic & Implant Dentist",
    bio: "Dr. Khyati Sarkhedi specialise in cosmetic dentistry and dental implants. With a keen eye for aesthetics and a gentle approach, she transforms smiles while ensuring patient comfort at every step."
  },
  {
    name: "Dr. Khushbhu Sarkhedi",
    designation: "Orthodontist & Paediatric Dentist",
    bio: "Dr. Khushbhu Sarkhedi is passionate about children's dental health and orthodontic care. Her warm and friendly demeanour helps young patients feel at ease, while her skill ensures healthy, beautiful smiles for life."
  }
];

const Team = () => {
  return (
    <div className="bg-white">

      {/* ── Page Header ─────────────────────────────── */}
      <div className="bg-[#F2F8FB] pt-32 pb-16 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1784B4]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-12 h-12 text-[#1784B4] opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <FiPlus className="text-[#1784B4] text-lg" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Our Specialists</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] sm:text-[52px] font-extrabold text-[#0A2B42] tracking-tight mb-4 leading-tight"
          >
            Meet Our <span className="text-[#1784B4]">Dental Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-[16px] max-w-2xl mx-auto leading-relaxed"
          >
            Our experienced and compassionate team of dentists is dedicated to delivering the highest standard of care for you and your family.
          </motion.p>
        </div>
      </div>

      {/* ── Team Cards ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F2F8FB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.55 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(23,132,180,0.08)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(23,132,180,0.14)] transition-all duration-400"
              >
                {/* Info */}
                <div className="p-7">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-[#1784B4]/10 flex items-center justify-center">
                      <span className="text-[#1784B4] text-3xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-[#0A2B42] text-[22px] font-extrabold mb-1 text-center">{member.name}</h3>
                  <p className="text-[#1784B4] font-bold text-[13px] uppercase tracking-wider mb-4 text-center">{member.designation}</p>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-medium text-center">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 font-medium text-[15px] mb-6 max-w-md mx-auto">
              Ready to meet our team in person? Book your appointment today.
            </p>
            <Link
              to="/book-appointment"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#1784B4] text-white pl-8 pr-2 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg text-[15px]"
            >
              <div className="absolute top-0 left-0 h-full w-full bg-[#0A2B42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
              <span className="relative z-10 tracking-wide">Book Appointment</span>
              <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-500">
                <FiArrowUpRight className="text-lg stroke-[3]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Team;
