import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    "Experienced Team",
    "Comprehensive Services",
    "State-Of-The-Art Technology",
    "Emergency Dental Services"
  ];

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative background stars */}
      <div className="absolute top-20 left-10 w-8 h-8 text-[#c2e4f3] opacity-60">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
      </div>
      <div className="absolute bottom-20 left-20 w-12 h-12 text-[#c2e4f3] opacity-50">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"/></svg>
      </div>
      <div className="absolute top-1/2 left-1/3 w-10 h-10 text-[#e2f1f8] opacity-60">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[550px] w-full max-w-[500px] mx-auto">
              {/* Image 1 (Top Left) */}
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Dental procedure" 
                className="absolute top-0 left-0 w-[75%] h-[350px] object-cover rounded-tl-[40px] rounded-br-[40px] shadow-lg z-10"
              />
              
              {/* Image 2 (Bottom Right) */}
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                alt="Dental clinic room" 
                className="absolute bottom-0 right-0 w-[70%] h-[280px] object-cover rounded-tl-[40px] rounded-br-[40px] shadow-2xl border-8 border-white z-20"
              />

              {/* Experience Circular Badge */}
              <div className="absolute top-10 right-4 w-32 h-32 z-30 bg-[#1784B4] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
                  className="absolute inset-0 w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="curve" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
                    <text fill="white" className="text-[12px] font-bold tracking-[0.18em]">
                      <textPath href="#curve" startOffset="0%">
                        15+ YEARS OF EXPERIENCE •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                {/* Inner white circle */}
                <div className="w-[4.5rem] h-[4.5rem] bg-white rounded-full z-10 shadow-inner"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Subheading */}
            <div className="flex items-center gap-2 mb-4">
              <FiPlus className="text-[#1784B4] text-xl" />
              <span className="text-[#1784B4] font-bold text-sm tracking-widest uppercase">About Us</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-[38px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0A2B42] leading-[1.15] mb-6 tracking-tight">
              <span className="text-[#1784B4]">Your Journey</span> to a Healthier<br/>
              Smile Begins Here
            </h2>
            
            {/* Paragraph */}
            <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-[540px]">
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
            </p>
            
            {/* Grid of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#1784B4] text-xl shrink-0" />
                  <span className="text-[#0A2B42] font-bold text-[15px]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <motion.div 
              whileHover={{ y: -4 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link 
                to="/about" 
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#1784B4] hover:bg-[#126b94] text-white pl-8 pr-2 py-2 rounded-full font-bold transition-colors shadow-md hover:shadow-lg text-[15px]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
                <span className="relative z-10 tracking-wide">Read More About Us</span> 
                <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-300">
                  <FiArrowUpRight className="text-lg stroke-[3]" />
                </div>
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
