import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useWindowSize from './hooks/useWindowSize';
import useTheme from './hooks/useTheme';
import './styles/global.css';

function App() {
  const { width } = useWindowSize();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="portfolio-app">
      {/* Header component with Theme settings */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main sections */}
      <main>
        {/* Hero component */}
        <Hero />

        {/* About component */}
        <About />

        {/* Projects component */}
        <Projects />

        {/* Contact component */}
        <Contact />
      </main>

      {/* Footer using CSS Variables for theme adaptability */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease'
      }}>
        <p>&copy; {new Date().getFullYear()} Đoàn Gia Tiến. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          Screen size: {width}px | Current Theme: {theme}
        </p>
      </footer>
    </div>
  );
}

export default App;
