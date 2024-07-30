'use client'; // Fügt das Pragma hinzu, um die Komponente als Client-Komponente zu markieren

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return <div className="countdown-placeholder">Lädt...</div>;
  }

  return (
    <div className="countdown-container flex items-center md:text-8xl text-2xl justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 font-extrabold">
      <div className="time md:me-10 me-2 text-center">
        <span>{timeLeft.days}</span>
        <span className="text-sm">days</span>
      </div>
      <div className="time md:me-10 me-2 text-center">
        <span>{timeLeft.hours}</span>
        <span className="ms-1 text-sm">hours</span>
      </div>
      <div className="time md:me-10 me-2 text-center">
        <span>{timeLeft.minutes}</span>
        <span className="ms-1 text-sm">minuts</span>
      </div>
      <div className="time text-center">
        <span>{timeLeft.seconds}</span>
        <span className="ms-1 text-sm">seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
