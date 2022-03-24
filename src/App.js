import React, { useState } from "react";

const App = () => {
  const state = useState();
  const [count, update] = useState(0);

  const ButtonClick1 = () => {
    update(count+1);
  };

  const ButtonClick2 = () => {
    update(count - 1);
  }

  return (
    <>
      <div className="part">
        <h1>{count}</h1>
        <div style={{ textAlign: "center" }}>
          <button onClick={ButtonClick1}>Increament</button>
          <button onClick={ButtonClick2}>Decreament</button>
        </div>
      </div>
    </>
  );
};

export default App;
