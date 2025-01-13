import React, { useState, useEffect } from 'react';

const AirdropCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Data final do contador (140 dias a partir de agora)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 140);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="airdrop-card">
      <div className="airdrop-logo">
        <img 
          src="https://winio.conext.click/api/v1/buckets/goldofir/objects/download?preview=true&prefix=website%2FToken-1-150x150.png&version_id=null" 
          alt="FGOL Token"
        />
      </div>

      <div className="countdown">
        <div className="time-block">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <small>DAYS</small>
        </div>
        <div className="time-block">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <small>HOURS</small>
        </div>
        <div className="time-block">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <small>MINS</small>
        </div>
        <div className="time-block">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <small>SECS</small>
        </div>
      </div>

      <button>STAKE TOKEN FGOL Now</button>
      <p>Stake FGOL and Allocate your LPs on BLOCKUMDAO.ORG to Participate in up to 50 Million Tokens in Airdrops</p>
    </div>
  );
};

export default AirdropCard;
