import React from 'react';

const ProjectCard = ({ data, onEdit, onDelete, isAdminMode }) => {
  const { id, title, description, image, technologies, githubLink, link } = data;
  const projectLink = link || githubLink;

  return (
    <div className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '1.5rem' }}>
        <h3>{title}</h3>
        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{description}</p>
        
        {/* Spacer that dynamically stretches to push elements below to the bottom */}
        <div style={{ flexGrow: 1, minHeight: '1.5rem' }}></div>

        {/* Technologies list: limited to exactly 3 items, kept strictly in 1 line */}
        <div className="project-tech-list" style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'nowrap', gap: '0.5rem', overflow: 'hidden' }}>
          {technologies && technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag" style={{ whiteSpace: 'nowrap', margin: 0 }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Footer actions containing View Project link and Admin Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
              style={{ margin: 0, alignSelf: 'center' }}
            >
              View Project
            </a>
          ) : (
            <div style={{ flexGrow: 1 }}></div>
          )}

          {/* Render admin action buttons ONLY when isAdminMode is enabled */}
          {isAdminMode && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', animation: 'fadeInUp 0.3s ease-out' }}>
              {/* Edit Button */}
              <button 
                onClick={() => onEdit(data)} 
                style={{ 
                  background: 'transparent',
                  border: '1px solid var(--border-color)', 
                  color: '#06b6d4', 
                  borderRadius: '8px', 
                  width: '36px', 
                  height: '36px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  outline: 'none'
                }}
                title="Sửa dự án"
                onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = '#06b6d4'; 
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = 'var(--border-color)'; 
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>

              {/* Delete Button */}
              <button 
                onClick={() => onDelete(id)} 
                style={{ 
                  background: 'transparent',
                  border: '1px solid var(--border-color)', 
                  color: '#ef4444', 
                  borderRadius: '8px', 
                  width: '36px', 
                  height: '36px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  outline: 'none'
                }}
                title="Xóa dự án"
                onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = '#ef4444'; 
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = 'var(--border-color)'; 
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
