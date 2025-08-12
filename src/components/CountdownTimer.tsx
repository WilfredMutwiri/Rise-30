import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // COP30 target date (Nov 10, 2025)
    const targetDate = new Date('2025-11-10T00:00:00Z').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
      <h3 className="text-lg font-heading font-semibold text-white mb-4 text-center">
        Countdown to COP30
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-white/20 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-white animate-count-up">
                {value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs text-white/80 uppercase tracking-wide">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;