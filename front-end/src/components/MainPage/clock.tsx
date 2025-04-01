import React, { useState, useEffect } from 'react';

const CentralTime: React.FC = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  // Format the time for Central Time (America/Chicago)
  const centralTime = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div>
      <h3>{centralTime} CT</h3>
    </div>
  );
};

export default CentralTime;
