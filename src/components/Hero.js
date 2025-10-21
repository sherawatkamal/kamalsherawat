import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const typeWriter = (element, text, speed = 100) => {
      let i = 0;
      element.innerHTML = '';
      
      const type = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };
      
      type();
    };

    if (titleRef.current) {
      const originalText = titleRef.current.textContent;
      setTimeout(() => {
        typeWriter(titleRef.current, originalText, 150);
      }, 500);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef}>Kamal Sherawat</h1>
            <p className="subtitle">Graduate Teaching and Research Assistant at Virginia Tech</p>
            <p className="description">
              Welcome to my academic portfolio. I am a Graduate Teaching and Research Assistant 
              at Virginia Tech, specializing in Machine Learning, Neural Archaeology, and AI research. 
              I'm passionate about advancing AI interpretability and developing innovative solutions.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('research')}
              >
                View Research
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('cv')}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img 
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Kamal Sherawat" 
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<i class="fas fa-user-graduate"></i>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
