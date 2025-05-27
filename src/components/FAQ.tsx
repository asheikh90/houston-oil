import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What delivery options do you offer for bulk oil and lubricants?",
      answer: "We offer flexible delivery options to meet your needs. This includes scheduled deliveries, emergency 24/7 service, and customized delivery plans based on your consumption patterns. Our fleet covers the entire Houston metropolitan area and surrounding regions."
    },
    {
      question: "Do you provide technical support for lubricant selection?",
      answer: "Yes, our team of lubrication specialists provides comprehensive technical support. We can help you select the right products based on your equipment specifications, operating conditions, and performance requirements. We also offer on-site consultations and lubricant analysis services."
    },
    {
      question: "What is your minimum order quantity for bulk lubricants?",
      answer: "Our minimum order quantities vary by product type. For most bulk oils, we offer deliveries starting at 55-gallon drums, with options for 275-gallon totes and tanker deliveries for larger volumes. We can work with you to develop a supply plan that matches your storage capacity and usage rates."
    },
    {
      question: "Can you help us transition to more environmentally friendly lubricants?",
      answer: "Absolutely. We offer a range of environmentally friendly and biodegradable lubricant options. Our specialists can assess your current lubricant usage and recommend eco-friendly alternatives that meet or exceed your performance requirements while helping you achieve your sustainability goals."
    },
    {
      question: "Do you offer lubricant storage solutions?",
      answer: "Yes, we provide various storage solutions including tanks, dispensing equipment, and containment systems. We can help you design an efficient lubricant storage and handling system that ensures product integrity, prevents contamination, and complies with environmental regulations."
    },
    {
      question: "What quality standards do your lubricants meet?",
      answer: "All our lubricants meet or exceed industry specifications and OEM requirements. We carry products that comply with API, ISO, DIN, and other international standards. We maintain strict quality control procedures and can provide detailed product specifications and safety data sheets for all our products."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4"
          >
            Frequently Asked Questions
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            Common Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Answered</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Find answers to commonly asked questions about our products, services, and delivery options.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary-50 text-primary-800' 
                    : 'bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 text-primary-600' : 'text-neutral-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-white border border-neutral-100 rounded-b-lg shadow-sm mt-1"
                >
                  <p className="text-neutral-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 mb-6">
            Don't see your question answered? Contact us directly for more information.
          </p>
          <a href="#survey" className="btn-primary inline-flex items-center">
            Contact Our Experts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
