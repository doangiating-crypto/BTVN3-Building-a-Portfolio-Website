import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
          Đoàn Gia Tiến&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600" style={{ borderRadius: '2px', boxShadow: '0 0 4px rgba(0,0,0,0.3)' }}>
            <rect fill="#da251d" width="900" height="600"/>
            <polygon fill="#ffcd00" points="450,114 489,286 657,286 521,385 573,556 450,453 327,556 379,385 243,286 411,286"/>
          </svg>
        </div>
        <div className="nav-actions">
          <nav className="nav-menu">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
