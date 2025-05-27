import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
    }`}>
      <div className="container-custom">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-neutral-600 border-b border-neutral-100">
          <a href="tel:+12672121034" className="flex items-center mr-6 hover:text-primary-600 transition-colors">
            <FaPhone className="mr-2" /> (267) 212-1034
          </a>
          <a href="mailto:info@houstonoilsupply.com" className="flex items-center hover:text-primary-600 transition-colors">
            <FaEnvelope className="mr-2" /> info@houstonoilsupply.com
          </a>
        </div>
        
        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold text-primary-700 font-heading relative">
              <span className="text-primary-800">HOUSTON</span> <span className="text-primary-600">OIL SUPPLY</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-accent-500"></div>
            </div>
          </motion.div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="relative group">
                <button 
                  onClick={() => toggleDropdown('products')}
                  className="flex items-center font-medium text-neutral-700 hover:text-primary-600 transition-colors py-2"
                >
                  Products
                  {activeDropdown === 'products' ? <FaChevronUp className="ml-1 h-3 w-3" /> : <FaChevronDown className="ml-1 h-3 w-3" />}
                </button>
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-2">
                        <a href="#motor-oils" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Motor Oils</div>
                          <div className="text-xs text-neutral-500 mt-1">Synthetic, Semi-Synthetic & Conventional</div>
                        </a>
                        <a href="#hydraulic-fluids" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Hydraulic Fluids</div>
                          <div className="text-xs text-neutral-500 mt-1">Industrial & Mobile Equipment</div>
                        </a>
                        <a href="#greases" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Industrial Greases</div>
                          <div className="text-xs text-neutral-500 mt-1">High-Temperature & Water-Resistant</div>
                        </a>
                        <a href="#all-products" className="block px-4 py-2 text-xs font-medium text-primary-600 hover:text-primary-800 border-t border-neutral-100 mt-1">
                          View All Products →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative group">
                <button 
                  onClick={() => toggleDropdown('industries')}
                  className="flex items-center font-medium text-neutral-700 hover:text-primary-600 transition-colors py-2"
                >
                  Industries
                  {activeDropdown === 'industries' ? <FaChevronUp className="ml-1 h-3 w-3" /> : <FaChevronDown className="ml-1 h-3 w-3" />}
                </button>
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-2">
                        <a href="#manufacturing" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Manufacturing</div>
                          <div className="text-xs text-neutral-500 mt-1">Equipment & Process Lubrication</div>
                        </a>
                        <a href="#transportation" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Transportation & Logistics</div>
                          <div className="text-xs text-neutral-500 mt-1">Fleet Maintenance Solutions</div>
                        </a>
                        <a href="#energy" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                          <div className="font-medium">Energy & Utilities</div>
                          <div className="text-xs text-neutral-500 mt-1">Oil & Gas, Power Generation</div>
                        </a>
                        <a href="#all-industries" className="block px-4 py-2 text-xs font-medium text-primary-600 hover:text-primary-800 border-t border-neutral-100 mt-1">
                          View All Industries →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li><a href="#about" className="font-medium text-neutral-700 hover:text-primary-600 transition-colors py-2">About Us</a></li>
              <li><a href="#contact" className="font-medium text-neutral-700 hover:text-primary-600 transition-colors py-2">Contact</a></li>
              <li><a href="#survey" className="btn-primary py-2 px-4 ml-4">Get Quote</a></li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-neutral-200 overflow-hidden"
            >
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => toggleDropdown('mobileProducts')}
                    className="flex items-center justify-between w-full px-4 py-3 font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    <span>Products</span>
                    {activeDropdown === 'mobileProducts' ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobileProducts' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 pr-2 py-2 space-y-1"
                      >
                        <a href="#motor-oils" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Motor Oils</a>
                        <a href="#hydraulic-fluids" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Hydraulic Fluids</a>
                        <a href="#greases" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Industrial Greases</a>
                        <a href="#all-products" className="block px-4 py-2 text-xs font-medium text-primary-600 hover:text-primary-800">View All Products →</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <button 
                    onClick={() => toggleDropdown('mobileIndustries')}
                    className="flex items-center justify-between w-full px-4 py-3 font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    <span>Industries</span>
                    {activeDropdown === 'mobileIndustries' ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobileIndustries' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 pr-2 py-2 space-y-1"
                      >
                        <a href="#manufacturing" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Manufacturing</a>
                        <a href="#transportation" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Transportation & Logistics</a>
                        <a href="#energy" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-md">Energy & Utilities</a>
                        <a href="#all-industries" className="block px-4 py-2 text-xs font-medium text-primary-600 hover:text-primary-800">View All Industries →</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li><a href="#about" className="block px-4 py-3 font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-md">About Us</a></li>
                <li><a href="#contact" className="block px-4 py-3 font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-md">Contact</a></li>
                <li className="px-4 pt-2 pb-1"><a href="#survey" className="btn-primary w-full text-center py-3">Get Quote</a></li>
              </ul>
              <div className="mt-4 flex flex-col space-y-3 px-4 py-2 border-t border-neutral-100">
                <a href="tel:+12672121034" className="flex items-center text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                  <FaPhone className="mr-2" /> (267) 212-1034
                </a>
                <a href="mailto:info@houstonoilsupply.com" className="flex items-center text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                  <FaEnvelope className="mr-2" /> info@houstonoilsupply.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
