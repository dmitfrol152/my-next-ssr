"use client";

import { useState } from "react";

export function Count() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}
