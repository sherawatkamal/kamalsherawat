import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/kamalsherawat/'
    },
    {
      name: 'Google Scholar',
      icon: 'fab fa-google-scholar',
      url: 'https://scholar.google.com/citations?hl=en&user=v9wdQewAAAAJ&view_op=list_works&gmla=AH8HC4x72s1RsM6Iv4Yipv6wxg9cemSGU20N7JsSn4R2Lm-iT1-NFx-sq9fOlj_mh4Y2UEh34MHir8SLn2X30QpQ'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/sherawatkamal'
    },
    {
      name: 'Portfolio',
      icon: 'fas fa-globe',
      url: 'https://sherawatkamal.github.io/kamalsherawat'
    }
  ];

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>kamals@vt.edu</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Virginia Tech<br />Blacksburg, VA</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-university"></i>
              <div>
                <h3>Institution</h3>
                <p>Virginia Tech</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <h3>Connect with me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="social-link"
                  onClick={(e) => handleSocialClick(e, social.url)}
                >
                  <i className={social.icon}></i>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
