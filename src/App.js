import React, { useState } from "react";

const App = () => {
  const [current, update] = useState("");
  const [a, b] = useState();
  const [current2, update2] = useState("");
  const [c, d] = useState();

  const TypeName = (e) => {
    let x = e.target.value;
    update(x);
  };

  const TypeName1 = (event) => {
    event.preventDefault();
    b(current);
    d(current2);
  };

  const TypeLName = (e) => {
    update2(e.target.value);
  };
  return (
    <>
      <div className="part">
        <form onSubmit={TypeName1}>
          <h1>
            Hello {a}
            {c}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={TypeName}
            value={current}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={TypeLName}
            value={current2}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
