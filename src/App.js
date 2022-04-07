// import React from "react";
// import Apage from './Apage';

// const App = () => {
//   return <>
//     <Apage value="tanmoy" />
//   </>;
// };

// export default App;

import React, { createContext } from "react";
import Apage from "./Apage";

const Name = createContext();
const Lastname = createContext();

const App = () => {
  return (
    <>
      <Name.Provider value="tanmoy">
      <Lastname.Provider value="sharma">
        <Apage />
        </Lastname.Provider>
      </Name.Provider>
    </>
  );
};

export default App;
export { Name , Lastname };
