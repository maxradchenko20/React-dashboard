import { useEffect, useState } from 'react';

const useGetClock = () => {
  const [timer, setTimer] = useState(new Date());

  function tick() {
    setTimer(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return {
    timer,
  };
};

export default useGetClock;
