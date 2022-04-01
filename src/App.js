import React, { useState } from "react";

const App = () => {
  const [current, update] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
  });

  const [bcurrent, bupdate] = useState(current);

  const OnchangeFun = (event) => {
    let inputvalue = event.target.value;
    let inputname = event.target.name;
    update((e) => {
      return {
        ...e,
        [inputname]: inputvalue,
      };
    });
  };
  const Onsubmit = (e) => {
    e.preventDefault();
    bupdate(() => {
      return {
        ...current,
      };
    });
  };

  return (
    <>
      <div className="part">
        <h1>
          {`Hello ${bcurrent.firstname} 
          ${bcurrent.middlename}  
          ${bcurrent.lastname}`}
        </h1>
        <h4>Email: {bcurrent.email}</h4>
        <form onSubmit={Onsubmit}>
          <input
            type="text"
            name="firstname"
            onChange={OnchangeFun}
            placeholder="Enter your firstname"
            value={current.firstname}
          />
          <br />
          <input
            type="text"
            name="middlename"
            onChange={OnchangeFun}
            placeholder="Enter your middlename"
            value={current.middlename}
          />
          <br />
          <input
            type="text"
            name="lastname"
            onChange={OnchangeFun}
            placeholder="Enter your lastname"
            value={current.lastname}
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={OnchangeFun}
            placeholder="Enter your email"
            value={current.email}
            autoComplete="off"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
