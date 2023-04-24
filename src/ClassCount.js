import React from "react";
import "./ClassCount.css";

function ClassCount() {
  const initval = 0;

  const [count, setCount] = React.useState(initval);

  const Increament = () => {
    setTimeout(() => {
      setCount((currntValue) => {
        return currntValue + 1;
      });
    }, 10);
  };

  const Decreament = () => {
    setTimeout(() => {
      setCount((currntValue) => {
        return currntValue - 1;
      });
    }, 10);
  };

  const reset = () => {
    setTimeout(() => {
      setCount((currntValue) => {
        return (currntValue = initval);
      });
    }, 10);
  };

  return (
    <div>
      <div className="di-1">
        <h1> Count value :{count}</h1>
      </div>
      <div className="di-2">
        <button onClick={Increament} className="btn-count">
          Increament
        </button>
        <button onClick={Decreament} className="btn-count">
          Decreament
        </button>
        <button onClick={reset} className="btn-count">
          reset
        </button>
      </div>
    </div>
  );
}

export default ClassCount;
