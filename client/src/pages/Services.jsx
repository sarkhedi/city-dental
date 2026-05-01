import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/services';

const Services = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#0A2B42] py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1784B4] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1784B4] rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1784B4] font-bold tracking-[0.2em] uppercase mb-4"
          >
            What We Do
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Our Dental <span className="text-[#1784B4]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-medium max-w-2xl mx-auto text-lg"
          >
            We offer a comprehensive range of dental treatments using the latest technology to ensure your smile is healthy and beautiful.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {servicesList.map((service, index) => (
<motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(23,132,180,0.15)] transition-all duration-500 group flex flex-col h-full border border-gray-100 relative"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A2B42] to-[#1784B4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden rounded-t-[20px]">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B42]/90 via-[#0A2B42]/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[18px] font-bold text-[#0A2B42] mb-2 group-hover:text-[#1784B4] transition-colors duration-300 line-clamp-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[14px] leading-relaxed mb-5 flex-grow line-clamp-3">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 mt-auto">
                    <Link 
                      to={`/service/${service.id}`}
                      className="px-4 py-2.5 rounded-full border-2 border-[#1784B4] text-[#1784B4] font-bold text-[12px] hover:bg-[#1784B4] hover:text-white transition-all duration-300"
                    >
                      Read More
                    </Link>
                    <Link to="/book-appointment" 
                      className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0A2B42] to-[#1784B4] text-white font-bold text-[12px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span className="flex items-center gap-1.5">
                        Book Treatment
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1784B4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Need a specific dental treatment?</h2>
          <p className="text-[#E0F2F9] font-medium max-w-2xl mx-auto mb-8 text-lg">
            Our expert team is here to provide you with the best care possible. Schedule your visit today and let us take care of your smile.
          </p>
          <Link 
            to="/book-appointment" 
            className="inline-block bg-white text-[#1784B4] hover:bg-[#0A2B42] hover:text-white font-bold text-[16px] px-10 py-4 rounded-xl transition-all duration-300 shadow-xl"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;





