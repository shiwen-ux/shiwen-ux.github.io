import React, { useState, useEffect } from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'left', fontFamily: "'Courier Prime', monospace" }}>
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={!darkMode} />
          <span className="slider"></span>
        </label>
        <span style={{ marginLeft: '0.5rem' }}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </span>
      </div>
      {/* Title */}
      <h1>
        Crafting the AI experience at 
        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem' }}>
          Microsoft
          <img src="/microsoft-logo.svg.png" alt="Microsoft Logo" style={{ width: '40px', marginLeft: '0.5rem' }} />
        </span>
      </h1>
      <p>
        UX Designer with 3 YOE, Previously at <a href="https://www.mathworks.com/" className="custom-link" target="_blank" rel="noopener noreferrer">MathWorks</a>, <a href="https://www.philips.com/a-w/about/innovation/experience-design.html" className="custom-link" target="_blank" rel="noopener noreferrer">Philips</a>.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <section>
          <h2>Work Experience</h2>
          <p>
            I have worked at <a href="https://www.mathworks.com/" className="custom-link" target="_blank" rel="noopener noreferrer">MathWorks</a>, where I gained rich experience in machine learning tools and UX design.
          </p>
        </section>
        <section>
          <h2>More Information</h2>
          <p>
          <a href="https://www.linkedin.com/in/shiwenjiang" className="custom-link" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br/>
          <a href="https://drive.google.com/file/d/1U25zVl7R4Nt1xY_kkvcrATbSZ7gSB2WP/view" className="custom-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </p>
        </section>
      </div>
      {/* <div style={{ marginTop: '2rem' }}>
        <p>
          <a href="https://www.linkedin.com/in/shiwenjiang" className="custom-link" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://drive.google.com/file/d/1U25zVl7R4Nt1xY_kkvcrATbSZ7gSB2WP/view" className="custom-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </p>
      </div> */}
    </div>
  );
}

export default Home;