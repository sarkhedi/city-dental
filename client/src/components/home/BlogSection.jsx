import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiArrowUpRight } from 'react-icons/fi';

const blogPosts = [
  {
    title: "The Importance Of Regular Dental Check-Ups",
    desc: "Our waiting room features a variety of plants that help purify the air.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Top 5 Benefits Of Professional Teeth Whitening",
    desc: "We believe in promoting health and wellness in every aspect of our clinic.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Understanding Dental Implants: What You Need To Know",
    desc: "Our clinic donates dental care services to underprivileged families.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80"
  }
];

const BlogSection = () => {
  return (
    <section className="bg-[#F2F8FB] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Decorative Star Left */}
      <div className="absolute top-[40%] left-0 -translate-x-1/2 text-[#1784B4]">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
        </svg>
      </div>
      
      {/* Decorative Star Right */}
      <div className="absolute bottom-10 right-0 translate-x-1/2 text-[#1784B4]">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlus className="text-[#1784B4] text-xl" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Blogs</span>
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] mb-4 tracking-tight">
            <span className="text-[#1784B4]">Check Our</span> Latest Articles
          </h2>
          <p className="text-gray-500 font-medium text-[15px]">We are committed to sustainability. eco-friendly initiatives.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group flex flex-col h-full cursor-pointer"
            >
              {/* Image */}
              <div className="relative rounded-[32px] overflow-hidden mb-6 aspect-[4/3] w-full shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <h3 className="text-[22px] font-bold text-[#0A2B42] leading-snug mb-4 group-hover:text-[#1784B4] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-8 flex-grow pr-4">
                  {post.desc}
                </p>
                
                {/* Footer / Read More */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-[#1784B4] font-bold text-[15px] group-hover:text-[#0A2B42] transition-colors duration-300">
                    Read More
                  </span>
                  <div className="w-[22px] h-[22px] rounded-full bg-[#1784B4] text-white flex items-center justify-center text-[11px] group-hover:bg-[#0A2B42] transition-colors duration-300">
                    <FiArrowUpRight />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
