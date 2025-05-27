import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

type ThankYouProps = {
  formData: any;
};

const ThankYou = ({ formData }: ThankYouProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neutral-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-100 to-accent-200 rounded-tr-full opacity-40 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center"
            >
              <FaCheckCircle className="text-green-600 text-5xl" />
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading"
          >
            Thank You for Your Request!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-neutral-600 mb-12"
          >
            We've received your information and a Houston Oil Supply representative will contact you shortly to discuss your custom lubricant solution.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card mb-8"
          >
            <h3 className="text-xl font-bold text-primary-700 mb-6 pb-4 border-b border-neutral-200">
              Your Request Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-neutral-500 mb-1">Contact Information</h4>
                <p className="text-neutral-800 font-medium">{formData.firstName} {formData.lastName}</p>
                <p className="text-neutral-800">{formData.companyName}</p>
                <p className="text-neutral-800">{formData.email}</p>
                <p className="text-neutral-800">{formData.phone}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-500 mb-1">Industry</h4>
                <p className="text-neutral-800 capitalize">{formData.industry === 'other' ? formData.otherIndustry : formData.industry.replace('-', ' ')}</p>
                
                <h4 className="font-medium text-neutral-500 mt-4 mb-1">Products Requested</h4>
                <ul className="text-neutral-800">
                  {formData.products.map((product: string, index: number) => (
                    <li key={index} className="capitalize">
                      {product === 'other' ? formData.otherProduct : product.replace('-', ' ')}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6 pt-6 border-t border-neutral-200">
              <div>
                <h4 className="font-medium text-neutral-500 mb-1">Fleet Size</h4>
                <p className="text-neutral-800">{formData.fleetSize}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-500 mb-1">Delivery Timeline</h4>
                <p className="text-neutral-800 capitalize">{formData.deliveryTimeline.replace('-', ' ')}</p>
              </div>
            </div>
            
            {formData.additionalInfo && (
              <div className="mt-6 pt-6 border-t border-neutral-200 text-left">
                <h4 className="font-medium text-neutral-500 mb-1">Additional Information</h4>
                <p className="text-neutral-800">{formData.additionalInfo}</p>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-primary-50 rounded-lg p-6 border border-primary-200 mb-12"
          >
            <h3 className="text-lg font-bold text-primary-700 mb-2">What Happens Next?</h3>
            <p className="text-neutral-600 mb-4">
              A Houston Oil Supply representative will review your request and contact you within 1 business day to discuss your specific needs and provide a customized quote.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 font-medium">
              <span>Have questions?</span>
              <a href="mailto:info@houstonoilsupply.com" className="underline hover:text-primary-800">
                Contact us directly
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="/" className="btn-primary inline-flex items-center">
              Return to Homepage <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
