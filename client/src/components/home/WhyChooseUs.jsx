import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { 
  FaUserMd, 
  FaHeartbeat, 
  FaCreditCard, 
  FaAmbulance, 
  FaStar, 
  FaMicroscope 
} from 'react-icons/fa';
import whyChooseUsImg from '../../assets/images/why-choose-us-img.png';

const WhyChooseUs = () => {
  const leftFeatures = [
    { title: "Experienced Doctor", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaUserMd },
    { title: "Personalized Care", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaHeartbeat },
    { title: "Flexible Payment Options", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaCreditCard }
  ];

  const rightFeatures = [
    { title: "Emergency Services", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaAmbulance },
    { title: "Positive Patient Reviews", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaStar },
    { title: "Latest Technology", desc: "The goal of our clinic is to provide friendly, caring dentistry and the.", icon: FaMicroscope }
  ];

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlus className="text-[#1784B4] text-xl" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Why Choose Us</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] mb-4 tracking-tight"
          >
            <span className="text-[#1784B4]">Diagnosis</span> of Dental Diseases
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Features */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((item, index) => (
              <motion.div 
                key={`left-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 lg:text-right lg:flex-row-reverse group"
              >
                <div className="bg-[#F2F8FB] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] transition-colors duration-300">
                  <item.icon className="text-[#1784B4] text-[28px] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#0A2B42] text-[20px] font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center px-4 order-first lg:order-none mb-10 lg:mb-0"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#cae8f5] rounded-full blur-3xl opacity-50 -z-10"></div>
              {/* Dotted circle accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-[8px] border-dotted border-[#1784B4]/20 rounded-full animate-spin-slow -z-10"></div>
              
              <img 
                src={whyChooseUsImg} 
                alt="Why Choose Us Dentist" 
                className="w-full h-auto max-h-[500px] object-contain z-10 relative drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((item, index) => (
              <motion.div 
                key={`right-${index}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 group"
              >
                <div className="bg-[#F2F8FB] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] transition-colors duration-300">
                  <item.icon className="text-[#1784B4] text-[28px] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#0A2B42] text-[20px] font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
