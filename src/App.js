import React from "react";
import Match from "./Match";
import NotMatch from "./NotMatch";

const Maching = (props) => {
  let { x, y, z } = props;
  return (
    <>
      {x === y && y === z ? (
        <Match x={x} y={y} z={z} />
      ) : (
        <NotMatch x={x} y={y} z={z} />
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <h1 className="title">Slot Machine</h1>
      <Maching x="😺" y="😠" z="😺" />
      <Maching x="😺" y="😺" z="😺" />
      <Maching x="😼" y="😠" z="😺" />
    </>
  );
};

export default App;
