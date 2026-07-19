import React from 'react';

const Hero = () => {
  const developerData = {
    name: 'Đoàn Gia Tiến',
    title: 'Aspiring Software Engineering Student',
    slogan: 'Learning by Building Real Projects | Code. Learn. Improve. Repeat.'
  };

  const { name, title, slogan } = developerData;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar-container">
          {/* Programming-themed vector placeholder image */}
          <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="hero-avatar-svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <circle cx="100" cy="100" r="95" fill="var(--bg-secondary)" stroke="var(--accent-color)" strokeWidth="3" />
            
            {/* Monitor */}
            <rect x="50" y="55" width="100" height="65" rx="6" fill="#1e293b" stroke="var(--border-color)" strokeWidth="2" />
            <rect x="55" y="60" width="90" height="48" rx="3" fill="#0f172a" />
            
            {/* Monitor stand */}
            <path d="M90 120 L85 135 H115 L110 120 Z" fill="#64748b" />
            <rect x="75" y="135" width="50" height="5" rx="2" fill="#475569" />
            
            {/* Code characters on screen */}
            <text x="62" y="78" fill="#f43f5e" fontSize="11" fontFamily="Courier New, monospace" fontWeight="bold">&lt;&gt;</text>
            <text x="120" y="100" fill="#f43f5e" fontSize="11" fontFamily="Courier New, monospace" fontWeight="bold">&lt;/&gt;</text>
            
            {/* Screen lines representing code */}
            <line x1="62" y1="88" x2="115" y2="88" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="62" y1="96" x2="100" y2="96" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="72" y1="104" x2="118" y2="104" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Floating creative symbols */}
            <path d="M165 65 L170 75 L160 70 L165 65 Z" fill="#38bdf8" />
            <circle cx="35" cy="80" r="3" fill="#fbbf24" />
            <circle cx="155" cy="120" r="4" fill="#10b981" />
            <circle cx="42" cy="130" r="2" fill="#38bdf8" />
          </svg>
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">{name}</span>
        </h1>
        <p className="hero-subtitle">{title}</p>
        <p className="hero-slogan">{slogan}</p>
        <div className="hero-actions">
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
          <a href="#projects" className="secondary-button">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
