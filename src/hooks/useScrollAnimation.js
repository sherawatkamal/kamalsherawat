import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .publication-item, .info-card, .contact-item');
    animateElements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return observer.current;
};

export default useScrollAnimation;
