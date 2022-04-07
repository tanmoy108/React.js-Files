import React, { useContext } from "react";
import { Name, Lastname } from "./App";

const Cpage = () => {
  const name = useContext(Name);
  const lname = useContext(Lastname);

  return (
    <>
      <h1>
        Hello {name}
        {lname}. How are you ?
      </h1>
    </>
  );
};

export default Cpage;
