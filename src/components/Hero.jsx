import React from 'react';
import linusImg from '../assets/Linus-Torvalds.jpg';

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
          <img 
            src={linusImg} 
            alt="Đoàn Gia Tiến" 
            className="hero-avatar" 
          />
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
