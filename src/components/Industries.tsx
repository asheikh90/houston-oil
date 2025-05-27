import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaIndustry, FaHardHat, FaTractor, FaShip, FaOilCan, FaWind, FaWarehouse } from 'react-icons/fa';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <FaTruck className="text-4xl text-primary-600" />,
      title: "Transportation & Logistics",
      description: "Save 15-20% on premium lubricants for your entire fleet with our wholesale pricing.",
      applications: ["Fleet maintenance", "Long-haul trucking", "Last-mile delivery", "Public transportation"],
      savings: ["Up to $1,200/year per truck", "Volume discounts available", "Free delivery in Houston", "Bulk pricing for fleets"]
    },
    {
      icon: <FaIndustry className="text-4xl text-primary-600" />,
      title: "Manufacturing",
      description: "Reduce maintenance costs by 15-20% with our wholesale industrial lubricants.",
      applications: ["Production lines", "CNC machines", "Hydraulic systems", "Conveyor systems"],
      savings: ["Bulk pricing from 55 gallons", "No minimum order fees", "Free technical consultation", "Scheduled delivery discounts"]
    },
    {
      icon: <FaHardHat className="text-4xl text-primary-600" />,
      title: "Construction",
      description: "Cut equipment maintenance costs with wholesale pricing on all lubricants.",
      applications: ["Excavators", "Bulldozers", "Cranes", "Concrete mixers"],
      savings: ["Save $3-5 per gallon", "Project-based pricing", "On-site delivery at no charge", "Emergency delivery available"]
    },
    {
      icon: <FaTractor className="text-4xl text-primary-600" />,
      title: "Agriculture",
      description: "Wholesale farm equipment lubricants at prices 15-20% below retail.",
      applications: ["Tractors", "Harvesters", "Irrigation systems", "Processing equipment"],
      savings: ["Seasonal discount programs", "Harvest-time priority pricing", "Bulk storage solutions", "Co-op volume discounts"]
    },
    {
      icon: <FaShip className="text-4xl text-primary-600" />,
      title: "Marine",
      description: "Marine-grade lubricants at wholesale prices with dockside delivery.",
      applications: ["Marine engines", "Deck equipment", "Offshore platforms", "Port machinery"],
      savings: ["15% below marine supply stores", "Dockside delivery included", "Bulk container options", "Fleet account discounts"]
    },
    {
      icon: <FaOilCan className="text-4xl text-primary-600" />,
      title: "Energy & Utilities",
      description: "Premium lubricants for critical infrastructure at wholesale pricing.",
      applications: ["Power plants", "Substations", "Generators", "Transmission equipment"],
      savings: ["Long-term contract discounts", "Emergency delivery at no extra cost", "Scheduled maintenance programs", "Volume-based pricing tiers"]
    },
    {
      icon: <FaWind className="text-4xl text-primary-600" />,
      title: "Renewable Energy",
      description: "Eco-friendly lubricants at competitive prices with sustainability discounts.",
      applications: ["Wind turbines", "Solar tracking systems", "Hydroelectric equipment", "Biomass facilities"],
      savings: ["Green business discounts", "Recycling program rebates", "Bulk eco-friendly options", "Sustainability partnership pricing"]
    },
    {
      icon: <FaWarehouse className="text-4xl text-primary-600" />,
      title: "Warehousing & Distribution",
      description: "Reduce equipment maintenance costs with our wholesale lubricant pricing.",
      applications: ["Forklifts", "Pallet jacks", "Conveyor systems", "Loading dock equipment"],
      savings: ["Multi-facility discount programs", "Scheduled delivery savings", "Equipment-specific packages", "Preventative maintenance plans"]
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
            INDUSTRY-SPECIFIC SAVINGS
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Save 15-20%</span> in Every Industry
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Our industry-specific pricing packages are designed to maximize your savings while meeting the exact requirements of your operations. Calculate your potential savings today.
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
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Applications:</h4>
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
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Potential Savings:</h4>
                <ul className="space-y-1">
                  {industry.savings.map((saving, savingIndex) => (
                    <li key={savingIndex} className="flex items-start">
                      <svg className="h-4 w-4 text-accent-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-600">{saving}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#survey" className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-800 transition-colors">
                Calculate Your Savings
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
            <strong className="text-primary-700">Price Calculator:</strong> Get an instant quote tailored to your industry and specific needs. Our transparent pricing means no hidden fees or surprises.
          </p>
          <a href="#survey" className="btn-primary inline-flex items-center">
            Get Your Custom Price Quote
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
