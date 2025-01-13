import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          <h2 className="services-title">OUR SERVICES</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V8H4V12" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 18H4" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L12 19" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L8 15" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16 15" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="4" width="16" height="4" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fostering Growth</h3>
              <p>
                We help startups and promising business opportunities grow through our Financial Support Token, 
                providing the resources needed for success in the global market.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Quality Services</h3>
              <p>
                Since 2019, we've been delivering high-quality services aligned with our roadmap, 
                continuously adapting to meet evolving market needs.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7H15" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Investment Platform</h3>
              <p>
                Our comprehensive platform connects startups, investors, and the Blockum DAO community, 
                facilitating access to innovative investment opportunities.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#009cde" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Continuous Growth</h3>
              <p>
                We are committed to continuous growth and innovation, providing solutions that improve 
                lives and drive the success of supported businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 