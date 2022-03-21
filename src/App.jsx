import React from "react";
import khuch, { b, func1, func2 } from "./Para";

function App() {
  return (
    <>
      <p>{khuch}</p>
      <strong>{b}</strong>
      <b>{func1()}</b>
      {func2()}
    </>
  );
}

export default App;
