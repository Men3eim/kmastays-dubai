import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  animation = 'fadeInUp'
}) => {
  const words = text.split(' ');

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
      className={className}
      initial="hidden"
      animate="visible"
      transition={{
        delay,
        staggerChildren: stagger,
        delayChildren: delay
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={{
            duration,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
