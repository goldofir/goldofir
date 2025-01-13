import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2>FOSTERING AND BLOCKCHAIN</h2>
            <h3>TOGETHER TO TRANSFORM BUSINESS</h3>
          </div>
          
          <div className="about-grid">
            <div className="about-intro">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>
                We are an innovative company focused on fostering the growth of startups 
                and promising business opportunities (PBOs) through our Financial Support 
                Token, the FGOL (Foment GOL).
              </p>
            </div>

            <div className="about-mission">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#009cde" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="#009cde" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="#009cde"/>
                </svg>
              </div>
              <p>
                Our mission is to establish a comprehensive platform that connects startups, 
                investors, and the Blockum DAO community, making it easier to access investment 
                opportunities in disruptive and innovative projects.
              </p>
            </div>

            <div className="about-partnership">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C14.9 4 14 4.9 14 6C14 7.1 14.9 8 16 8C17.1 8 18 7.1 18 6C18 4.9 17.1 4 16 4Z" fill="#009cde"/>
                  <path d="M8 4C6.9 4 6 4.9 6 6C6 7.1 6.9 8 8 8C9.1 8 10 7.1 10 6C10 4.9 9.1 4 8 4Z" fill="#009cde"/>
                  <path d="M16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20Z" fill="#009cde"/>
                  <path d="M8 20C9.1 20 10 19.1 10 18C10 16.9 9.1 16 8 16C6.9 16 6 16.9 6 18C6 19.1 6.9 20 8 20Z" fill="#009cde"/>
                  <path d="M12 10L12 14" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 14L17 14" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p>
                At GoldOfir, we have formed a strategic alliance with Blockum DAO, 
                collaborating in the analysis and selection of startups and PBOs for investment, 
                ensuring a rigorous selection process.
              </p>
            </div>

            <div className="about-vision">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 18V22" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.93 4.93L7.76 7.76" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.24 16.24L19.07 19.07" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12H6" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 12H22" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.93 19.07L7.76 16.24" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.24 7.76L19.07 4.93" stroke="#009cde" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="4" fill="#009cde"/>
                </svg>
              </div>
              <p>
                We believe in building a safe, transparent, and accessible financial environment. 
                Join us in driving the growth and success of promising businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 