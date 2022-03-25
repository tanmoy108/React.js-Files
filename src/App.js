import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [count, update] = useState(time);

  const GetTime = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };
  return (
    <>
      <div className="part">
        <h1>{count}</h1>
        <button onClick={GetTime}>Get Time</button>
      </div>
    </>
  );
};

export default App;
