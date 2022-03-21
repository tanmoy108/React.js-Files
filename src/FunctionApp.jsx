import React from "react";

function Add(a, b) {
  return a + b;
}

function Sub(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function Div(a, b) {
  let c = a / b;
  return c.toFixed(2);
}

function Mul(a, b) {
  return a * b;
}

export default Add;
export { Sub, Div, Mul };
