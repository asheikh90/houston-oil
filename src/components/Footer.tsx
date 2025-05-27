import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-1 font-heading">
                <span className="text-white">HOUSTON</span> <span className="text-primary-300">OIL SUPPLY</span>
              </h3>
              <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
            </motion.div>
            
            <p className="text-primary-100 mb-6">
              Premium bulk lubricants for Houston's industry leaders. Quality products, competitive pricing, and reliable service.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 relative inline-block"
            >
              Products
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent-500"></div>
            </motion.h4>
            
            <ul className="space-y-3">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Motor Oils
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Hydraulic Fluids
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Industrial Greases
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Transmission Fluids
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Coolants & Antifreeze
                </a>
              </motion.li>
            </ul>
          </div>
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 relative inline-block"
            >
              Industries
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent-500"></div>
            </motion.h4>
            
            <ul className="space-y-3">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Manufacturing
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Transportation & Logistics
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Energy & Utilities
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Construction
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <FaChevronRight className="mr-2 text-xs text-primary-400" /> Marine
                </a>
              </motion.li>
            </ul>
          </div>
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-6 relative inline-block"
            >
              Contact Us
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-accent-500"></div>
            </motion.h4>
            
            <ul className="space-y-4">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaPhone className="text-primary-400 mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+17135551234" className="text-primary-200 hover:text-white transition-colors">
                    (713) 555-1234
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaEnvelope className="text-primary-400 mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@houstonoilsupply.com" className="text-primary-200 hover:text-white transition-colors">
                    info@houstonoilsupply.com
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <a href="#survey" className="btn-primary bg-accent-600 hover:bg-accent-700 w-full text-center">
                  Get a Quote
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Houston Oil Supply. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-300 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
