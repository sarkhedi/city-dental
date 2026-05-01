import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Appointment request submitted successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1784B4]/10 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1784B4]/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Booking
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0A2B42] tracking-tight leading-tight"
          >
            Book <span className="text-[#1784B4]">Appointment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-[16px] mt-4"
          >
            Schedule your visit online. Our team will contact you to confirm your appointment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
              <h3 className="text-[22px] font-bold text-[#0A2B42] mb-6">Contact Information</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="bg-[#F2F8FB] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <FiMapPin className="text-[#1784B4] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-[#0A2B42] font-bold mb-1">Clinic Address</h4>
                    <p className="text-gray-500 text-sm font-medium">Shop No.21, Sanghavi Dharmshala,<br />Station Rd, near Krishna Petrol Pump,<br />Amreli, Gujarat 365601</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#F2F8FB] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <FiPhoneCall className="text-[#1784B4] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-[#0A2B42] font-bold mb-1">Call Us</h4>
                    <p className="text-gray-500 text-sm font-medium">+(91) 97245-11575</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#F2F8FB] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <FiClock className="text-[#1784B4] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-[#0A2B42] font-bold mb-1">Working Hours</h4>
                    <p className="text-gray-500 text-sm font-medium">Mon - Fri: 08:00 - 20:00<br />Saturday: 09:00 - 18:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-[24px] overflow-hidden shadow-xl h-64 hidden lg:block">
              <iframe
                title="City DentalCare Location"
                src="https://www.google.com/maps?q=Shop+No.21,+Sanghavi+Dharmshala,+Station+Rd,+near+Krishna+Petrol+Pump,+Amreli,+Gujarat+365601&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 bg-white rounded-[30px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="form-group mb-2">
                  <label htmlFor="name" className="block text-[#0A2B42] font-bold text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none focus:bg-white transition-all font-medium"
                    placeholder="Enter Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group mb-2">
                  <label htmlFor="email" className="block text-[#0A2B42] font-bold text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none focus:bg-white transition-all font-medium"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group mb-2">
                  <label htmlFor="phone" className="block text-[#0A2B42] font-bold text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none focus:bg-white transition-all font-medium"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* Services */}
                <div className="form-group mb-2">
                  <label htmlFor="services" className="block text-[#0A2B42] font-bold text-sm mb-2">Select Service</label>
                  <select
                    name="services"
                    id="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none focus:bg-white transition-all font-medium appearance-none"
                    required
                  >
                    <option value="" disabled>Select service</option>
                    <option value="general_dental_care">General Dental Care</option>
                    <option value="dental_implants">Dental Implants</option>
                    <option value="cosmetic_dentistry">Cosmetic Dentistry</option>
                    <option value="teeth_whitening">Teeth Whitening</option>
                    <option value="pediatric_dental_care">Pediatric Dental Care</option>
                    <option value="advanced_oral_care">Advanced Oral Care</option>
                    <option value="comfort_dentistry">Comfort Dentistry</option>
                    <option value="smile_renewal">Smile Renewal</option>
                  </select>
                </div>

                {/* Date */}
                <div className="form-group mb-6 md:col-span-2">
                  <label htmlFor="date" className="block text-[#0A2B42] font-bold text-sm mb-2">Preferred Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none focus:bg-white transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1784B4] hover:bg-[#0A2B42] text-white font-bold text-[16px] py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-[#1784B4]/20"
                  >
                    Book Appointment
                  </button>
                </div>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
