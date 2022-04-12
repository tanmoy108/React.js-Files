import React from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Apage from "./Apage";
import Bpage from "./Bpage";

const App = () => {
  const Cpage = () => {
    return <h1>Cpage</h1>;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Apage />} />
        <Route path="/bpage" element={<Bpage />} />
        <Route path="/bpage/cpage" element={<Cpage />} />
      </Routes>
    </>
  );
};

export default App;
