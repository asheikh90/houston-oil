import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden"
      >
        <div className="bg-primary-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Thank You!</h2>
        </div>
        
        <div className="p-6">
          <p className="text-lg mb-4">
            Thank you for your interest in Houston Bulk Oil & Lubricants, {data.firstName}. We've received your request and will contact you shortly.
          </p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-neutral-800 mb-2">Request Summary:</h3>
            <ul className="text-neutral-600 space-y-1">
              <li><span className="font-medium">Industry:</span> {data.industry === 'other' ? data.otherIndustry : data.industry}</li>
              <li>
                <span className="font-medium">Products:</span> {data.products.map(p => p === 'other' ? data.otherProduct : p).join(', ')}
              </li>
              <li><span className="font-medium">Fleet Size:</span> {data.fleetSize}</li>
              <li><span className="font-medium">Timeline:</span> {data.deliveryTimeline}</li>
            </ul>
          </div>
          
          <p className="text-neutral-600 mb-6">
            A copy of this request has been sent to your email at {data.email}. If you have any immediate questions, please contact our customer service team.
          </p>
          
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouModal;
