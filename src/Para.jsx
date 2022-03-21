import React from "react";

const a = "tanmoy";
const b = "sharma";
function func1() {
  return <h1>{`Hello ${a} ${b}`}</h1>;
}
function func2() {
  return (
    <>
      <h4>React</h4>
      <h4>Tutorial</h4>
    </>
  );
}

export default a;
export { b, func1, func2 };
