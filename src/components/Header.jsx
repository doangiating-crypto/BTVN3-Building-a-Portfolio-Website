import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Đoàn Gia Tiến</div>
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
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
