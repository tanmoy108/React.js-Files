import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Cpage = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        Cpage {fname}
        {lname}
      </h1>
      <br />
      <h2>path: {location.pathname}</h2>

      {location.pathname === "/cpage/tanmoy/sharma" ? (
        <button
          onClick={() => {
            alert("you got it");
          }}
        >
          hello
        </button>
      ) : null}
    </>
  );
};

export default Cpage;
