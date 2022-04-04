import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

const App = () => {
  const [current, update] = useState("");
  const [fcurrent, fupdate] = useState([]);
  const inputtext = (e) => {
    update(e.target.value);
  };

  const buttonsubmit = (e) => {
    e.preventDefault();

    if (fcurrent.length > 5) {
      let element = document.getElementById("ullist");
      element.classList.add("ulscroll");
    }

    if (current != "") {
      fupdate((old) => {
        return [...old, current];
      });
      update("");
    } else alert("fuck you");
  };

  const deleteitems = (id) => {
    if (fcurrent.length <= 7) {
      let element = document.getElementById("ullist");
      element.classList.remove("ulscroll");
    }

    fupdate((old) => {
      return old.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="part">
        <h2 style={{ textTransform: "uppercase", marginBottom: "10px" }}>
          To Do List
        </h2>
        <form onSubmit={buttonsubmit}>
          <input
            type="text"
            placeholder="enter your bullshit"
            onChange={inputtext}
            name="bullshit"
            autoComplete="off"
            value={current}
          />
          <button>
            <i className="fa-solid fa-circle-plus" type="submit"></i>{" "}
          </button>
        </form>

        <ul id="ullist">
          {fcurrent.map((item, indexs) => {
            return (
              <>
                <Listitem
                  key={indexs}
                  values={item}
                  id={indexs}
                  onselect={deleteitems}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
