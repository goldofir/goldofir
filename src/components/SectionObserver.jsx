import React, { useEffect } from 'react'

function SectionObserver() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.section-content');

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}

export default SectionObserver; 