import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX, FiUser, FiMail, FiPhone, FiClipboard, FiTruck, FiCalendar } from 'react-icons/fi';
import Lottie from 'react-lottie-player';
import successAnimation from '../assets/animations/success.json';

type FormData = {
  industry: string;
  otherIndustry?: string;
  products: string[];
  otherProduct?: string;
  fleetSize: string;
  deliveryTimeline: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  additionalInfo?: string;
};

interface ThankYouModalProps {
  data: FormData;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ data, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            <FiX size={24} />
          </button>
          
          <div className="bg-primary-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <Lottie
                loop={false}
                animationData={successAnimation}
                play
                style={{ width: 120, height: 120 }}
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
            <p className="text-primary-100">Your request has been successfully submitted</p>
          </div>
          
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-4"
            >
              <p>
                Thank you for your interest in Houston Bulk Oil & Lubricants, <span className="font-semibold">{data.firstName}</span>. We've received your request and will contact you shortly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 bg-neutral-50 p-4 rounded-lg border border-neutral-200"
            >
              <h3 className="font-semibold text-neutral-800 mb-3 flex items-center">
                <FiClipboard className="mr-2 text-primary-600" /> Request Summary:
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiUser />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Industry</div>
                    <div className="font-medium">{data.industry === 'other' ? data.otherIndustry : data.industry}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiClipboard />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Products</div>
                    <div className="font-medium">{data.products.map(p => p === 'other' ? data.otherProduct : p).join(', ')}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiTruck />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Fleet Size</div>
                    <div className="font-medium">{data.fleetSize}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiCalendar />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Timeline</div>
                    <div className="font-medium">{data.deliveryTimeline}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="font-medium">{data.email}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-0.5">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Phone</div>
                    <div className="font-medium">{data.phone}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-neutral-600 mb-6"
            >
              A copy of this request has been sent to your email at <span className="text-primary-700 font-medium">{data.email}</span>. If you have any immediate questions, please contact our customer service team.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <button 
                onClick={onClose}
                className="btn-primary min-w-[200px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCheckCircle className="mr-2" /> Close
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThankYouModal;
