import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCheckCircle } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: "Dr. Deep Sarkhedi",
      role: "B.D.S.",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Khyati Sarkhedi",
      role: "B.D.S.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Khushbhu Sarkhedi",
      role: "B.D.S.",
      img: "https://images.unsplash.com/photo-1594824436998-dd40e4f35e08?auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header - New Design */}
      <div className="bg-[#F2F8FB] py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#0A2B42] mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-medium max-w-2xl mx-auto"
          >
            We are dedicated to delivering high-quality dental treatments with a focus on comfort, care, and long-term oral health.
          </motion.p>
        </div>
      </div>

      {/* Main About Section - New Design */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-[#1784B4]/20 to-[#0A2B42]/20 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Clinic Interior" 
                className="rounded-[30px] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0A2B42] p-8 rounded-[20px] shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1784B4] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black">
                    12+
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Years of</p>
                    <p className="text-[#1784B4] text-sm font-medium">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiPlus className="text-[#1784B4] text-xl" />
              <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2B42] mb-6 tracking-tight leading-tight">
              Creating Healthy & <br/><span className="text-[#1784B4]">Beautiful Smiles</span> Since 2012
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At City Dental Care, we are dedicated to delivering high-quality dental treatments with a focus on comfort, care, and long-term oral health. Located in Surat, our clinic offers a wide range of services including root canal treatment (RCT), dental implants, braces, teeth whitening, dentures, and pediatric dental care. Our experienced team uses modern technology and advanced techniques to ensure precise, painless, and effective treatments. We believe in maintaining the highest standards of hygiene and providing personalized care tailored to each patient's needs. Whether you need routine dental care or a complete smile transformation, our goal is to give you a healthy, confident smile in a friendly and stress-free environment.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Root Canal Treatment (RCT)",
                "Dental Implants",
                "Braces & Orthodontics",
                "Teeth Whitening",
                "Dentures",
                "Pediatric Dental Care"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#1784B4] text-xl shrink-0 mt-1" />
                  <span className="text-[#0A2B42] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section - New Design */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiPlus className="text-[#1784B4] text-xl" />
              <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Our Specialists</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-[#0A2B42] mb-4 tracking-tight"
            >
              Meet Our <span className="text-[#1784B4]">Expert Dentists</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Our team of highly qualified professionals is dedicated to providing you with the best possible care.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B42]/90 via-[#0A2B42]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <FaQuoteLeft className="text-[#1784B4] text-4xl" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#0A2B42] text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#1784B4] font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
