import React, { useState } from "react";

function ClassCounter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setTimeout(()=>{
        setCount(preCount=>preCount+1);

    },1);
   
  };

  return (
    <div>
      <h1 id="counter-title">Counter</h1>
      <button onClick={incrementCounter} className="btn-count">
        Count
      </button>
      <p id="count-output">{count}</p>
    </div>
  );
}

export default ClassCounter;
