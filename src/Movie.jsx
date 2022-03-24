import React from "react";

function Movie(props) {
  return (
    <>
      <div className="Cards">
        <div className="Firstpart">
          <img src={props.imgSrc} alt="image 1"></img>
        </div>
        <div className="Secondpart">
          <h3>{props.title}</h3>
          <h5>{props.website}</h5>
          <p>{props.about}</p>
          <a href={props.link} target="_blank">
            <button>Preview</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Movie;
