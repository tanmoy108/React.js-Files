import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Note = (props) => {
  const deletebutton = () => {
    props.delete(props.id);
  };

  return (
    <>
      <div className="col-sm-3">
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title" style={{ textTransform: "capitalize" }}>
              {props.notevalue}
            </h5>
            <p className="card-text">{props.notetext}</p>
            <button onClick={deletebutton} className="btn float-end btnstyle">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
