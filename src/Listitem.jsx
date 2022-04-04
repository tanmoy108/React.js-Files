import React from "react";

const Listitem = (props) => {
  return (
    <>
      <div className="part2">
        <button>
          <i
            className="fa-solid fa-circle-minus"
            onClick={() => {
              props.onselect(props.id);
            }}
          ></i>
        </button>
        <li className="List"> {props.values}</li>
      </div>
    </>
  );
};

export default Listitem;
