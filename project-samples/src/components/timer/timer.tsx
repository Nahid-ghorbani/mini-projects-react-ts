import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const timer = useRef<number | null>(null);

  const stopTimer = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setCounter((olderValue) => olderValue + 1);
    }, 1000);

    return () => stopTimer();
  }, []);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={stopTimer}>Submit</button>
    </>
  );
};

export default Timer;
