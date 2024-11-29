import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2025-02-15T13:30:00');
      const difference = weddingDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-6 inline-flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2 text-dim-gray">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Cuenta Regresiva</span>
      </div>
      <div className="flex gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-onyx text-antiflash-white rounded-lg shadow-md">
              <span className="text-2xl font-bold">{value}</span>
            </div>
            <span className="mt-1 text-xs text-dim-gray capitalize">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}