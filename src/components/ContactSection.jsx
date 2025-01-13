import React from 'react'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section-content contact-content">
        <div className="contact-text">
          <p className="contact-question">DO YOU HAVE ANY QUESTIONS OR QUESTIONS?</p>
          <h2 className="section-title">CONTACT</h2>
        </div>
        
        <div className="social-links">
          <a href="mailto:contact@goldofir.me" className="social-link">
            <i className="far fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="https://www.facebook.com/goldofir.me" className="social-link">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
          <a href="https://twitter.com/gold_ofir" className="social-link">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 