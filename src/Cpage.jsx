import React from "react";
import { useParams } from "react-router-dom";

const Cpage = () => {
  const {name} = useParams(); 
  return (
    <>
      <h1>Cpage {name} </h1>
    </>
  );
};

export default Cpage;
