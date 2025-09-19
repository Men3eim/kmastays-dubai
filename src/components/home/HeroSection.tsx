import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '../common/SplitText';
import ScrollAnimation from '../common/ScrollAnimation';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-brand-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <SplitText
            text="Premium Corporate Apartments in Dubai's Business Heart"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Luxury serviced apartments for business travelers in Downtown Dubai, Business Bay, DIFC & Dubai Marina
            </p>
          </ScrollAnimation>

          {/* CTAs */}
          <ScrollAnimation
            delay={1.2}
            duration={0.8}
            animation="fadeInUp"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="btn-primary bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>View Our Properties</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                className="btn-primary bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>Schedule Consultation</span>
                <Play className="h-5 w-5" />
              </motion.button>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation
            delay={1.6}
            duration={0.8}
            animation="stagger"
            stagger={0.2}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, duration: 0.8, type: "spring" }}
                >
                  500+
                </motion.div>
                <div className="text-gray-300">Premium Apartments</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
                >
                  4
                </motion.div>
                <div className="text-gray-300">Prime Business Districts</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.8, type: "spring" }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-300">Concierge Excellence</div>
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