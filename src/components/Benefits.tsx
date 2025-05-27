import { motion } from 'framer-motion';
import { FaTruck, FaMoneyBillWave, FaFlask, FaHandshake, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaTruck className="text-4xl text-primary-600" />,
      title: "Fast Delivery",
      description: "Same-day or next-day delivery throughout the Houston metro area. Emergency delivery available 24/7."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary-600" />,
      title: "Competitive Pricing",
      description: "Bulk discounts and flexible payment terms for businesses of all sizes. Volume-based pricing tiers."
    },
    {
      icon: <FaFlask className="text-4xl text-primary-600" />,
      title: "Premium Quality",
      description: "All products meet or exceed industry specifications and OEM requirements. Certified and tested."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-600" />,
      title: "Dedicated Support",
      description: "Expert technical assistance and personalized account management for all customers."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      title: "Product Guarantee",
      description: "All lubricants backed by our satisfaction guarantee. We stand behind every product we sell."
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600" />,
      title: "Environmentally Conscious",
      description: "Eco-friendly options available. Responsible disposal and recycling programs for used oils."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading">Why Choose Houston Lubricants</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide premium lubricant solutions with exceptional service to keep your business running smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary-500 hover:border transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Ready to Optimize Your Lubricant Supply?</h3>
              <p className="text-primary-100 mb-6">
                Our team of experts is ready to help you find the perfect solution for your business needs. Get in touch today for a personalized consultation.
              </p>
              <a href="#survey" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Request a Quote
              </a>
            </div>
            <div className="hidden md:block h-full">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Industrial facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
