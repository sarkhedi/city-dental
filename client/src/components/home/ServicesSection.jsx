import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import { servicesList } from '../../data/services';

const ServicesSection = () => {
  const displayServices = servicesList.slice(0, 4);

  return (
    <section className="bg-[#F2F8FB] pt-20 lg:pt-28 pb-10 relative overflow-hidden">
      
      {/* Decorative stars */}
      <div className="absolute top-40 left-10 w-12 h-12 text-[#1784B4] opacity-80">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
      </div>
      <div className="absolute top-60 left-20 w-8 h-8 text-[#cae8f5] opacity-80">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
      </div>
      <div className="absolute bottom-40 right-20 w-16 h-16 text-[#cae8f5] opacity-60">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlus className="text-[#1784B4] text-xl" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Our Services</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] mb-4 tracking-tight"
          >
            <span className="text-[#1784B4]">High Quality</span> Services for You.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 font-medium text-[15px]"
          >
            We are committed to sustainability. eco-friendly initiatives.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {displayServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(23,132,180,0.1)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#0A2B42] text-[18px] font-bold mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-grow font-medium line-clamp-2">
                  {service.desc}
                </p>
                <Link to={`/service/${service.id}`} className="inline-flex items-center gap-2 text-[#1784B4] font-bold text-[14px] group-hover:text-[#0A2B42] transition-colors mt-auto w-fit">
                  Read More 
                  <div className="bg-[#1784B4] text-white p-1 rounded-full group-hover:bg-[#0A2B42] transition-colors">
                    <FiArrowUpRight className="text-sm stroke-[3]" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-[15px] font-medium max-w-[500px] mx-auto mb-8 leading-relaxed"
          >
            We believe in using the latest technology and techniques to ensure the best outcomes for our patients.
          </motion.p>
          <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/services" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#1784B4] text-white pl-8 pr-2 py-2 rounded-full font-bold shadow-md hover:shadow-lg text-[15px]">
              {/* Sweep Background */}
              <div className="absolute top-0 left-0 h-full w-full bg-[#0A2B42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              
              <span className="relative z-10 tracking-wide">View All Service</span> 
              <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-500">
                <FiArrowUpRight className="text-lg stroke-[3]" />
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
