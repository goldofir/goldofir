import React from 'react';
import AirdropCard from './AirdropCard';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <h1>TOKEN FGOL</h1>
            <p>
              Utility Token to foment Startups and promising business opportunities, 
              developed within a highly scalable growth model.
            </p>
            
            <div className="whitepaper-links">
              <a href="https://drive.google.com/file/d/1SEmUD7SYKRgi9w63nPvH-z2Z6jAQ-qXG/view?usp=sharing" className="whitepaper-btn">
                Whitepaper EN
              </a>
              <a href="https://drive.google.com/file/d/1NHn383Y_53A_03m5NADYULyQ3x8WKH5W/view?usp=sharing" className="whitepaper-btn">
                Whitepaper PT
              </a>
            </div>
            
            <div className="exchanges">
              <h3>TRADE ON</h3>
              <div className="exchange-list">
                <a href="https://www.probit.com/app/exchange/GOL-BTC">
                  <img 
                    src="https://winio.conext.click/api/v1/buckets/goldofir/objects/download?preview=true&prefix=website%2Fprobit-review.png.webp&version_id=null" 
                    alt="Probit" 
                  />
                </a>
                <a href="https://www.sushi.com/polygon/swap?token0=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&token1=0xa1B7797F97eE6C928A6Ce0E403f345b68945C6D7">
                  <img 
                    src="https://winio.conext.click/api/v1/buckets/goldofir/objects/download?preview=true&prefix=website%2FSushiswap.png&version_id=null" 
                    alt="SushiSwap" 
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <AirdropCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
