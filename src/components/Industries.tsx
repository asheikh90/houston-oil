import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaIndustry, FaHardHat, FaTractor, FaShip, FaOilCan, FaWind, FaWarehouse } from 'react-icons/fa';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <FaTruck className="text-4xl text-primary-600" />,
      title: "Transportation & Logistics",
      description: "Keep your fleet running efficiently with our premium lubricants designed for trucks, buses, and delivery vehicles.",
      applications: ["Fleet maintenance", "Long-haul trucking", "Last-mile delivery", "Public transportation"],
      benefits: ["Reduced downtime", "Extended drain intervals", "Fuel economy", "All-season protection"]
    },
    {
      icon: <FaIndustry className="text-4xl text-primary-600" />,
      title: "Manufacturing",
      description: "Optimize your production equipment with industrial lubricants that enhance performance and extend machinery life.",
      applications: ["Production lines", "CNC machines", "Hydraulic systems", "Conveyor systems"],
      benefits: ["Increased productivity", "Reduced maintenance costs", "Extended equipment life", "Temperature stability"]
    },
    {
      icon: <FaHardHat className="text-4xl text-primary-600" />,
      title: "Construction",
      description: "Protect your heavy equipment with lubricants designed to withstand extreme conditions and heavy loads.",
      applications: ["Excavators", "Bulldozers", "Cranes", "Concrete mixers"],
      benefits: ["Dirt/dust protection", "Water resistance", "Heavy load capacity", "Extended service intervals"]
    },
    {
      icon: <FaTractor className="text-4xl text-primary-600" />,
      title: "Agriculture",
      description: "Keep your agricultural equipment running smoothly through planting, growing, and harvest seasons.",
      applications: ["Tractors", "Harvesters", "Irrigation systems", "Processing equipment"],
      benefits: ["All-weather performance", "Extended drain intervals", "Equipment protection", "Reduced downtime"]
    },
    {
      icon: <FaShip className="text-4xl text-primary-600" />,
      title: "Marine",
      description: "Specialized lubricants for vessels operating in harsh marine environments, from small boats to commercial ships.",
      applications: ["Marine engines", "Deck equipment", "Offshore platforms", "Port machinery"],
      benefits: ["Corrosion protection", "Water resistance", "Salt water compatibility", "Extended service life"]
    },
    {
      icon: <FaOilCan className="text-4xl text-primary-600" />,
      title: "Energy & Utilities",
      description: "Support critical infrastructure with lubricants designed for power generation and utility equipment.",
      applications: ["Power plants", "Substations", "Generators", "Transmission equipment"],
      benefits: ["Reliability in critical systems", "Extended service life", "Temperature stability", "Reduced maintenance"]
    },
    {
      icon: <FaWind className="text-4xl text-primary-600" />,
      title: "Renewable Energy",
      description: "Specialized lubricants for wind turbines, solar tracking systems, and other renewable energy equipment.",
      applications: ["Wind turbines", "Solar tracking systems", "Hydroelectric equipment", "Biomass facilities"],
      benefits: ["Extended service intervals", "All-weather performance", "Reduced maintenance costs", "Environmental compatibility"]
    },
    {
      icon: <FaWarehouse className="text-4xl text-primary-600" />,
      title: "Warehousing & Distribution",
      description: "Keep your material handling equipment and distribution systems running smoothly and efficiently.",
      applications: ["Forklifts", "Pallet jacks", "Conveyor systems", "Loading dock equipment"],
      benefits: ["Reduced downtime", "Extended equipment life", "All-season performance", "Improved efficiency"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4"
          >
            Industries We Serve
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            Specialized Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Every Industry</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            We understand the unique challenges and requirements of different industries. Our specialized lubricants are tailored to meet the specific needs of your operations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 border border-neutral-100"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                {industry.icon}
              </div>
              
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{industry.title}</h3>
              <p className="text-neutral-600 mb-4">{industry.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Common Applications:</h4>
                <ul className="space-y-1">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <svg className="h-4 w-4 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <svg className="h-4 w-4 text-accent-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#survey" className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-800 transition-colors">
                Get Industry-Specific Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
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
            Don't see your industry listed? We serve many more sectors and can provide customized solutions for your specific needs.
          </p>
          <a href="#survey" className="btn-primary inline-flex items-center">
            Discuss Your Industry Needs
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
