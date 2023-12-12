import { useState } from "react";
export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count);

  function handleAddButton(e) {
    e.preventDefault();
    setCount((prevCount) => prevCount + step);
  }

  function handleSubButton(e) {
    e.preventDefault();
    setCount((prevCount) => prevCount - step);
  }

  function handleReset(e) {
    e.preventDefault();
    setStep(0);
    setCount(0);
    today.setDate(today.getDate());
  }

  return (
    <div className="container">
      <div className="slider">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <h2>{step}</h2>
      </div>
      <form className="row" onSubmit={(e) => e.preventDefault()}>
        <button className="btn" onClick={handleSubButton}>
          -
        </button>
        <input
          type="text"
          className="form"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={handleAddButton}>
          +
        </button>
      </form>
      <h2>
        {count === 0
          ? `Today is ${today.toDateString()}`
          : count > 0
          ? `${count} days from now is ${today.toDateString()}`
          : `${Math.abs(count)} days ago was ${today.toDateString()}`}
      </h2>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
