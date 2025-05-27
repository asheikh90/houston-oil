import React from 'react';
import { motion } from 'framer-motion';
import { FaOilCan, FaIndustry, FaTruck, FaShip, FaWrench, FaLeaf } from 'react-icons/fa';

const Products: React.FC = () => {
  const products = [
    {
      icon: <FaOilCan className="text-4xl text-primary-600 mb-4" />,
      title: "Engine Oils",
      description: "High-performance synthetic, semi-synthetic, and conventional engine oils for all types of vehicles and equipment.",
      features: ["Extended drain intervals", "Superior wear protection", "Improved fuel economy", "All-weather performance"],
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaIndustry className="text-4xl text-primary-600 mb-4" />,
      title: "Hydraulic Fluids",
      description: "Premium hydraulic fluids designed for industrial machinery, construction equipment, and manufacturing systems.",
      features: ["Excellent thermal stability", "Anti-wear protection", "Extended equipment life", "Wide temperature range"],
      image: "https://images.pexels.com/photos/162568/oil-industry-power-technology-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaTruck className="text-4xl text-primary-600 mb-4" />,
      title: "Transmission Fluids",
      description: "Specialized transmission fluids for automatic, manual, and heavy-duty transmissions across various applications.",
      features: ["Smooth shifting", "Oxidation resistance", "Seal compatibility", "Noise reduction"],
      image: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaWrench className="text-4xl text-primary-600 mb-4" />,
      title: "Industrial Greases",
      description: "High-performance greases for bearings, chassis, and industrial applications requiring superior lubrication.",
      features: ["Water resistance", "High temperature stability", "Extended lubrication", "Reduced downtime"],
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaShip className="text-4xl text-primary-600 mb-4" />,
      title: "Marine Lubricants",
      description: "Specialized lubricants for marine engines, deck equipment, and offshore applications in harsh environments.",
      features: ["Corrosion protection", "Salt water resistance", "Engine cleanliness", "Emissions compliance"],
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600 mb-4" />,
      title: "Eco-Friendly Options",
      description: "Biodegradable and environmentally conscious lubricant options for operations with sustainability goals.",
      features: ["Reduced environmental impact", "Biodegradable formulations", "Renewable resources", "Regulatory compliance"],
      image: "https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4"
          >
            Our Products
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            Premium Lubricants for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Application</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of high-quality lubricants designed to meet the specific needs of various industries and applications.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-xl font-bold text-neutral-800">{product.title}</h3>
                </div>
                
                <p className="text-neutral-600 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#survey" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors">
                  Request Quote
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 mb-6 max-w-3xl mx-auto">
            Can't find what you're looking for? We offer custom blending services and can source specialty lubricants for unique applications.
          </p>
          <a href="#survey" className="btn-primary inline-flex items-center">
            Contact Us for Custom Solutions
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
