import React from "react";

const Match = (props) => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "25px", padding: "10px" }}>
        {props.x} {props.y} {props.z}
        <h3 style={{ color: "rgb(128, 103, 70)" }}>Matching</h3>
      </div>
    </>
  );
};
export default Match;
