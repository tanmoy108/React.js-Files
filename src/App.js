import React, { useState } from "react";

const App = () => {
  const [current, update] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [current1, update1] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const PressSubmit = (e) => {
    e.preventDefault();
    update1(() => {
      return {
        fname: current.fname,
        lname: current.lname,
        email: current.email,
      };
    });
  };

  const TextInput = (e) => {
    let text = e.target.value;
    let inputName = e.target.name;
    console.log(text);
    console.log(inputName);

    update((e) => {
      console.log(e);
      if (inputName === "fname") {
        return {
          fname: text,
          lname: e.lname,
          email: e.email,
        };
      } else if (inputName === "lname") {
        return {
          fname: e.fname,
          lname: text,
          email: e.email,
        };
      } else {
        return {
          fname: e.fname,
          lname: e.lname,
          email: text,
        };
      }
    });
  };

  return (
    <>
      <div className="part">
        <h1>
          Hello {current1.fname} {current1.lname}
        </h1>
        <h4>{current1.email}</h4>
        <form onSubmit={PressSubmit}>
          <input
            type="text"
            onChange={TextInput}
            name="fname"
            placeholder="Enter your First Name"
            value={current.fname}
          />
          <br />
          <input
            type="text"
            onChange={TextInput}
            name="lname"
            placeholder="Enter your Last Name"
            value={current.lname}
          />
          <br />
          <input
            type="email"
            onChange={TextInput}
            name="email"
            placeholder="Enter your Email"
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
