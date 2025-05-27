import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const industryValue = watch('industry');
  const productsValue = watch('products') || [];

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

  return (
    <section id="survey" className="py-16 bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fill out the form below to get a customized quote for your bulk oil and lubricant needs.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmitForm)} className="card">
            {/* Industry Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Industry Information</h3>
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
                  {errors.industry && <p className="text-red-500 mt-1">{errors.industry.message}</p>}
                </div>
                
                {industryValue === 'other' && (
                  <div>
                    <label className="block text-neutral-700 mb-2">Please specify *</label>
                    <input 
                      type="text" 
                      {...register('otherIndustry', { 
                        required: industryValue === 'other' ? 'Please specify your industry' : false 
                      })}
                      className="input-field"
                      placeholder="Your industry"
                    />
                    {errors.otherIndustry && <p className="text-red-500 mt-1">{errors.otherIndustry.message}</p>}
                  </div>
                )}
              </div>
            </div>
            
            {/* Products Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Products Needed</h3>
              <div className="mb-4">
                <label className="block text-neutral-700 mb-2">Select all that apply *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="engine-oil" 
                      value="engine-oil"
                      {...register('products', { required: 'Please select at least one product' })}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="engine-oil" className="text-neutral-700">Engine Oil</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="hydraulic-fluid" 
                      value="hydraulic-fluid"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="hydraulic-fluid" className="text-neutral-700">Hydraulic Fluid</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="transmission-fluid" 
                      value="transmission-fluid"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="transmission-fluid" className="text-neutral-700">Transmission Fluid</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="gear-oil" 
                      value="gear-oil"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="gear-oil" className="text-neutral-700">Gear Oil</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="grease" 
                      value="grease"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="grease" className="text-neutral-700">Grease</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="coolant" 
                      value="coolant"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="coolant" className="text-neutral-700">Coolant</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="other-product" 
                      value="other"
                      {...register('products')}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="other-product" className="text-neutral-700">Other</label>
                  </div>
                </div>
                {errors.products && <p className="text-red-500 mt-1">{errors.products.message}</p>}
              </div>
              
              {productsValue.includes('other') && (
                <div>
                  <label className="block text-neutral-700 mb-2">Please specify other products *</label>
                  <input 
                    type="text" 
                    {...register('otherProduct', { 
                      required: productsValue.includes('other') ? 'Please specify other products' : false 
                    })}
                    className="input-field"
                    placeholder="Other products needed"
                  />
                  {errors.otherProduct && <p className="text-red-500 mt-1">{errors.otherProduct.message}</p>}
                </div>
              )}
            </div>
            
            {/* Fleet & Timeline Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Fleet & Timeline</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-700 mb-2">Fleet Size *</label>
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
                  {errors.fleetSize && <p className="text-red-500 mt-1">{errors.fleetSize.message}</p>}
                </div>
                <div>
                  <label className="block text-neutral-700 mb-2">Delivery Timeline *</label>
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
                  {errors.deliveryTimeline && <p className="text-red-500 mt-1">{errors.deliveryTimeline.message}</p>}
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    {...register('firstName', { required: 'First name is required' })}
                    className="input-field"
                    placeholder="First name"
                  />
                  {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-neutral-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    {...register('lastName', { required: 'Last name is required' })}
                    className="input-field"
                    placeholder="Last name"
                  />
                  {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-neutral-700 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    {...register('companyName', { required: 'Company name is required' })}
                    className="input-field"
                    placeholder="Company name"
                  />
                  {errors.companyName && <p className="text-red-500 mt-1">{errors.companyName.message}</p>}
                </div>
                <div>
                  <label className="block text-neutral-700 mb-2">Email *</label>
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
                  {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-neutral-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    {...register('phone', { required: 'Phone number is required' })}
                    className="input-field"
                    placeholder="Phone number"
                  />
                  {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mb-8">
              <label className="block text-neutral-700 mb-2">Additional Information</label>
              <textarea 
                {...register('additionalInfo')}
                className="input-field min-h-[120px]"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {submitError}
              </div>
            )}
            
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="btn-primary min-w-[200px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SurveyForm;
