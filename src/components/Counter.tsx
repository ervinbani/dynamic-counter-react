import React, { useState, useEffect } from "react";
interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [step, setStep] = useState<number>(1);
  const [counterHistory, setCounterHistory] = useState<number[]>(() => {
    const savedHistory = localStorage.getItem("counterHistory");
    return savedHistory ? JSON.parse(savedHistory) : [0];
  });
  const [count, setCount] = useState<number>(() => {
    const savedHistory = localStorage.getItem("counterHistory");
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      return parsed.length > 0 ? parsed[parsed.length - 1] : 0;
    }
    return 0;
  });

  const handleIncrement = () => {
    setCount((prevState: number) => {
      const newCount = prevState + step;
      setCounterHistory((prevHistory) => [...prevHistory, newCount]);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevState: number) => {
      const newCount = prevState - step;
      setCounterHistory((prevHistory) => [...prevHistory, newCount]);
      return newCount;
    });
  };

  const handleResetCount = () => {
    setCount(0);
    setCounterHistory([0]);
    setStep(1);
    localStorage.setItem("counterHistory", JSON.stringify([0]));
  };

  // Auto-save to localStorage when count or history changes
  useEffect(() => {
    localStorage.setItem("counterHistory", JSON.stringify(counterHistory));
    // Cleanup not needed for localStorage
  }, [counterHistory]);

  // Keyboard event listeners for ArrowUp/ArrowDown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        handleIncrement();
      } else if (e.key === "ArrowDown") {
        handleDecrement();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

  return (
    <div className="counter-container">
      <p className="counter-value">Count: {count}</p>
      <button className="counter-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="counter-btn" onClick={handleDecrement}>
        Decrement
      </button>
      <input
        className="counter-step"
        type="number"
        value={step}
        min={1}
        onChange={(e) => setStep(Number(e.target.value) || 1)}
      />
      <button className="counter-btn" onClick={handleResetCount}>
        Reset
      </button>
      <div>
        <h3>Counter History:</h3>
        <ul>
          {counterHistory.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Counter;
