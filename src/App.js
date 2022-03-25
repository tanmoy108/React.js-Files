import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [count, update] = useState(time);

  const GetTime = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };

  setInterval(GetTime,1000);
  return (
    <>
      <div className="part">
        <h1>{count}</h1>
      </div>
    </>
  );
};

export default App;
