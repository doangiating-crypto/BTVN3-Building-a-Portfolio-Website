import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';

const Projects = () => {
  // Single project data list
  const projectList = [
    {
      id: 1,
      title: 'Building a Portfolio Website',
      description: 'This project is part of the Web Programming course assignment at WebDev Studio.',
      image: reactLogo,
      technologies: ['HTML', 'CSS', 'ReactJS'],
      githubLink: 'https://github.com/doangiatien/personal-portfolio'
    }
  ];

  // States for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Extract unique technologies dynamically
  const uniqueTechnologies = [
    ...new Set(projectList.flatMap((project) => project.technologies))
  ];

  // Filter project dynamically
  const filteredProjects = projectList.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === '' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        
        {/* Controls: Search and Filter */}
        <div className="projects-controls">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-wrapper">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="filter-select"
            >
              <option value="">All Technologies</option>
              {uniqueTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const { id, title, description, image, technologies, githubLink } = project;
              return (
                <div key={id} className="project-card">
                  <div className="project-image-wrapper">
                    <img src={image} alt={title} className="project-image" />
                  </div>
                  <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-tech-list">
                      {technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects match your search or filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
