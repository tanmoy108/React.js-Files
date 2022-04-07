import React, { createContext } from "react";
import Apage from "./Apage";

const Name = createContext();
const Lastname = createContext();

const App = () => {
  return (
    <>
      <Name.Provider value="Tanmoy">
        <Lastname.Provider value="Sharma">
          <Apage />
        </Lastname.Provider>
      </Name.Provider>
    </>
  );
};

export default App;
export { Name, Lastname };
