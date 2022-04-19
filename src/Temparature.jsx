import React from "react";

const scalename = {
  c: "celsius",
  f: "fahrenheit",
};
const Temparature = (props) => {
  return (
    <>
      <fieldset>
        <legend>temparature {scalename[props.scale]}</legend>
        <input
          type="text"
          value={props.temperaeturevalue}
          placeholder="enter value"
          onChange={(e) => props.handlechange(e, props.scale)}
        />
      </fieldset>
    </>
  );
};

export default Temparature;
