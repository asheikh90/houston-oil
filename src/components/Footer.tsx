import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white font-heading relative inline-block mb-6">
              <span className="text-white">HOUSTON</span> <span className="text-primary-300">OIL SUPPLY</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"></div>
            </div>
            <p className="text-primary-200 mb-6">
              Premium quality bulk oil and lubricants for industrial and commercial applications throughout Houston and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-primary-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#industries" className="text-primary-200 hover:text-white transition-colors">Industries</a></li>
              <li><a href="#about" className="text-primary-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-primary-200 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#survey" className="text-primary-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#engine-oils" className="text-primary-200 hover:text-white transition-colors">Engine Oils</a></li>
              <li><a href="#hydraulic-fluids" className="text-primary-200 hover:text-white transition-colors">Hydraulic Fluids</a></li>
              <li><a href="#transmission-fluids" className="text-primary-200 hover:text-white transition-colors">Transmission Fluids</a></li>
              <li><a href="#greases" className="text-primary-200 hover:text-white transition-colors">Industrial Greases</a></li>
              <li><a href="#marine-lubricants" className="text-primary-200 hover:text-white transition-colors">Marine Lubricants</a></li>
              <li><a href="#eco-friendly" className="text-primary-200 hover:text-white transition-colors">Eco-Friendly Options</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-300 mt-1 mr-3" />
                <span className="text-primary-200">
                  1234 Petroleum Drive<br />
                  Houston, TX 77002
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-300 mr-3" />
                <a href="tel:+12672121034" className="text-primary-200 hover:text-white transition-colors">
                  (267) 212-1034
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-300 mr-3" />
                <a href="mailto:info@houstonoilsupply.com" className="text-primary-200 hover:text-white transition-colors">
                  info@houstonoilsupply.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#survey" className="btn-secondary bg-primary-800 hover:bg-primary-700 text-white border-primary-700">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-primary-300 text-sm">
          <p>© {new Date().getFullYear()} Houston Oil Supply. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
