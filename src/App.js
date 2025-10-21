import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollAnimation();

  useEffect(() => {
    // Add loaded class for initial animation
    document.body.classList.add('loaded');
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Research />
          <Projects />
          <Publications />
          <CV />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
