// import React from "react";

// const Cpage = (props) => {
//   return <><h1>hello {props.valueb}</h1></>;
// };

// export default Cpage;

import React from "react";
import { Name, Lastname } from "./App";

const Cpage = () => {
  return (
    <>
      <Name.Consumer>
        {(name) => {
          return (
            <>
              <Lastname.Consumer>
                {(lname) => {
                  return (
                    <h1>
                      hello {name} {lname}
                    </h1>
                  );
                }}
              </Lastname.Consumer>
            </>
          );
        }}
      </Name.Consumer>
    </>
  );
};

export default Cpage;
