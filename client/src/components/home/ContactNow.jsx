import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactNow = () => {
  return (
    <section className="bg-white py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Map */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] lg:h-[550px] border-8 border-[#F2F8FB] relative">
              {/* Decorative Corner */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#1784B4] rounded-full blur-[40px] opacity-50"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6548645125833!2d71.22247527507344!3d21.60129978587041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0328956774445%3A0x1c63b90f6f15c40d!2sCity%20DentalCare!5e0!3m2!1sen!2sin!4v1747545140594!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Info */}
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
                <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Contact Now</span>
              </div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#0A2B42] leading-[1.15] tracking-tight">
                <span className="text-[#1784B4]">Get Free</span> Professional Consultation
              </h2>
            </div>

            {/* Info List */}
            <div className="flex flex-col gap-6 mb-12">
              {/* Item 1 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F2F8FB] flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] group-hover:shadow-lg transition-all duration-300">
                  <FaMapMarkerAlt className="text-[#1784B4] text-[22px] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] leading-relaxed max-w-[400px] group-hover:text-[#0A2B42] transition-colors">
                  31, Ground Floor, Shop no. 1, Plot 10A, East Patel Nagar, Delhi, 110008
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F2F8FB] flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] group-hover:shadow-lg transition-all duration-300">
                  <FaPhoneAlt className="text-[#1784B4] text-[20px] group-hover:text-white transition-colors duration-300" />
                </div>
<p className="text-gray-500 font-medium text-[15px] sm:text-[16px] group-hover:text-[#0A2B42] transition-colors">
                  +(91) 97245-11575
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F2F8FB] flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] group-hover:shadow-lg transition-all duration-300">
                  <FaPhoneAlt className="text-[#1784B4] text-[20px] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] group-hover:text-[#0A2B42] transition-colors">
                  +(91) 88494-64695
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F2F8FB] flex items-center justify-center shrink-0 group-hover:bg-[#1784B4] group-hover:shadow-lg transition-all duration-300">
                  <FaClock className="text-[#1784B4] text-[20px] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-gray-500 font-medium text-[15px] sm:text-[16px] group-hover:text-[#0A2B42] transition-colors">
                  Mon to Sat 9:00AM to 9:00PM
                </p>
              </div>
            </div>

            {/* Button */}
            <motion.a 
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative overflow-hidden bg-[#1784B4] text-white px-10 py-5 rounded-full font-bold text-[14px] uppercase tracking-wider group shadow-[0_10px_30px_rgba(23,132,180,0.3)] hover:shadow-[0_15px_40px_rgba(23,132,180,0.4)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Make An Appointment
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactNow;
