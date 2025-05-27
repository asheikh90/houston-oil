import React from 'react';
import { motion } from 'framer-motion';
import { FaOilCan, FaIndustry, FaTruck, FaShip, FaWrench, FaLeaf } from 'react-icons/fa';

const Products: React.FC = () => {
  const products = [
    {
      icon: <FaOilCan className="text-4xl text-primary-600 mb-4" />,
      title: "Engine Oils",
      description: "Premium synthetic and conventional engine oils at prices 15-20% below retail.",
      features: ["From $4.25/gallon", "Bulk discounts available", "Same quality as major brands", "Free delivery in Houston"],
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaIndustry className="text-4xl text-primary-600 mb-4" />,
      title: "Hydraulic Fluids",
      description: "Industrial-grade hydraulic fluids at wholesale prices with volume discounts.",
      features: ["From $3.85/gallon", "Bulk pricing available", "OEM specification compliant", "Free technical support"],
      image: "https://images.pexels.com/photos/162568/oil-industry-power-technology-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaTruck className="text-4xl text-primary-600 mb-4" />,
      title: "Transmission Fluids",
      description: "High-performance transmission fluids at prices that beat any competitor.",
      features: ["From $4.50/gallon", "Volume pricing tiers", "All specifications available", "Price match guarantee"],
      image: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaWrench className="text-4xl text-primary-600 mb-4" />,
      title: "Industrial Greases",
      description: "Premium greases for all applications at wholesale pricing with no minimum order.",
      features: ["From $5.25/lb", "Bulk container options", "Custom packaging available", "Quantity discounts"],
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaShip className="text-4xl text-primary-600 mb-4" />,
      title: "Marine Lubricants",
      description: "Specialized marine lubricants at prices 15% below marine supply stores.",
      features: ["From $5.75/gallon", "Bulk delivery options", "Meets all marine specs", "Volume discounts"],
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600 mb-4" />,
      title: "Eco-Friendly Options",
      description: "Biodegradable lubricants at competitive prices with sustainability discounts.",
      features: ["From $6.25/gallon", "Bulk pricing available", "Environmentally certified", "Recycling program discounts"],
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
            WHOLESALE PRICING
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            Premium Products at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Unbeatable Prices</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Compare our transparent pricing with competitors and save 15-20% on the exact same premium lubricants. Volume discounts available with no minimum order requirements.
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
                  Get Your Price Quote
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
            <strong className="text-primary-700">Price Match Guarantee:</strong> Found a better price? We'll match any legitimate competitor's quote and give you an additional 5% discount.
          </p>
          <a href="#survey" className="btn-primary inline-flex items-center">
            Request Your Custom Price Quote
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
