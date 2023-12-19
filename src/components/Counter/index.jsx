import React, { useState, useEffect } from 'react';
import "./index.scss"
const CountdownTimer = () => {
  // Set the date we're counting down to
  const countDownDate = new Date("Dec 19, 2023 19:59:59").getTime();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: distance < 0,
    };
  }

  if (timeRemaining.isExpired) {
    return <p>EXPIRED</p>;
  }
  
function handleHours() {
    if ((timeRemaining.hours /10)<1) {
        return "0"+timeRemaining.hours
    }
    return timeRemaining.hours
}

function handleSec() {
    if ((timeRemaining.seconds /10)<1) {
        return "0"+timeRemaining.seconds
    }
    return timeRemaining.seconds
}function handleMin() {
    if ((timeRemaining.minutes /10)<1) {
        return "0"+timeRemaining.minutes
    }
    return timeRemaining.minutes
}
  return (
    <p className='timer'>
      <div className="div"><span className='time'>Days</span> <span>{timeRemaining.days}<span className='dot'> : </span></span>   </div> 
      
      <div className="div"><span className='time'>Hours </span> <span>{handleHours()}<span className='dot'> :  </span> </span> </div> 
      
      <div className="div"><span className='time'>Minutes</span><span>{handleMin()}<span className='dot'>    :  </span></span> </div> 
       
       <div className="div"><span className='time'>Seconds</span> <span></span>{handleSec()}</div> 
    </p>
  );
};

export default CountdownTimer;

