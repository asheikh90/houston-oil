import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "Fleet Manager",
      company: "Houston Logistics Co.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Houston Oil Supply has been our trusted partner for over 5 years. Their premium lubricants and on-time delivery have significantly reduced our fleet maintenance costs and downtime.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "Gulf Manufacturing Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The technical expertise of the Houston Oil Supply team is unmatched. They helped us identify the perfect lubricant solution for our specialized equipment, improving efficiency by 23%.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      position: "Maintenance Supervisor",
      company: "Texas Energy Systems",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "When we had an emergency situation at our plant, Houston Oil Supply delivered the lubricants we needed within hours. Their 24-hour service is a game-changer for our operations.",
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4"
          >
            Client Testimonials
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-heading"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the businesses that trust Houston Oil Supply for their lubrication needs.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-100">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-2">
                        <FaQuoteLeft />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-neutral-700 italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-xl font-bold text-primary-800">{testimonials[currentIndex].name}</h4>
                      <p className="text-neutral-600">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary-600 w-6' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-primary-700 hover:text-primary-600 hover:shadow-xl transition-all duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-primary-700 hover:text-primary-600 hover:shadow-xl transition-all duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#survey" className="btn-primary inline-flex items-center">
            Join Our Satisfied Customers
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
