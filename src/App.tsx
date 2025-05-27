import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Industries from './components/Industries';
import SurveyForm from './components/SurveyForm';
import ThankYouModal from './components/ThankYouModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useState } from 'react';

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

const App: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Industries />
      <Testimonials />
      <FAQ />
      <SurveyForm onSubmit={handleFormSubmit} />
      <Footer />
      {showThankYou && formData && (
        <ThankYouModal data={formData} onClose={closeThankYou} />
      )}
    </div>
  );
};

export default App;
