import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [uniqueTechnologies, setUniqueTechnologies] = useState([]);

  // Admin Mode toggle
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Form states for POST and PUT
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formFields, setFormFields] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    link: ''
  });

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (searchTerm) queryParams.append('search', searchTerm);
      if (selectedTech) queryParams.append('tech', selectedTech);

      const response = await fetch(`http://localhost:5000/api/projects?${queryParams.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);

      // Calculate unique technologies ONLY on the first load when no filters are applied
      if (!searchTerm && !selectedTech && uniqueTechnologies.length === 0) {
        const techs = [...new Set(data.flatMap((project) => project.technologies || []))];
        setUniqueTechnologies(techs);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProjects();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedTech]);

  // Handle setting edit project fields
  useEffect(() => {
    if (editingProject) {
      setFormFields({
        title: editingProject.title || '',
        description: editingProject.description || '',
        image: editingProject.image || '',
        technologies: editingProject.technologies ? editingProject.technologies.join(', ') : '',
        link: editingProject.link || ''
      });
      setShowForm(true);
    } else {
      setFormFields({
        title: '',
        description: '',
        image: '',
        technologies: '',
        link: ''
      });
    }
  }, [editingProject]);

  // Handle DELETE request
  const handleDeleteProject = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa dự án này không?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Remove from local state
          setProjects(prev => prev.filter(p => p.id !== id));
          // Recalculate technologies
          const updatedProjects = projects.filter(p => p.id !== id);
          const techs = [...new Set(updatedProjects.flatMap((project) => project.technologies || []))];
          setUniqueTechnologies(techs);
        } else {
          alert("Lỗi khi xóa dự án.");
        }
      } catch (err) {
        console.error("Delete error:", err);
        alert("Không thể kết nối đến backend.");
      }
    }
  };

  // Handle POST/PUT Form submit
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    
    // Parse technologies from comma-separated string to array
    const techArray = formFields.technologies
      ? formFields.technologies.split(',').map(t => t.trim()).filter(Boolean)
      : [];

    const projectPayload = {
      title: formFields.title,
      description: formFields.description,
      image: formFields.image || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      technologies: techArray,
      link: formFields.link
    };

    try {
      let response;
      if (editingProject) {
        // PUT (Update)
        response = await fetch(`http://localhost:5000/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectPayload),
        });
      } else {
        // POST (Create)
        response = await fetch(`http://localhost:5000/api/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectPayload),
        });
      }

      if (response.ok) {
        const resultData = await response.json();
        
        if (editingProject) {
          // Update local state
          setProjects(prev => prev.map(p => p.id === editingProject.id ? resultData : p));
          setEditingProject(null);
        } else {
          // Add to local state
          setProjects(prev => [...prev, resultData]);
        }
        
        // Reset form and close
        setShowForm(false);
        setFormFields({ title: '', description: '', image: '', technologies: '', link: '' });
        
        // Refresh technologies dropdown list
        fetchProjects();
      } else {
        alert("Lỗi khi gửi dữ liệu dự án.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Không thể kết nối đến backend.");
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>My Projects</h2>
            <button 
              onClick={() => {
                const nextMode = !isAdminMode;
                setIsAdminMode(nextMode);
                if (!nextMode) {
                  setShowForm(false);
                  setEditingProject(null);
                }
              }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-color)',
                color: isAdminMode ? '#06b6d4' : 'var(--text-secondary)',
                borderRadius: '8px',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                outline: 'none',
                boxShadow: isAdminMode ? '0 0 10px rgba(6, 182, 212, 0.4)' : 'none',
                borderColor: isAdminMode ? '#06b6d4' : 'var(--border-color)'
              }}
              title={isAdminMode ? "Thoát chế độ chỉnh sửa" : "Bật chế độ chỉnh sửa"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>
          
          {isAdminMode && (
            <button 
              onClick={() => {
                setEditingProject(null);
                setShowForm(!showForm);
              }}
              style={{
                background: 'var(--accent-gradient)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
                transition: 'all 0.3s',
                animation: 'fadeInUp 0.3s ease-out'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {showForm ? 'Đóng Form' : '+ Thêm dự án mới'}
            </button>
          )}
        </div>

        {/* Collapsible POST/PUT form */}
        {showForm && isAdminMode && (
          <div style={{
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px var(--card-shadow)',
            animation: 'fadeInUp 0.5s ease-out'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}>
              {editingProject ? '✏️ Cập nhật dự án' : '🚀 Thêm dự án mới'}
            </h3>
            
            <form onSubmit={handleSubmitForm} style={{ display: 'grid', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tên dự án *</label>
                  <input
                    type="text"
                    required
                    value={formFields.title}
                    onChange={(e) => setFormFields({...formFields, title: e.target.value})}
                    style={{ 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: '12px', 
                      padding: '0.75rem', 
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="e.g. E-Commerce Web"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Link ảnh dự án</label>
                  <input
                    type="text"
                    value={formFields.image}
                    onChange={(e) => setFormFields({...formFields, image: e.target.value})}
                    style={{ 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: '12px', 
                      padding: '0.75rem', 
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="e.g. /dashboard.jpg hoặc link URL"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mô tả dự án *</label>
                <textarea
                  required
                  rows="3"
                  value={formFields.description}
                  onChange={(e) => setFormFields({...formFields, description: e.target.value})}
                  style={{ 
                    background: 'var(--bg-glass)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '12px', 
                    padding: '0.75rem', 
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  placeholder="Nhập mô tả chi tiết về dự án của bạn..."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Công nghệ sử dụng (cách nhau bằng dấu phẩy) *</label>
                  <input
                    type="text"
                    required
                    value={formFields.technologies}
                    onChange={(e) => setFormFields({...formFields, technologies: e.target.value})}
                    style={{ 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: '12px', 
                      padding: '0.75rem', 
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="e.g. React, Node.js, Express"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Link Demo / Github</label>
                  <input
                    type="text"
                    value={formFields.link}
                    onChange={(e) => setFormFields({...formFields, link: e.target.value})}
                    style={{ 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: '12px', 
                      padding: '0.75rem', 
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="e.g. https://github.com/..."
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  style={{
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.75rem 2rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  {editingProject ? 'Lưu thay đổi' : 'Tạo mới'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProject(null);
                  }}
                  style={{
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '0.75rem 2rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Curated Modern Filter Pills and Search */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-secondary)', marginRight: '0.5rem' }}>Công nghệ:</span>
            {['All', 'React', 'Node.js', 'Vite', 'Tailwind CSS', 'Express'].map((tech) => {
              const isSelected = (tech === 'All' && !selectedTech) || (selectedTech === tech);
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech === 'All' ? '' : tech)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: isSelected ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.02)',
                    color: isSelected ? '#fff' : 'var(--text-secondary)',
                    border: isSelected ? 'none' : '1px solid var(--border-color)',
                    boxShadow: isSelected ? '0 4px 12px rgba(6, 182, 212, 0.3)' : 'none',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#06b6d4';
                      e.currentTarget.style.color = '#06b6d4';
                      e.currentTarget.style.background = 'rgba(6, 182, 212, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }
                  }}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1.1rem',
                borderRadius: '12px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />
          </div>
        </div>

        {/* Dynamic Project Grid */}
        {isLoading && <p style={{ color: 'var(--text-secondary)' }}>Loading projects...</p>}
        {error && <p className="error-text">Error: {error}</p>}

        {!isLoading && !error && projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard 
                data={project} 
                key={project.id} 
                onEdit={setEditingProject}
                onDelete={handleDeleteProject}
                isAdminMode={isAdminMode}
              />
            ))}
          </div>
        ) : (
          !isLoading && !error && (
            <div className="no-projects">
              <p style={{ color: 'var(--text-secondary)' }}>No projects match your search or filter criteria.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
