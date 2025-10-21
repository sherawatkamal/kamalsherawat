import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <h1>Kamal Sherawat</h1>
            <p>Graduate Teaching and Research Assistant, Virginia Tech</p>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('research')}>Research</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('publications')}>Publications</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cv')}>CV</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
