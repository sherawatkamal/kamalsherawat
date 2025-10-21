import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Graduate Teaching and Research Assistant at Virginia Tech, specializing in 
              Machine Learning, Neural Archaeology, and AI research. My work focuses on analyzing 
              neural network representations to improve interpretability and uncover insights 
              into model behavior and architecture.
            </p>
            <p>
              With experience in both industry and academia, I bring a unique perspective to 
              research and development. I'm passionate about advancing AI interpretability, 
              developing innovative machine learning solutions, and mentoring the next generation 
              of researchers and engineers.
            </p>
            <h3>Education</h3>
            <ul className="education-list">
              <li>
                <strong>Master of Science in Computer Engineering</strong><br />
                Virginia Tech, Blacksburg, Virginia<br />
                <em>Aug 2024 - May 2026</em>
              </li>
              <li>
                <strong>Bachelor of Technology in Computer Science and Engineering</strong><br />
                Sushant University, Delhi, India<br />
                <em>Aug 2018 - May 2022</em>
              </li>
            </ul>
          </div>
          <div className="about-sidebar">
            <div className="info-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Institution:</strong> Virginia Tech</li>
                <li><strong>Position:</strong> Graduate Teaching and Research Assistant</li>
                <li><strong>Location:</strong> Blacksburg, VA</li>
                <li><strong>Email:</strong> kamals@vt.edu</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Key Skills</h3>
              <ul>
                <li>Machine Learning & Deep Learning</li>
                <li>Neural Archaeology & AI Interpretability</li>
                <li>Computer Vision & NLP</li>
                <li>Generative AI (LLMs, GANs)</li>
                <li>Python, PyTorch, TensorFlow</li>
                <li>ReactJS, Node.js, Flask</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
