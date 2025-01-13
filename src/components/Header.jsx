import React, { useState, useEffect } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId.replace('.', ''));
    }
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'mission',
        'services',
        'contact'
      ];

      const current = sections.find(section => {
        const element = document.querySelector(`.${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img 
          src="https://winio.conext.click/api/v1/buckets/goldofir/objects/download?preview=true&prefix=website%2FArte-Logo-Goldofir-new.png&version_id=null" 
          alt="GOLDOFIR"
        />
      </div>
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${isMenuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={(e) => handleClick(e, '.hero')} className={activeSection === 'hero' ? 'active' : ''}>HOME</a></li>
          <li><a href="#mission" onClick={(e) => handleClick(e, '.mission')} className={activeSection === 'mission' ? 'active' : ''}>MISSION</a></li>
          <li><a href="#services" onClick={(e) => handleClick(e, '.services')} className={activeSection === 'services' ? 'active' : ''}>SERVICES</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, '.contact')} className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a></li>
          <li>
            <a href="/panel" className="login-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              LOGIN CO-FOUNDER
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;