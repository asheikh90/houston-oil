import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Houston Lubricants has been our trusted supplier for over 5 years. Their quality products and reliable delivery have kept our fleet running smoothly without interruption.",
    author: "Michael Rodriguez",
    position: "Fleet Manager",
    company: "Gulf Coast Logistics",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "We switched to Houston Lubricants after experiencing quality issues with our previous supplier. The difference was immediate - better performance, fewer maintenance issues, and excellent technical support.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "Texas Manufacturing Solutions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As a construction company with equipment operating in challenging conditions, we need lubricants we can rely on. Houston Lubricants delivers premium products that extend our equipment life and reduce downtime.",
    author: "David Martinez",
    position: "Procurement Manager",
    company: "Bayou Builders Inc.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted by leading businesses across Houston and the Gulf Coast region.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <div className="mb-4">
                      <svg className="w-10 h-10 text-primary-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    
                    <p className="text-lg text-neutral-700 italic mb-6">
                      {testimonials[activeIndex].quote}
                    </p>
                    
                    <div>
                      <p className="font-bold text-primary-700">{testimonials[activeIndex].author}</p>
                      <p className="text-neutral-500">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-600 w-6' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/150x60?text=Client+Logo" alt="Client logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/150x60?text=Client+Logo" alt="Client logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/150x60?text=Client+Logo" alt="Client logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/150x60?text=Client+Logo" alt="Client logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/150x60?text=Client+Logo" alt="Client logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
