import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Write from "./Write";
import Note from "./Note";
import "./all.min.css";

const App = () => {
  const [currentapp, updateapp] = useState([]);

  const WriteAppEvent = (currentvalue) => {
    updateapp((oldapp) => {
      return [...oldapp, currentvalue];
    });
    console.log(currentvalue);
  };

  const NoteAppEvent = (noteid) => {
    updateapp((old) => {
      return old.filter((value, index) => {
        return index !== noteid;
      });
    });
  };

  return (
    <>
      <Header />
      <Write addEvents={WriteAppEvent} />
      <div className="container-fluid">
        <div className="row">
          {currentapp.map((value, index) => {
            return (
              <Note
                notevalue={value.title}
                notetext={value.textarea}
                id={index}
                key={index}
                delete={NoteAppEvent}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
