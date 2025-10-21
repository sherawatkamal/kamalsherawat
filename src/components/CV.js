import React from 'react';

const CV = () => {
  const handleDownloadCV = () => {
    // Open the CV PDF in a new tab
    window.open('/Kamal_Sherawat_Resume_ML_Oct.pdf', '_blank');
  };

  return (
    <section id="cv" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="cv-content">
          <p>
            Download my complete curriculum vitae for detailed information about my 
            education, research experience, publications, and achievements.
          </p>
          <div className="cv-download">
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              <i className="fas fa-download"></i>
              Download CV (PDF)
            </button>
            <p className="cv-note">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
