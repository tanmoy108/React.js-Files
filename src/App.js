import React from "react";
import Add, { Sub, Div, Mul } from "./FunctionApp";

function App() {
  return (
    <>
      <ul>
        <li>Sum of two no is {Add(102,5)} </li>
        <li>Sub of two no is {Sub(1,5)} </li>
        <li>Div of two no is {Div(14,5)} </li>
        <li>Mul of two no is {Mul(150,5)} </li>
      </ul>
    </>
  );
}

export default App;
