import { motion } from 'framer-motion';
import { FaShieldAlt, FaTruck, FaIndustry, FaChartLine, FaLeaf, FaHandshake } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-3xl text-primary-600" />,
      title: "Wholesale Pricing",
      description: "Save 15-20% compared to competitors with our transparent bulk pricing and volume discounts for all order sizes."
    },
    {
      icon: <FaTruck className="text-3xl text-primary-600" />,
      title: "Free 24-Hour Delivery",
      description: "Zero delivery fees within Houston metro area with emergency delivery available 24/7 at no extra charge."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-primary-600" />,
      title: "Premium Quality Guarantee",
      description: "Same high-quality lubricants as premium brands at 15-20% lower prices, backed by our satisfaction guarantee."
    },
    {
      icon: <FaHandshake className="text-3xl text-primary-600" />,
      title: "Price Match Promise",
      description: "Found a better price? We'll match any legitimate competitor's quote and give you an additional 5% discount."
    },
    {
      icon: <FaIndustry className="text-3xl text-primary-600" />,
      title: "Bulk Order Discounts",
      description: "Progressive discount structure starting at just 55 gallons, with additional savings at 110, 220, and 330+ gallons."
    },
    {
      icon: <FaLeaf className="text-3xl text-primary-600" />,
      title: "No Minimum Orders",
      description: "Enjoy wholesale pricing without large minimum order requirements, perfect for businesses of all sizes."
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4"
          >
            SAVE 15-20% GUARANTEED
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Most Affordable</span> Premium Lubricants in Houston
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            We deliver premium quality at wholesale prices. Our transparent pricing model eliminates middlemen markups, passing the savings directly to you.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary-800 mb-3">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
              
              <a href="#survey" className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-800 transition-colors">
                Get Your Price Quote
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
          <a href="#survey" className="btn-primary inline-flex items-center">
            Calculate Your Savings
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
