import React from "react";
import { Routes, Route } from "react-router-dom";
import Apage from "./Apage";
import Bpage from "./Bpage";
import Cpage from "./Cpage";
import Errors from "./Errors";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Apage />} />
        <Route path="/bpage" element={<Bpage />} />
        <Route path="/cpage/:fname/:lname" element={<Cpage />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
};

export default App;
