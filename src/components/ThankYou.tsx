import { motion } from 'framer-motion';
import { FaCheckCircle, FaPhone, FaEnvelope, FaArrowLeft } from 'react-icons/fa';

type ThankYouProps = {
  formData: any;
};

const ThankYou = ({ formData }: ThankYouProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <FaCheckCircle className="text-4xl text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading">
            Thank You for Your Request!
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            We've received your information and a member of our team will contact you shortly to discuss your custom lubricant solution.
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold text-primary-700 mb-4">Request Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-medium text-neutral-500 mb-1">Contact Information</h3>
                <p className="text-neutral-800 mb-1">
                  {formData?.firstName} {formData?.lastName}
                </p>
                <p className="text-neutral-800 mb-1">{formData?.companyName}</p>
                <p className="text-neutral-800 mb-1">{formData?.email}</p>
                <p className="text-neutral-800">{formData?.phone}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-neutral-500 mb-1">Request Details</h3>
                <p className="text-neutral-800 mb-1">
                  <span className="font-medium">Industry:</span> {formData?.industry === 'other' ? formData?.otherIndustry : formData?.industry}
                </p>
                <p className="text-neutral-800 mb-1">
                  <span className="font-medium">Products:</span> {formData?.products?.join(', ')}
                  {formData?.otherProduct && `, ${formData.otherProduct}`}
                </p>
                <p className="text-neutral-800 mb-1">
                  <span className="font-medium">Fleet Size:</span> {formData?.fleetSize}
                </p>
                <p className="text-neutral-800">
                  <span className="font-medium">Timeline:</span> {formData?.deliveryTimeline}
                </p>
              </div>
            </div>
            
            {formData?.additionalInfo && (
              <div className="mt-6 text-left">
                <h3 className="font-medium text-neutral-500 mb-1">Additional Information</h3>
                <p className="text-neutral-800">{formData.additionalInfo}</p>
              </div>
            )}
          </div>
          
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-primary-700 mb-4">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-bold text-primary-700">1</span>
                </div>
                <h3 className="font-bold text-primary-700 mb-2">Review</h3>
                <p className="text-sm text-neutral-600">Our team will review your requirements</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-bold text-primary-700">2</span>
                </div>
                <h3 className="font-bold text-primary-700 mb-2">Contact</h3>
                <p className="text-sm text-neutral-600">A specialist will contact you within 24 hours</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-bold text-primary-700">3</span>
                </div>
                <h3 className="font-bold text-primary-700 mb-2">Solution</h3>
                <p className="text-sm text-neutral-600">We'll provide a customized quote and solution</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="tel:+12672121034" className="btn-secondary flex items-center">
              <FaPhone className="mr-2" /> (267) 212-1034
            </a>
            
            <a href="mailto:info@houstonoilsupply.com" className="btn-secondary flex items-center">
              <FaEnvelope className="mr-2" /> info@houstonoilsupply.com
            </a>
          </div>
          
          <div className="mt-8">
            <a href="/" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors">
              <FaArrowLeft className="mr-2" /> Back to Homepage
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
