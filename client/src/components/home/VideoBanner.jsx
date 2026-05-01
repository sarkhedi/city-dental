import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiPlay } from 'react-icons/fi';

const VideoBanner = () => {
  return (
    <section className="bg-[#F2F8FB] pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[40px] overflow-hidden min-h-[450px] flex items-center justify-center shadow-2xl"
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80" 
            alt="Dental Clinic" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Gradient (Teal/Dark Blue style from image) */}
          <div className="absolute inset-0 bg-[#0A2B42]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B42]/80 via-transparent to-[#1784B4]/60"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl py-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiPlus className="text-white text-xl" />
              <span className="text-white font-bold text-sm tracking-[0.2em] uppercase">Visit Clinic</span>
            </div>
            
            <h2 className="text-[32px] sm:text-[48px] md:text-[56px] font-extrabold text-white leading-tight mb-10 tracking-tight">
              Comprehensive Dental Care<br/> For All Ages
            </h2>
            
            <motion.a 
              href="https://www.youtube.com/watch?v=Y-x0efG1seA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-white text-[#1784B4] pl-6 pr-2 py-2 rounded-full font-bold shadow-2xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="text-[15px]">Play Video</span>
              <div className="bg-[#1784B4] text-white p-2.5 rounded-full group-hover:bg-[#0A2B42] transition-colors">
                <FiPlay className="text-lg ml-0.5" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoBanner;
