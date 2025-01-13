import React, { useState, useEffect } from 'react';

const AirdropCard = () => {
  // Data fixa de término (13/01/2025 + 140 dias = 01/06/2025)
  const START_DATE = new Date('2025-01-13T00:00:00Z');
  const END_DATE = new Date(START_DATE.getTime() + (140 * 24 * 60 * 60 * 1000));

  const [timeLeft, setTimeLeft] = useState({
    days: 140,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = END_DATE.getTime() - now;

      if (distance < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Atualiza o tempo inicial
    setTimeLeft(calculateTimeLeft());

    // Atualiza a cada segundo
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Se chegou a zero, limpa o intervalo
      if (timeLeft.days === 0 && timeLeft.hours === 0 && 
          timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Executa apenas uma vez na montagem do componente

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
