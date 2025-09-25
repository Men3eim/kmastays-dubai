import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SplitText from '../common/SplitText';
import ScrollAnimation from '../common/ScrollAnimation';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewProperties = () => {
    navigate('/properties');
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Dubai Skyline - Premium corporate serviced apartments in Dubai's business districts"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-primary/75 to-brand-secondary/85"></div>
        {/* Floating elements for modern feel */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl animate-float-reverse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 left-1/3 w-12 h-12 bg-brand-primary/30 rounded-full blur-lg animate-float-reverse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <SplitText
            text="Your Perfect Dubai Stay Starts Here"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 tracking-wide"
            delay={0.2}
            duration={1.2}
            stagger={0.1}
            animation="fadeInUp"
          />
          
          <ScrollAnimation
            delay={0.8}
            duration={1}
            animation="fadeInUp"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-3 sm:px-4 font-elegant italic">
              Cool, fully-furnished apartments in Dubai's best neighborhoods
            </p>
          </ScrollAnimation>

          {/* CTAs */}
          <ScrollAnimation
            delay={1.2}
            duration={0.8}
            animation="fadeInUp"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-3 sm:px-4">
              <motion.button
                onClick={handleViewProperties}
                className="btn-primary bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:from-brand-primary/90 hover:to-brand-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[280px] sm:min-w-[300px] text-sm sm:text-base min-h-[48px] border border-white/20"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>Check Out Our Places</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                onClick={handleScheduleConsultation}
                className="btn-primary bg-gradient-to-r from-brand-secondary to-brand-secondary/90 hover:from-brand-secondary/90 hover:to-brand-secondary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[280px] sm:min-w-[300px] text-sm sm:text-base min-h-[48px] border border-white/20 glass-effect"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>Get Started</span>
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>
          </ScrollAnimation>

          {/* Lifestyle Features */}
          <ScrollAnimation
            delay={1.6}
            duration={0.8}
            animation="stagger"
            stagger={0.2}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/20 px-3 sm:px-4">
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏠</div>
                <div className="text-gray-200 text-sm sm:text-base font-medium">Fully Furnished</div>
                <div className="text-gray-300 text-xs sm:text-sm">Everything you need to feel at home</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📍</div>
                <div className="text-gray-200 text-sm sm:text-base font-medium">Great Locations</div>
                <div className="text-gray-300 text-xs sm:text-sm">Right where you want to be</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✨</div>
                <div className="text-gray-200 text-sm sm:text-base font-medium">Always Here</div>
                <div className="text-gray-300 text-xs sm:text-sm">Support whenever you need it</div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;