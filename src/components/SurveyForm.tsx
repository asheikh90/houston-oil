import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiAlertTriangle, FiChevronRight, FiSend, FiTruck, FiCalendar, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { supabase } from '../lib/supabase';
import Lottie from 'react-lottie-player';
import formSubmitAnimation from '../assets/animations/form-submit.json';
import formLoadingAnimation from '../assets/animations/form-loading.json';

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

interface SurveyFormProps {
  onSubmit: (data: FormData) => void;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, watch, formState: { errors, isSubmitSuccessful } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const industryValue = watch('industry');
  const productsValue = watch('products') || [];

  // Update progress bar
  useEffect(() => {
    const progress = ((currentStep - 1) / 3) * 100;
    setFormProgress(progress);
  }, [currentStep]);

  const onSubmitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            industry: data.industry,
            other_industry: data.otherIndustry,
            products: data.products,
            other_product: data.otherProduct,
            fleet_size: data.fleetSize,
            delivery_timeline: data.deliveryTimeline,
            first_name: data.firstName,
            last_name: data.lastName,
            company_name: data.companyName,
            email: data.email,
            phone: data.phone,
            additional_info: data.additionalInfo
          }
        ]);
      
      if (error) throw error;
      
      // Call the parent onSubmit function
      onSubmit(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return industryValue && (!errors.industry && !(industryValue === 'other' && errors.otherIndustry));
      case 2:
        return productsValue.length > 0 && !errors.products && !(productsValue.includes('other') && errors.otherProduct);
      case 3:
        return !errors.fleetSize && !errors.deliveryTimeline;
      default:
        return true;
    }
  };

  return (
    <section id="survey" className="py-16 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Request a Customized Quote
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fill out the form below to get a tailored quote for your bulk oil and lubricant needs.
              Our experts will analyze your requirements and provide the best solution.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="card relative overflow-hidden border border-neutral-200"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200">
              <motion.div 
                className="h-full bg-primary-600"
                initial={{ width: 0 }}
                animate={{ width: `${formProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* Steps Indicator */}
            <div className="flex justify-between mb-8 pt-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <motion.div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep === step 
                        ? 'bg-primary-600 text-white' 
                        : currentStep > step 
                          ? 'bg-primary-200 text-primary-800' 
                          : 'bg-neutral-200 text-neutral-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentStep > step ? <FiCheckCircle size={20} /> : step}
                  </motion.div>
                  <span className={`text-xs mt-1 ${
                    currentStep === step 
                      ? 'text-primary-600 font-medium' 
                      : 'text-neutral-500'
                  }`}>
                    {step === 1 ? 'Industry' : 
                     step === 2 ? 'Products' : 
                     step === 3 ? 'Details' : 'Contact'}
                  </span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Industry Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                        <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                        Industry Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-neutral-700 mb-2">Industry *</label>
                          <select 
                            {...register('industry', { required: 'Please select your industry' })}
                            className="select-field"
                          >
                            <option value="">Select your industry</option>
                            <option value="transportation">Transportation</option>
                            <option value="construction">Construction</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="mining">Mining</option>
                            <option value="marine">Marine</option>
                            <option value="energy">Energy</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.industry && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.industry.message}
                            </motion.p>
                          )}
                        </div>
                        
                        {industryValue === 'other' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <label className="block text-neutral-700 mb-2">Please specify *</label>
                            <input 
                              type="text" 
                              {...register('otherIndustry', { 
                                required: industryValue === 'other' ? 'Please specify your industry' : false 
                              })}
                              className="input-field"
                              placeholder="Your industry"
                            />
                            {errors.otherIndustry && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 mt-1 flex items-center"
                              >
                                <FiAlertTriangle className="mr-1" /> {errors.otherIndustry.message}
                              </motion.p>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        className={`btn-primary flex items-center ${!validateStep(1) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!validateStep(1)}
                        whileHover={{ scale: validateStep(1) ? 1.05 : 1 }}
                        whileTap={{ scale: validateStep(1) ? 0.95 : 1 }}
                      >
                        Next <FiChevronRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Products Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                        <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                        Products Needed
                      </h3>
                      <div className="mb-4">
                        <label className="block text-neutral-700 mb-2">Select all that apply *</label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            { id: 'engine-oil', label: 'Engine Oil', value: 'engine-oil' },
                            { id: 'hydraulic-fluid', label: 'Hydraulic Fluid', value: 'hydraulic-fluid' },
                            { id: 'transmission-fluid', label: 'Transmission Fluid', value: 'transmission-fluid' },
                            { id: 'gear-oil', label: 'Gear Oil', value: 'gear-oil' },
                            { id: 'grease', label: 'Grease', value: 'grease' },
                            { id: 'coolant', label: 'Coolant', value: 'coolant' },
                            { id: 'other-product', label: 'Other', value: 'other' }
                          ].map((product, index) => (
                            <motion.div 
                              key={product.id}
                              className="flex items-start"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { delay: index * 0.05 }
                              }}
                            >
                              <Controller
                                name="products"
                                control={control}
                                defaultValue={[]}
                                rules={{ required: 'Please select at least one product' }}
                                render={({ field }) => (
                                  <label 
                                    htmlFor={product.id} 
                                    className={`flex items-center p-3 border rounded-lg w-full cursor-pointer transition-all ${
                                      field.value?.includes(product.value) 
                                        ? 'bg-primary-50 border-primary-300 text-primary-700' 
                                        : 'bg-white border-neutral-200 hover:border-primary-200'
                                    }`}
                                  >
                                    <input 
                                      type="checkbox" 
                                      id={product.id} 
                                      value={product.value}
                                      checked={field.value?.includes(product.value)}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        const values = field.value || [];
                                        field.onChange(
                                          e.target.checked
                                            ? [...values, value]
                                            : values.filter(v => v !== value)
                                        );
                                      }}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                                      field.value?.includes(product.value) 
                                        ? 'bg-primary-500 border-primary-500' 
                                        : 'border-neutral-300'
                                    }`}>
                                      {field.value?.includes(product.value) && (
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                    {product.label}
                                  </label>
                                )}
                              />
                            </motion.div>
                          ))}
                        </div>
                        {errors.products && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 mt-1 flex items-center"
                          >
                            <FiAlertTriangle className="mr-1" /> {errors.products.message}
                          </motion.p>
                        )}
                      </div>
                      
                      {productsValue.includes('other') && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-neutral-700 mb-2">Please specify other products *</label>
                          <input 
                            type="text" 
                            {...register('otherProduct', { 
                              required: productsValue.includes('other') ? 'Please specify other products' : false 
                            })}
                            className="input-field"
                            placeholder="Other products needed"
                          />
                          {errors.otherProduct && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.otherProduct.message}
                            </motion.p>
                          )}
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        className={`btn-primary flex items-center ${!validateStep(2) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!validateStep(2)}
                        whileHover={{ scale: validateStep(2) ? 1.05 : 1 }}
                        whileTap={{ scale: validateStep(2) ? 0.95 : 1 }}
                      >
                        Next <FiChevronRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Fleet & Timeline Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                        <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">3</span>
                        Fleet & Timeline
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiTruck className="mr-2 text-primary-600" /> Fleet Size *
                          </label>
                          <select 
                            {...register('fleetSize', { required: 'Please select your fleet size' })}
                            className="select-field"
                          >
                            <option value="">Select fleet size</option>
                            <option value="1-5">1-5 vehicles/equipment</option>
                            <option value="6-20">6-20 vehicles/equipment</option>
                            <option value="21-50">21-50 vehicles/equipment</option>
                            <option value="51-100">51-100 vehicles/equipment</option>
                            <option value="100+">100+ vehicles/equipment</option>
                          </select>
                          {errors.fleetSize && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.fleetSize.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiCalendar className="mr-2 text-primary-600" /> Delivery Timeline *
                          </label>
                          <select 
                            {...register('deliveryTimeline', { required: 'Please select your delivery timeline' })}
                            className="select-field"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate (within 1 week)</option>
                            <option value="soon">Soon (within 1 month)</option>
                            <option value="planning">Planning (1-3 months)</option>
                            <option value="future">Future (3+ months)</option>
                          </select>
                          {errors.deliveryTimeline && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.deliveryTimeline.message}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        className={`btn-primary flex items-center ${!validateStep(3) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!validateStep(3)}
                        whileHover={{ scale: validateStep(3) ? 1.05 : 1 }}
                        whileTap={{ scale: validateStep(3) ? 0.95 : 1 }}
                      >
                        Next <FiChevronRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Contact Information */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center">
                        <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">4</span>
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiUser className="mr-2 text-primary-600" /> First Name *
                          </label>
                          <input 
                            type="text" 
                            {...register('firstName', { required: 'First name is required' })}
                            className="input-field"
                            placeholder="First name"
                          />
                          {errors.firstName && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.firstName.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiUser className="mr-2 text-primary-600" /> Last Name *
                          </label>
                          <input 
                            type="text" 
                            {...register('lastName', { required: 'Last name is required' })}
                            className="input-field"
                            placeholder="Last name"
                          />
                          {errors.lastName && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.lastName.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiUser className="mr-2 text-primary-600" /> Company Name *
                          </label>
                          <input 
                            type="text" 
                            {...register('companyName', { required: 'Company name is required' })}
                            className="input-field"
                            placeholder="Company name"
                          />
                          {errors.companyName && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.companyName.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiMail className="mr-2 text-primary-600" /> Email *
                          </label>
                          <input 
                            type="email" 
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                            className="input-field"
                            placeholder="Email address"
                          />
                          {errors.email && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.email.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label className="block text-neutral-700 mb-2 flex items-center">
                            <FiPhone className="mr-2 text-primary-600" /> Phone *
                          </label>
                          <input 
                            type="tel" 
                            {...register('phone', { required: 'Phone number is required' })}
                            className="input-field"
                            placeholder="Phone number"
                          />
                          {errors.phone && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 mt-1 flex items-center"
                            >
                              <FiAlertTriangle className="mr-1" /> {errors.phone.message}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div className="mb-8">
                      <label className="block text-neutral-700 mb-2 flex items-center">
                        <FiMessageSquare className="mr-2 text-primary-600" /> Additional Information
                      </label>
                      <textarea 
                        {...register('additionalInfo')}
                        className="input-field min-h-[120px]"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                    
                    {submitError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center"
                      >
                        <FiAlertTriangle className="mr-2" /> {submitError}
                      </motion.div>
                    )}
                    
                    <div className="flex justify-between">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                      <motion.button 
                        type="submit" 
                        className="btn-primary min-w-[200px] flex items-center justify-center"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Lottie
                              loop
                              animationData={formLoadingAnimation}
                              play
                              style={{ width: 24, height: 24, marginRight: 8 }}
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FiSend className="mr-2" /> Submit Request
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurveyForm;
