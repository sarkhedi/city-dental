import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiChevronDown, FiArrowUpRight } from 'react-icons/fi';
import { FaTooth } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();
  const lastScrollY = React.useRef(0);

  const navLinks = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'About Us', path: '/about', hasDropdown: false },
    { name: 'Services', path: '/services', hasDropdown: false },
    {
      name: 'Pages',
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Blog', path: '/blog' },
        { name: 'Our Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
        { name: "FAQ's", path: '/faqs' }
      ]
    },
    { name: 'Contact Us', path: '/contact', hasDropdown: false },
  ];

  // Handle scroll: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN → hide
        setHidden(true);
        setIsOpen(false);
      } else {
        // Scrolling UP → show
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (name) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  return (
    <header
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-md py-2' : 'bg-[#F2F8FB] py-3'}
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="City DentalCare Logo"
              className="h-20 sm:h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group cursor-pointer">
                <Link
                  to={link.path}
                  className={`flex items-center gap-1.5 text-[20px] font-bold transition-colors hover:text-[#1784B4] ${location.pathname === link.path || (link.hasDropdown && location.pathname.includes(link.name.toLowerCase())) ? 'text-[#1784B4]' : 'text-[#0A2B42]'
                    }`}
                  onClick={(e) => {
                    if (link.path === '#') e.preventDefault();
                  }}
                >
                  {link.name}
                  {link.hasDropdown && <FiChevronDown className="text-base stroke-[2.5]" />}
                </Link>

                {/* Desktop Dropdown */}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-6 py-3 text-[15px] font-bold transition-colors ${location.pathname === item.path ? 'bg-[#F2F8FB] text-[#1784B4]' : 'text-[#0A2B42] hover:bg-[#F2F8FB] hover:text-[#1784B4]'
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Book Button (Desktop) */}
          <div className="hidden md:flex ml-4">
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to="/book-appointment"
                className="group flex items-center gap-3 bg-[#1784B4] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold shadow-md hover:shadow-xl text-[14px] relative overflow-hidden"
              >
                {/* Sweep Background */}
                <div className="absolute top-0 left-0 h-full w-full bg-[#0A2B42] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full"></div>

                <span className="relative z-10">Book Appointment</span>
                <div className="bg-white text-[#1784B4] p-1.5 rounded-full group-hover:rotate-45 transition-transform duration-500 relative z-10">
                  <FiArrowUpRight className="text-base stroke-[3]" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A2B42] hover:text-[#1784B4] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden absolute w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold ${location.pathname === link.path
                      ? 'bg-[#F2F8FB] text-[#1784B4]'
                      : 'text-[#0A2B42] hover:bg-gray-50'
                      }`}
                    onClick={() => {
                      if (link.hasDropdown) toggleMobileDropdown(link.name);
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        if (link.hasDropdown) e.preventDefault();
                      }}
                      className="w-full"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <FiChevronDown className={`text-xl transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>

                  {/* Mobile Sub-menu */}
                  {link.hasDropdown && link.dropdownItems && activeMobileDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex flex-col ml-8 border-l-2 border-gray-100 pl-4 py-2 gap-3 mt-1"
                    >
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`text-[15px] font-semibold ${location.pathname === item.path ? 'text-[#1784B4]' : 'text-gray-600 hover:text-[#1784B4]'
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to="/book-appointment"
                  className="flex items-center justify-center gap-3 w-full bg-[#1784B4] text-white px-4 py-3 rounded-full font-semibold shadow-md active:scale-95 transition-transform"
                >
                  Book Appointment
                  <div className="bg-white text-[#1784B4] p-1.5 rounded-full">
                    <FiArrowUpRight className="text-lg stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
