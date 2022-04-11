import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [current, update] = useState(0);
  const [c, u] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/berry/${current}/`
      );
      //console.log(res.data.flavors);
     u(()=>{
       return[res.data.flavors]
     });
     
    }
    getData();
  },[current]);

  console.log(c[0][0]);

  return (
    <>
      <h1>{current}</h1>

      <select
        value={current}
        onChange={(e) => {
          update(e.target.value)
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
     
    </>
  );
};

export default App;
