import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "75+", title: "Insurance Covered" },
    { number: "2K", title: "Realized Projects" },
    { number: "22K", title: "Happy Customers" },
    { number: "18+", title: "Experience Doctors" }
  ];

  return (
    <section className="bg-white pt-10 pb-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-[52px] font-extrabold text-[#0A2B42] leading-none mb-3 tracking-tight">{stat.number}</h3>
              <h4 className="text-[18px] font-bold text-[#0A2B42] mb-6">{stat.title}</h4>
              
              <div className="w-full h-[1px] bg-gray-200 mb-6 relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-[#1784B4]"></div>
              </div>
              
              <p className="text-gray-400 text-[14px] leading-relaxed font-medium">
                Our team loves dental trivia. Did you know that tooth enamel.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
