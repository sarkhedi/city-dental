import React from 'react';
import { 
  FaTooth, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaChevronRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="bg-[#0A2B42] text-white pt-20 pb-8 relative overflow-hidden border-t-[6px] border-[#1784B4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center mb-6 group inline-block w-max bg-white p-2.5 rounded-xl shadow-lg">
              <img 
                src={logoImg} 
                alt="City DentalCare Logo" 
                className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            
            <p className="text-gray-400 font-medium text-[15px] leading-relaxed mb-6">
              Committed to providing the best dental care in a comfortable and friendly environment. Your smile is our top priority.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#1784B4] transition-colors"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1784B4] transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1784B4] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1784B4] transition-colors"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-[18px] font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Our Doctors', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                    <FaChevronRight className="text-[#1784B4] text-[10px] group-hover:translate-x-1 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[18px] font-bold mb-6 text-white uppercase tracking-wider">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {['Teeth Whitening', 'Dental Implants', 'Orthodontics', 'Root Canal', 'Cosmetic Dentistry'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                    <FaChevronRight className="text-[#1784B4] text-[10px] group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[18px] font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#1784B4] text-[20px] shrink-0 mt-1" />
                <p className="text-gray-400 font-medium text-[15px] leading-relaxed">
                  Shop No.21, Sanghavi Dharmshala,<br />Station Rd, near Krishna Petrol Pump,<br />Amreli, Gujarat 365601
                </p>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#1784B4] text-[18px] shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Call us now</p>
                  <a href="tel:+919724511575" className="text-white hover:text-[#1784B4] transition-colors font-bold text-[18px] block">+(91) 97245-11575</a>
                  <a href="tel:+918849464695" className="text-white hover:text-[#1784B4] transition-colors font-bold text-[18px] block">+(91) 88494-64695</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#1784B4] text-[18px] shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email us</p>
                  <a href="mailto:info@citydental.com" className="text-white hover:text-[#1784B4] transition-colors font-medium text-[15px]">info@citydental.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-medium text-[14px]">
            © {new Date().getFullYear()} <span className="text-white font-semibold">City DentalCare</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-[14px] font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-[14px] font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
