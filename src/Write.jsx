import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Write = (props) => {
  const [current, update] = useState({
    title: "",
    textarea: "",
  });

  const InputText = (e) => {
    let value = e.target.value;
    let tagname = e.target.name;

    update((oldvalue) => {
      return {
        ...oldvalue,
        [tagname]: value,
      };
    });
  };

  const ClickAdd = (e) => {
    e.preventDefault();
    if (current.title !== "" && current.textarea !== "") {
      props.addEvents(current);
    }
    update({
      title: "",
      textarea: "",
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center m-5">Note Your Event</h1>
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <div className="form-group">
                <input
                  onChange={InputText}
                  type="text"
                  className="form-control titleclass"
                  placeholder="Title"
                  value={current.title}
                  name="title"
                />
                <textarea
                  onChange={InputText}
                  className="form-control"
                  rows="3"
                  placeholder="Take a note..."
                  value={current.textarea}
                  name="textarea"
                />
                <button
                  type="submit"
                  className="btn mb-2 float-end btnstyle add mb-5 border-bottom"
                  onClick={ClickAdd}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
