import React, { useContext, useEffect, useState } from "react";
import { Name, Lastname } from "./App";

const Cpage = () => {
  const [current, update] = useState(0);
  const [current2, update2] = useState(0);
  const name = useContext(Name);
  const lname = useContext(Lastname);

  useEffect(() => {
   document.title=`you click ${current2}`;
  },[current2]);

  const clickbutton = () => {
    update(current + 1);
  };
  const clickbutton2 = () => {
    update2(current2 + 1);
  };

  return (
    <>
      <h1>
        Hello {name}
        {lname}. How are you ? {current}
        {current2}
      </h1>
      <button style={{ padding: "20px 40px" }} onClick={clickbutton}>
        hey
      </button>
      <button style={{ padding: "20px 40px" }} onClick={clickbutton2}>
        hey2
      </button>
    </>
  );
};

export default Cpage;
