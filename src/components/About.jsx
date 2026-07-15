import React from 'react';

const About = () => {
  const profileInfo = {
    bio: "I'm a first-year Software Engineering student passionate about software development and web technologies. I enjoy learning by building real projects and continuously improving my programming skills. Currently, I'm exploring frontend development while strengthening my foundation in computer science, algorithms, and modern web technologies. I'm always eager to learn, collaborate, and take on new challenges that help me grow as a future software engineer.",
    skills: ['C++', 'HTML', 'CSS', 'ReactJS']
  };

  const { bio, skills } = profileInfo;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="about-bio">{bio}</p>
          <div className="skills-wrapper">
            <h3 className="skills-title">Core Skills</h3>
            <div className="skills-badges">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
