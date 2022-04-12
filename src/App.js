import React from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Apage from "./Apage";
import Bpage from "./Bpage";
import Errors from "./Errors";
import Menu from "./Menu";

const App = () => {
  const Cpage = () => {
    return <h1>Cpage</h1>;
  };
  return (
    <>
      <Menu />
      <Routes>
        {/* <Route path="/" element={<Menu/>} /> */}
        <Route path="/" element={<Apage />} />
        <Route path="/bpage" element={<Bpage />} />
        <Route path="/bpage/cpage" element={<Cpage />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
};

export default App;
