import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndustry, FaOilCan, FaTruck, FaCalendarAlt, FaUser, FaBuilding, FaPhone, FaEnvelope, FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

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

type SurveyFormProps = {
  onSubmit: (data: FormData) => void;
};

const SurveyForm = ({ onSubmit }: SurveyFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      products: [],
    }
  });
  
  const industry = watch('industry');
  const products = watch('products');
  
  const nextStep = () => {
    window.scrollTo({ top: document.getElementById('survey')?.offsetTop || 0, behavior: 'smooth' });
    setStep(step + 1);
  };
  
  const prevStep = () => setStep(step - 1);
  
  const onSubmitForm: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(data);
      setIsSubmitting(false);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
  };

  // Parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Industry images
  const industryImages = {
    manufacturing: "https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    transportation: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    construction: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    energy: "https://images.pexels.com/photos/2581482/pexels-photo-2581482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    marine: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    agriculture: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    automotive: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aviation: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    mining: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    other: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };

  // Product images
  const productImages = {
    "motor-oil": "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "hydraulic-fluid": "https://images.pexels.com/photos/162568/oil-industry-pump-jack-sunset-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "industrial-grease": "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "transmission-fluid": "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "coolant": "https://images.pexels.com/photos/3822844/pexels-photo-3822844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "other": "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };

  return (
    <section id="survey" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neutral-50 z-0"></div>
      
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50 z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-100 to-accent-200 rounded-tr-full opacity-40 z-0"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      ></div>
      
      <div className="absolute left-10 top-1/4 w-20 h-20 bg-primary-100 rounded-full opacity-60 z-0"></div>
      <div className="absolute right-1/4 bottom-1/3 w-12 h-12 bg-accent-100 rounded-full opacity-60 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">Custom Quote Request</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading">
            Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Lubricant Solution</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Tell us about your business needs, and we'll provide a customized quote for premium bulk lubricants tailored to your industry.
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center relative">
                <motion.div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-medium shadow-md transition-all duration-300 ${
                    step > stepNumber 
                      ? 'bg-primary-600 text-white' 
                      : step === stepNumber 
                        ? 'bg-primary-600 text-white ring-4 ring-primary-100' 
                        : 'bg-white text-neutral-400 border border-neutral-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  animate={step === stepNumber ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.5, repeat: step === stepNumber ? Infinity : 0, repeatType: "reverse" }}
                >
                  {step > stepNumber ? <FaCheck /> : stepNumber}
                </motion.div>
                <div className={`text-xs mt-3 font-medium transition-all duration-300 ${
                  step >= stepNumber ? 'text-primary-700' : 'text-neutral-400'
                }`}>
                  {stepNumber === 1 && 'Industry'}
                  {stepNumber === 2 && 'Products'}
                  {stepNumber === 3 && 'Logistics'}
                  {stepNumber === 4 && 'Contact'}
                </div>
                
                {/* Connector line */}
                {stepNumber < 4 && (
                  <div className="absolute top-6 left-[3rem] w-[calc(100%_-_3rem)] h-[2px] bg-neutral-200">
                    <motion.div 
                      className="h-full bg-primary-600 transition-all duration-500"
                      initial={{ width: step > stepNumber ? '100%' : '0%' }}
                      animate={{ width: step > stepNumber ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="card border-t-4 border-t-primary-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <FaIndustry className="text-xl text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-700">
                        Your Industry
                      </h3>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-neutral-700 font-medium mb-3">What industry are you in?</label>
                      <select 
                        {...register('industry', { required: 'Please select your industry' })}
                        className="select-field"
                      >
                        <option value="">Select your industry</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="transportation">Transportation & Logistics</option>
                        <option value="construction">Construction</option>
                        <option value="energy">Energy & Utilities</option>
                        <option value="marine">Marine</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="automotive">Automotive</option>
                        <option value="aviation">Aviation</option>
                        <option value="mining">Mining</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.industry.message}
                        </p>
                      )}
                    </div>
                    
                    {/* Industry image preview */}
                    {industry && (
                      <motion.div 
                        className="mb-8 overflow-hidden rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={industryImages[industry as keyof typeof industryImages]} 
                            alt={industry} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h4 className="font-bold text-lg capitalize">
                              {industry === 'other' ? 'Custom Industry' : industry.replace('-', ' ')}
                            </h4>
                            <p className="text-sm text-white/80">
                              {industry === 'manufacturing' && 'Equipment & Process Lubrication'}
                              {industry === 'transportation' && 'Fleet Maintenance Solutions'}
                              {industry === 'construction' && 'Heavy Equipment Lubrication'}
                              {industry === 'energy' && 'Oil & Gas, Power Generation'}
                              {industry === 'marine' && 'Marine Engine & Equipment Oils'}
                              {industry === 'agriculture' && 'Farm Equipment Lubricants'}
                              {industry === 'automotive' && 'Vehicle Maintenance Products'}
                              {industry === 'aviation' && 'Aircraft Maintenance Fluids'}
                              {industry === 'mining' && 'Heavy Machinery Lubricants'}
                              {industry === 'other' && 'Specialized Lubricant Solutions'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {industry === 'other' && (
                      <div className="mb-8">
                        <label className="block text-neutral-700 font-medium mb-3">Please specify your industry</label>
                        <input 
                          type="text" 
                          {...register('otherIndustry', { 
                            required: 'Please specify your industry' 
                          })}
                          className="input-field"
                          placeholder="Your industry"
                        />
                        {errors.otherIndustry && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.otherIndustry.message}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-end mt-8">
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!industry || (industry === 'other' && !watch('otherIndustry'))}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next Step <FaArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <FaOilCan className="text-xl text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-700">
                        Product Interests
                      </h3>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-neutral-700 font-medium mb-3">
                        Which products are you interested in? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-motor-oil" 
                            value="motor-oil"
                            {...register('products', { 
                              required: 'Please select at least one product' 
                            })}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-motor-oil" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["motor-oil"]} 
                                alt="Motor Oil" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('motor-oil') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Motor Oil</h4>
                              <p className="text-sm text-neutral-600">Synthetic, Semi-Synthetic & Conventional</p>
                            </div>
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-hydraulic-fluid" 
                            value="hydraulic-fluid"
                            {...register('products')}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-hydraulic-fluid" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["hydraulic-fluid"]} 
                                alt="Hydraulic Fluid" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('hydraulic-fluid') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Hydraulic Fluid</h4>
                              <p className="text-sm text-neutral-600">Industrial & Mobile Equipment</p>
                            </div>
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-industrial-grease" 
                            value="industrial-grease"
                            {...register('products')}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-industrial-grease" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["industrial-grease"]} 
                                alt="Industrial Grease" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('industrial-grease') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Industrial Grease</h4>
                              <p className="text-sm text-neutral-600">High-Temperature & Water-Resistant</p>
                            </div>
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-transmission-fluid" 
                            value="transmission-fluid"
                            {...register('products')}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-transmission-fluid" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["transmission-fluid"]} 
                                alt="Transmission Fluid" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('transmission-fluid') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Transmission Fluid</h4>
                              <p className="text-sm text-neutral-600">Automatic & Manual Transmission</p>
                            </div>
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-coolant" 
                            value="coolant"
                            {...register('products')}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-coolant" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["coolant"]} 
                                alt="Coolant" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('coolant') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Coolant</h4>
                              <p className="text-sm text-neutral-600">Extended Life & Heavy Duty</p>
                            </div>
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <input 
                            type="checkbox" 
                            id="product-other" 
                            value="other"
                            {...register('products')}
                            className="sr-only peer"
                          />
                          <label 
                            htmlFor="product-other" 
                            className="flex flex-col cursor-pointer overflow-hidden h-full"
                          >
                            <div className="relative h-32">
                              <img 
                                src={productImages["other"]} 
                                alt="Other Products" 
                                className="w-full h-full object-cover transition-transform duration-500 peer-checked:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                                <FaCheck className="text-primary-600 text-sm" />
                              </div>
                            </div>
                            <div className={`p-4 transition-colors ${products.includes('other') ? 'bg-primary-50 border-primary-500' : 'bg-white'}`}>
                              <h4 className="font-bold">Other Products</h4>
                              <p className="text-sm text-neutral-600">Specialty Lubricants & Fluids</p>
                            </div>
                          </label>
                        </motion.div>
                      </div>
                      
                      {errors.products && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.products.message}
                        </p>
                      )}
                    </div>
                    
                    {products.includes('other') && (
                      <div className="mb-8">
                        <label className="block text-neutral-700 font-medium mb-3">Please specify other products</label>
                        <input 
                          type="text" 
                          {...register('otherProduct', { 
                            required: products.includes('other') ? 'Please specify other products' : false 
                          })}
                          className="input-field"
                          placeholder="Other products you're interested in"
                        />
                        {errors.otherProduct && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.otherProduct.message}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaArrowLeft className="mr-2" /> Previous
                      </motion.button>
                      
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!products.length || (products.includes('other') && !watch('otherProduct'))}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next Step <FaArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <FaTruck className="text-xl text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-700">
                        Logistics Information
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">Fleet Size / Equipment Count</label>
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
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.fleetSize.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">Delivery Timeline</label>
                        <select 
                          {...register('deliveryTimeline', { required: 'Please select your delivery timeline' })}
                          className="select-field"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (within 24 hours)</option>
                          <option value="this-week">This week</option>
                          <option value="next-week">Next week</option>
                          <option value="this-month">This month</option>
                          <option value="exploring">Just exploring options</option>
                        </select>
                        {errors.deliveryTimeline && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.deliveryTimeline.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Animated logistics illustration */}
                    <motion.div 
                      className="mb-8 bg-primary-50 rounded-lg p-6 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
                          <h4 className="text-lg font-bold text-primary-800 mb-2">Houston Oil Supply Delivery</h4>
                          <p className="text-neutral-700 mb-4">
                            We offer flexible delivery options throughout the Houston metro area, with 24-hour emergency service available.
                          </p>
                          <div className="flex items-center text-primary-700 font-medium">
                            <FaCalendarAlt className="mr-2" />
                            <span>Scheduled or on-demand delivery</span>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 relative h-40">
                          <motion.div
                            className="absolute left-0 bottom-0 w-16 h-16"
                            animate={{ x: [0, 180, 180, 0, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M60 36H48V16H8C5.8 16 4 17.8 4 20V44H8C8 48.4 11.6 52 16 52C20.4 52 24 48.4 24 44H40C40 48.4 43.6 52 48 52C52.4 52 56 48.4 56 44H60V36Z" fill="#0284C7"/>
                              <path d="M16 48C18.2 48 20 46.2 20 44C20 41.8 18.2 40 16 40C13.8 40 12 41.8 12 44C12 46.2 13.8 48 16 48Z" fill="#333"/>
                              <path d="M48 48C50.2 48 52 46.2 52 44C52 41.8 50.2 40 48 40C45.8 40 44 41.8 44 44C44 46.2 45.8 48 48 48Z" fill="#333"/>
                            </svg>
                          </motion.div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-300"></div>
                          <div className="absolute right-0 bottom-2 w-20 h-20">
                            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M32 4C18.7 4 8 14.7 8 28C8 44 32 60 32 60C32 60 56 44 56 28C56 14.7 45.3 4 32 4Z" fill="#0284C7"/>
                              <path d="M32 36C36.4 36 40 32.4 40 28C40 23.6 36.4 20 32 20C27.6 20 24 23.6 24 28C24 32.4 27.6 36 32 36Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaArrowLeft className="mr-2" /> Previous
                      </motion.button>
                      
                      <motion.button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!watch('fleetSize') || !watch('deliveryTimeline')}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next Step <FaArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {step === 4 && (
                  <motion.div
                    key="step4"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <FaUser className="text-xl text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-700">
                        Contact Information
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">First Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-neutral-400" />
                          </div>
                          <input 
                            type="text" 
                            {...register('firstName', { required: 'First name is required' })}
                            className="input-field pl-10"
                            placeholder="Your first name"
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">Last Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-neutral-400" />
                          </div>
                          <input 
                            type="text" 
                            {...register('lastName', { required: 'Last name is required' })}
                            className="input-field pl-10"
                            placeholder="Your last name"
                          />
                        </div>
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-neutral-700 font-medium mb-3">Company Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBuilding className="text-neutral-400" />
                        </div>
                        <input 
                          type="text" 
                          {...register('companyName', { required: 'Company name is required' })}
                          className="input-field pl-10"
                          placeholder="Your company name"
                        />
                      </div>
                      {errors.companyName && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-neutral-400" />
                          </div>
                          <input 
                            type="email" 
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                            })}
                            className="input-field pl-10"
                            placeholder="your.email@company.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-neutral-700 font-medium mb-3">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="text-neutral-400" />
                          </div>
                          <input 
                            type="tel" 
                            {...register('phone', { 
                              required: 'Phone number is required',
                              pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                message: "Invalid phone number format"
                              }
                            })}
                            className="input-field pl-10"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-neutral-700 font-medium mb-3">Additional Information (Optional)</label>
                      <textarea 
                        {...register('additionalInfo')}
                        className="input-field min-h-[100px]"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button" 
                        onClick={prevStep}
                        className="btn-secondary flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaArrowLeft className="mr-2" /> Previous
                      </motion.button>
                      
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Request <FaArrowRight className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SurveyForm;
