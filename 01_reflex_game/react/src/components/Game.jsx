import { useEffect, useRef, useState } from "react";

function Game({ handleGameEnd }) {
  const [click, setClick] = useState(false);
  const [reactionTime, setReactionTime] = useState(0);

  const [message, setMessage] = useState("Click when the screen turns green!");

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  function handleClick() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    handleGameEnd(
      reactionTime > 0
        ? `Your reaction time is: ${reactionTime} ms`
        : "Wait for the green box to appear!"
    );
  }

  useEffect(() => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    timeoutRef.current = setTimeout(() => {
      setMessage("Click now!");
      setClick(true);
      intervalRef.current = setInterval(() => {
        setReactionTime((prev) => prev + 10);
      }, 10);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      setClick(false);
      setReactionTime(0);
      setMessage("Click when the screen turns green!");
    };
  }, []);

  return (
    <div className={`game ${click ? "click" : ""}`} onClick={handleClick}>
      <h2>{message}</h2>
    </div>
  );
}

export default Game;
