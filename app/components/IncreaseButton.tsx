"use client";

import { useState } from "react";

const IncreaseButton = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="counter-button">
      <span
        className="orange"
        onClick={() => {
          if (number > 1) {
            setNumber((curr) => curr - 1);
          }
        }}
      >
        -
      </span>
      <span>{number}</span>
      <span className="orange" onClick={() => setNumber((curr) => curr + 1)}>
        +
      </span>
    </div>
  );
};

export default IncreaseButton;
