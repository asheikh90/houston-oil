import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SurveyForm from './components/SurveyForm'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setFormData(data);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {isSubmitted ? (
        <ThankYou formData={formData} />
      ) : (
        <>
          <Hero />
          <SurveyForm onSubmit={handleFormSubmit} />
          <Benefits />
          <Testimonials />
        </>
      )}
      
      <Footer />
    </div>
  )
}

export default App
