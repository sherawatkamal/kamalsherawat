import React from 'react';

const Research = () => {
  const researchProjects = [
    {
      title: "Dynamic CNNs for Multi-Modal Tasks",
      description: "Implemented emotion steering in Large Language Models using Representation Engineering (Zou et al., 2023), achieving 87% accuracy across 6 emotions. Built Flask+React web application for real-time demonstration.",
      status: "Completed",
      year: "Jan 2025 - May 2025",
      isCompleted: true
    },
    {
      title: "AI Activation Steering",
      description: "Implemented activation steering techniques for language model control, enabling real-time manipulation of AI model outputs through learned emotion vectors. Integrated Google Gemma-2-2B model with custom steering modules trained on emotion datasets, achieving controllable text generation with measurable steering effects.",
      status: "Completed",
      year: "Jan 2025 - May 2025",
      isCompleted: true
    },
    {
      title: "Neural Archaeology Research",
      description: "Conducting ongoing research in Neural Archaeology, analyzing neural network representations to improve interpretability and uncover insights into model behavior and architecture.",
      status: "In Progress",
      advisor: "Virginia Tech",
      isCompleted: false
    }
  ];

  return (
    <section id="research" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <div className="research-content">
          <div className="research-overview">
            <p>
              My research focuses on Neural Archaeology and AI Interpretability. I am particularly interested in 
              analyzing neural network representations to improve interpretability and uncover insights into 
              model behavior and architecture, with applications to emotion steering and activation steering techniques.
            </p>
          </div>
          <div className="research-projects">
            {researchProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className={`status ${project.isCompleted ? 'completed' : ''}`}>
                    {project.status}
                  </span>
                  <span className={project.advisor ? 'advisor' : 'year'}>
                    {project.advisor || project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
