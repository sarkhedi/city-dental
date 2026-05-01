import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { servicesList } from '../data/services';

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceIndex = parseInt(id);
  const service = servicesList[serviceIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0A2B42]">Service not found</h2>
          <Link to="/services" className="text-[#1784B4] mt-4 inline-block">Go back to Services</Link>
        </div>
      </div>
    );
  }

  const renderSection = (title, items, icon) => (
    items && items.length > 0 && (
      <div className="mb-8">
        <h3 className="text-[20px] font-bold text-[#0A2B42] mb-4 flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
              <FiCheck className="text-[#1784B4] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-[#0A2B42] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1784B4] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1784B4] rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium mb-6 transition-colors">
            <FiArrowLeft /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-medium max-w-2xl text-lg"
          >
            {service.desc}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-64 object-cover rounded-[16px] mb-8"
            />
            
            <h2 className="text-[24px] font-bold text-[#0A2B42] mb-4">Overview</h2>
            <p className="text-gray-600 font-medium text-[16px] leading-relaxed mb-8">
              {service.fullDesc}
            </p>

            {renderSection("Symptoms", service.symptoms, "🔍")}
            {renderSection("Common Problems", service.commonProblems, "⚠️")}
            {renderSection("When Do You Need", service.whenDoYouNeed, "⏰")}
            {renderSection("When Is Needed", service.whenIsNeeded, "⏰")}
            {renderSection("Treatment Process", service.treatmentProcess, "⚙️")}
            {renderSection("Treatment Approach", service.treatmentApproach, "⚙️")}
            {renderSection("Treatment Options", service.treatmentOptions, "⚙️")}
            {renderSection("Benefits", service.benefits, "✨")}
            {renderSection("Why Choose Us", service.whyChooseUs, "🏆")}
            {renderSection("Aftercare Tips", service.aftercareTips, "💡")}
            {renderSection("Care Tips", service.careTips, "💡")}
            {renderSection("Prevention Tips", service.preventionTips, "🛡️")}
            {renderSection("Types", service.types, "📋")}
            {renderSection("What Are", service.whatAre ? [service.whatAre] : null, "ℹ️")}
            {renderSection("Who Can Benefit", service.whoCanBenefit, "👤")}
            {renderSection("Common Causes", service.commonCauses, "🔎")}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-24">
              <h3 className="text-[20px] font-bold text-[#0A2B42] mb-6">Book This Service</h3>
              <p className="text-gray-500 font-medium mb-6">
                Schedule an appointment for {service.title} at our clinic.
              </p>
              <Link 
                to="/book-appointment"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#1784B4] hover:bg-[#0A2B42] text-white font-bold text-[16px] px-6 py-4 rounded-xl transition-all duration-300"
              >
                Book Treatment
                <FiArrowRight />
              </Link>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-[18px] font-bold text-[#0A2B42] mb-4">Need Help?</h4>
                <p className="text-gray-500 font-medium text-sm mb-4">
                  Contact us for more information about this treatment.
                </p>
                <Link 
                  to="/contact"
                  className="inline-block text-[#1784B4] font-bold hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;