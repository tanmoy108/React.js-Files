import React from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";

const Cpage = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useNavigate();
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
       <>
       <button
          onClick={() => {
            alert("you got it");
          }}
        >
          hello
        </button>
        <button onClick={()=>{history(-1)}} >Go Back</button>
        <button onClick={()=>{history(-2)}} >Go 2 Back</button>
        <button onClick={()=>{history(1)}} >Go Forward</button>
        <button onClick={()=>{history(2)}} >Go 2 Forward</button>
        <button onClick={()=>{history('/')}} >home</button>
        <button onClick={()=>{history('/dpage')}} >Dpage</button>
       </>

      ) : null}
    </>
  );
};

export default Cpage;
