import React, { useEffect } from "react";

function Timer({ timeLeft, onTimerEnd }) {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd();
    }
  }, [timeLeft, onTimerEnd]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return <div className="text-sm font-medium">{formatTime(timeLeft)}</div>;
}

export default Timer;
