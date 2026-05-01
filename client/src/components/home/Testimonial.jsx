import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CountUpRating = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toFixed(1)}</span>;
};

const testimonials = [
  {
    text: "\"I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.\" \"Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.\"",
    name: "Robert Lee",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "\"The best dental experience I've ever had! The team was professional and friendly, and the results were amazing. Highly recommend! Dr. Smith and his staff are fantastic! They made me feel comfortable and at ease during my visit.\"",
    name: "Banson Doe",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "\"Excellent service and care. The staff is knowledgeable and always willing to answer questions. I wouldn't go anywhere else for my dental needs. From the moment I walked in, I felt welcomed and cared for. staff is exceptional.\"",
    name: "Thomas Linda",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
    <path d="M22 24C22 30.6274 16.6274 36 10 36C3.37258 36 2 30.6274 2 24C2 17.3726 8 10 14 8L16 12C12 14 10 18 10 24H22Z" stroke="#1784B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M46 24C46 30.6274 40.6274 36 34 36C27.3726 36 26 30.6274 26 24C26 17.3726 32 10 38 8L40 12C36 14 34 18 34 24H46Z" stroke="#1784B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiPlus className="text-[#1784B4] text-xl" />
            <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Testimonial</span>
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] mb-4 tracking-tight">
            <span className="text-[#1784B4]">What our</span> Client Say
          </h2>
          <p className="text-gray-500 font-medium text-[15px]">We are committed to sustainability. eco-friendly initiatives.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Image & Rating Box */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative w-[90%] md:w-[80%] lg:w-[90%] mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Patient smiling" 
                className="w-full rounded-[40px] shadow-2xl object-cover h-[450px]"
              />
              
              {/* Blue Rating Box */}
              <div className="absolute -bottom-8 -right-4 md:-right-10 lg:-right-12 bg-[#1784B4] text-white p-6 sm:p-8 rounded-[24px] shadow-xl border-[6px] border-white w-[300px] sm:w-[360px] z-10">
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <h3 className="text-[36px] sm:text-[44px] font-extrabold leading-none tracking-tight"><CountUpRating target={4.5} duration={0.9} /><span className="text-[24px] sm:text-[28px] font-bold text-white/70">/5</span></h3>
                  <p className="text-[12px] sm:text-[13px] font-medium leading-snug">This rate is given by user<br/> after visiting our location</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex text-[#FFB800] text-sm gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-medium">For Excellence Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Slider */}
          <div className="w-full lg:w-[55%] mt-12 lg:mt-0 px-4 sm:px-0">
            <div className="mb-4">
              <QuoteIcon />
            </div>
            
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[18px] sm:text-[20px] text-[#0A2B42] font-bold leading-relaxed mb-10">
                    {testimonials[currentIndex].text}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-14 h-14 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h4 className="text-[18px] font-bold text-[#0A2B42]">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-500 text-[14px] font-medium">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex gap-3 mt-10">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg bg-[#1784B4] hover:bg-[#0A2B42] text-white flex items-center justify-center transition-colors shadow-md"
              >
                <FiArrowLeft className="text-lg" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-[#1784B4] hover:bg-[#0A2B42] text-white flex items-center justify-center transition-colors shadow-md"
              >
                <FiArrowRight className="text-lg" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
