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
      title: "GAN-based Anime Character Generator",
      period: "2024",
      description: "Built a Generative Adversarial Network (GAN) using TensorFlow to generate anime character images. This project demonstrates expertise in deep learning and generative models.",
      technologies: ["TensorFlow", "GAN", "Deep Learning", "Python", "Computer Vision"]
    },
    {
      title: "MoneyMap Financial Application",
      period: "2024",
      description: "Developed a comprehensive financial management application with data visualization and analytics features. Built using modern web technologies for scalable financial tracking.",
      technologies: ["Python", "Web Development", "Data Visualization", "Analytics"]
    },
    {
      title: "Real-Time Chat Application",
      period: "2024",
      description: "Created a full-stack real-time chat application with instant messaging capabilities. Features include user authentication, real-time updates, and responsive design.",
      technologies: ["JavaScript", "WebSocket", "Real-time", "Full-stack"]
    },
    {
      title: "Task Manager API",
      period: "2024",
      description: "Designed and implemented a robust task management API with RESTful endpoints. Includes user management, task organization, and database optimization.",
      technologies: ["JavaScript", "Node.js", "REST API", "Database Design"]
    },
    {
      title: "Weather Website",
      period: "2024",
      description: "Built an interactive weather application with real-time data fetching and responsive design. Provides current weather conditions and forecasts.",
      technologies: ["JavaScript", "API Integration", "Responsive Design", "Web Development"]
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
