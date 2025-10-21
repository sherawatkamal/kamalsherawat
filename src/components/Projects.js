import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "fAlshion.AI Virtual Try-On",
      period: "Jun 2025 - Aug 2025",
      description: "Engineered an AI-powered virtual try-on platform using advanced computer vision and machine learning models to provide inclusive fashion recommendations for diverse user demographics.",
      technologies: ["Computer Vision", "Machine Learning", "AI", "Python", "Deep Learning"]
    },
    {
      title: "Image Captioning with CNN-RNN Architecture",
      period: "March 2025 - April 2025",
      description: "Created an image captioning model that uses VGG16 and LSTM with GloVe embeddings to generate accurate, natural captions for the Flickr8k dataset, achieving strong BLEU, METEOR, and ROUGE-L scores.",
      technologies: ["CNN", "RNN", "LSTM", "VGG16", "GloVe", "Computer Vision"]
    },
    {
      title: "AI Study Assistant",
      period: "2024",
      description: "Built an AI study assistant that automatically recommends relevant notes, videos, and study partners to students based on their learning progress. Secured 1st place at AltCtrl University Hackathon.",
      technologies: ["AI", "Machine Learning", "Recommendation Systems", "Python"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
