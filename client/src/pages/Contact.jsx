import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactImg from '../assets/images/contact-us-img.jpg';
import { FiMapPin, FiPhone, FiClock, FiMail, FiArrowUpRight, FiPlus } from 'react-icons/fi';

const contactItems = [
  {
    icon: FiMapPin,
    title: 'Visit Us On',
    lines: [
      'Shop No.21, Sanghavi Dharmshala,',
      'Station Rd, near Krishna Petrol Pump,',
      'Amreli, Gujarat 365601',
    ],
  },
  {
    icon: FiPhone,
    title: 'Contact Us',
    lines: ['+(91) 97245-11575', '+(91) 88494-64695'],
  },
  {
    icon: FiClock,
    title: 'Working Hours',
    lines: ['Mon to Fri : 10:00 To 6:00', 'Sat : 10:00AM To 3:00PM'],
  },
  {
    icon: FiMail,
    title: 'Email Us',
    lines: ['info@citydentalcare.com', 'support@citydentalcare.com'],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">

      {/* ── SECTION 1: Contact Info + Map ──────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#F2F8FB] relative overflow-hidden">

        {/* decorative stars */}
        <div className="absolute top-20 left-8 w-10 h-10 text-[#1784B4] opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
        </div>
        <div className="absolute bottom-16 right-10 w-14 h-14 text-[#cae8f5] opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT — text + info cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* badge */}
              <div className="flex items-center gap-2 mb-4">
                <FiPlus className="text-[#1784B4] text-lg" />
                <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Contact Info</span>
              </div>

              {/* heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[40px] sm:text-[52px] font-extrabold text-[#0A2B42] leading-tight mb-4 tracking-tight"
              >
                <span className="text-[#1784B4]">Connecting</span> Near &amp; Far
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 font-medium text-[16px] mb-10 leading-relaxed max-w-lg"
              >
                For emergency dental care or to schedule an appointment, contact our office or visit our clinic.
              </motion.p>

              {/* 2×2 info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 * idx }}
                    className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgba(23,132,180,0.07)] border border-gray-100 flex flex-col gap-3 hover:shadow-[0_12px_40px_rgba(23,132,180,0.13)] transition-shadow duration-300 group"
                  >
                    <div className="bg-[#F2F8FB] w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#1784B4] transition-colors duration-300">
                      <item.icon className="text-[#1784B4] text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-[#0A2B42] font-bold text-[15px] uppercase tracking-wide mb-1">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-gray-500 text-[14px] font-medium leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-[480px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(23,132,180,0.12)] border border-gray-100"
            >
              <iframe
                title="City DentalCare Amreli Location"
                src="https://www.google.com/maps?q=Shop+No.21,+Sanghavi+Dharmshala,+Station+Rd,+near+Krishna+Petrol+Pump,+Amreli,+Gujarat+365601&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: Image + Contact Form ────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1784B4]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#1784B4]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[32px] overflow-hidden h-[500px] shadow-2xl"
            >
              <img
                src={contactImg}
                alt="City DentalCare Contact"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FiPlus className="text-[#1784B4] text-lg" />
                <span className="text-[#1784B4] font-bold text-sm tracking-[0.2em] uppercase">Contact Us</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[36px] sm:text-[44px] font-extrabold text-[#0A2B42] leading-tight mb-8 tracking-tight"
              >
                <span className="text-[#1784B4]">Get</span> In Touch With Us
              </motion.h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required
                    className="bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] focus:bg-white text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none transition-all font-medium text-[15px]"
                  />
                  <input
                    type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required
                    className="bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] focus:bg-white text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none transition-all font-medium text-[15px]"
                  />
                  <input
                    type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange}
                    className="bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] focus:bg-white text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none transition-all font-medium text-[15px]"
                  />
                  <input
                    type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange}
                    className="bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] focus:bg-white text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none transition-all font-medium text-[15px]"
                  />
                </div>

                <textarea
                  name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} required
                  className="bg-[#F2F8FB] border border-transparent focus:border-[#1784B4] focus:bg-white text-[#0A2B42] rounded-xl px-5 py-4 focus:outline-none transition-all font-medium text-[15px] resize-none"
                />

                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative overflow-hidden flex items-center gap-3 bg-[#1784B4] text-white pl-8 pr-2 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg text-[15px]"
                  >
                    <div className="absolute top-0 left-0 h-full w-full bg-[#0A2B42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
                    <span className="relative z-10 tracking-wide">Send Message</span>
                    <div className="bg-white text-[#1784B4] p-1.5 rounded-full relative z-10 group-hover:rotate-45 transition-transform duration-500">
                      <FiArrowUpRight className="text-lg stroke-[3]" />
                    </div>
                  </motion.button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
