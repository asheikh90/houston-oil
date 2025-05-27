import { motion } from 'framer-motion';
import { FaShieldAlt, FaTruck, FaIndustry, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSurvey = () => {
    const surveyElement = document.getElementById('survey');
    if (surveyElement) {
      surveyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-primary-800 via-primary-900 to-primary-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMC01YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bTEwLTVjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/0 via-primary-900/10 to-primary-900/30"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-6 border border-white/20">
              <span className="mr-2">🔥</span> Houston's Premier Bulk Lubricant Supplier
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Premium Bulk <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-accent-300">Lubricants</span> for Houston's Industry Leaders
            </h1>
            
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl mx-auto md:mx-0">
              Customized oil and lubricant solutions for your business. Competitive pricing, reliable delivery, and expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToSurvey}
                className="btn-primary bg-white text-primary-700 hover:bg-primary-50 group"
              >
                Get Custom Quote <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </motion.button>
              
              <a href="#products" className="btn-secondary bg-transparent text-white border-white/30 hover:bg-primary-800/30 hover:border-white/60">
                Explore Products
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-2">
                  <FaShieldAlt className="text-primary-200" />
                </div>
                <p className="text-sm font-medium text-white">Premium Quality</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-2">
                  <FaTruck className="text-primary-200" />
                </div>
                <p className="text-sm font-medium text-white">24-Hour Delivery</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-2">
                  <FaIndustry className="text-primary-200" />
                </div>
                <p className="text-sm font-medium text-white">Industry Experts</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2996306/pexels-photo-2996306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Industrial oil barrels" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse-custom"></div>
                    <span className="text-sm font-medium text-green-700">In Stock</span>
                  </div>
                  <h3 className="text-primary-800 font-bold text-lg mb-1">Premium Industrial Lubricants</h3>
                  <p className="text-neutral-700 text-sm">Available for immediate delivery in Houston metro area</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent-600 text-white rounded-full px-4 py-2 font-bold shadow-lg transform rotate-3 animate-pulse-custom">
              24-Hour Delivery
            </div>
            
            {/* Floating product card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg max-w-[200px] transform -rotate-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-neutral-500">Most Popular</span>
                <span className="badge-primary">New</span>
              </div>
              <h4 className="text-primary-800 font-bold text-sm">Synthetic Motor Oil</h4>
              <div className="flex items-center mt-1">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <span className="text-primary-700 text-xs">5W</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <span className="text-primary-700 text-xs">10W</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white text-xs">15W</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-white/70 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-white/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
