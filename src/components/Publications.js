import React from 'react';

const Publications = () => {
  const publications = {
    journalArticles: [],
    conferencePapers: [],
    workingPapers: [
      {
        title: "Emotion Steering in Large Language Models: A Representation Engineering Approach",
        authors: "Kamal Sherawat",
        journal: "Working Paper",
        year: "2025",
        doi: "#",
        pdf: "#"
      }
    ]
  };

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-content">
          {publications.journalArticles.length > 0 && (
            <div className="publication-category">
              <h3>Journal Articles</h3>
              <div className="publication-list">
                {publications.journalArticles.map((pub, index) => (
                  <div key={index} className="publication-item">
                    <p className="publication-title">{pub.title}</p>
                    <p className="publication-authors">{pub.authors}</p>
                    <p className="publication-journal">
                      <em>{pub.journal}</em>, {pub.year}
                    </p>
                    <div className="publication-links">
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.doi)}
                      >
                        DOI
                      </a>
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.pdf)}
                      >
                        PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {publications.conferencePapers.length > 0 && (
            <div className="publication-category">
              <h3>Conference Papers</h3>
              <div className="publication-list">
                {publications.conferencePapers.map((pub, index) => (
                  <div key={index} className="publication-item">
                    <p className="publication-title">{pub.title}</p>
                    <p className="publication-authors">{pub.authors}</p>
                    <p className="publication-journal">
                      <em>{pub.journal}</em>, {pub.year}
                    </p>
                    <div className="publication-links">
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.doi)}
                      >
                        DOI
                      </a>
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.pdf)}
                      >
                        PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {publications.workingPapers.length > 0 && (
            <div className="publication-category">
              <h3>Working Papers</h3>
              <div className="publication-list">
                {publications.workingPapers.map((pub, index) => (
                  <div key={index} className="publication-item">
                    <p className="publication-title">{pub.title}</p>
                    <p className="publication-authors">{pub.authors}</p>
                    <p className="publication-journal">
                      <em>{pub.journal}</em>, {pub.year}
                    </p>
                    <div className="publication-links">
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.doi)}
                      >
                        DOI
                      </a>
                      <a 
                        href="#" 
                        className="link"
                        onClick={(e) => handleLinkClick(e, pub.pdf)}
                      >
                        PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
