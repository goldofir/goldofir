import React from 'react'

const MissionSection = () => {
  return (
    <section className="mission" id="mission">
      <div className="section-content">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content">
          <div className="mission-text">
            <p className="section-description">
              GoldOfir offers a variety of services designed to help users make the most of the DeFi world, 
              focusing on fostering the growth of startups and promising business opportunities (PBOs) 
              through our Financial Support Token, the FGOL (Foment GOL).
            </p>
            <p className="section-description">
              We believe in collaborative work, establishing long-lasting relationships with our clients, 
              investors, and partners, such as Blockum DAO. We are committed to innovation, quality, 
              and continuous growth.
            </p>
          </div>

          <div className="mission-stats">
            <div className="stat-item">
              <span className="stat-value">350+</span>
              <span className="stat-label">Co-founders</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2019</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50M</span>
              <span className="stat-label">Airdrop Tokens</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection 