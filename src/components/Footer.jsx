import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          © {currentYear} <span>GOLDOFIR</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 