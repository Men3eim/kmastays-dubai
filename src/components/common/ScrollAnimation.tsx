import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'stagger';
  stagger?: number;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  animation = 'fadeInUp',
  stagger = 0.1,
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: '-50px 0px -50px 0px'
  });

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fadeInUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fadeInDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fadeInLeft':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'fadeInRight':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scaleIn':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'slideInUp':
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        };
      case 'stagger':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              staggerChildren: stagger,
              delayChildren: delay
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
