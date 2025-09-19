import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add a small delay to ensure the element is rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Stop observing once animated to improve performance
            observer.unobserve(entry.target);
          }
        },
        {
          threshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [threshold]);

  return ref;
};

export const usePageTransition = () => {
  useEffect(() => {
    // Add page transition class to body
    document.body.classList.add('page-enter');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('page-enter');
      document.body.classList.add('page-enter-active');
    }, 50);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('page-enter-active');
    };
  }, []);
};
