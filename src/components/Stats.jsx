import React, { useEffect, useState } from "react";
import "../styles/Stats.css";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let incrementTime = 20;
    let step = Math.ceil(end / 100);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-box">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <h2>Our Impact</h2>
      <div className="stats-grid">
        <Counter target={1500} label="Volunteers" />
        <Counter target={120} label="Projects" />
        <Counter target={50} label="Cities Covered" />
      </div>
    </section>
  );
}

export default Stats;