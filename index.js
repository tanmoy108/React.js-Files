import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const a = "Tanmoy Sharma";
const b = "sh";
const c = "tanmoy";
const date = new Date();
const image = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/300/300";
const image3 = "https://picsum.photos/400/300";
const orderList = {
  backgroundColor: "bisque",
  padding: "10px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
ReactDOM.render(
  <>
    <div style={orderList}>
      <h1 id="d">Zoombie Movies</h1>
      <p>top 5 zoom movies i have seen</p>
      <ol>
        <li>All of us are dead</li>
        <li>Tran to busan</li>
        <li>world war 2</li>
        <li>penisula</li>
        <li>return of evil</li>
      </ol>
    </div>
    <strong>My name is {a}</strong>
    <h4>Addition: {4 * 5}</h4>
    <h2>
      my name is {b} {c}
    </h2>
    <h2>my name is {b + " " + c}</h2>
    <h2 contentEditable="true"> {`my name is ${b} ${c}`} </h2>

    <h3>{`Name: ${b} ${c}`}</h3>
    <h3>
      {`aj ki date ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} `}
    </h3>
    <h3>{`time : ${
      date.getHours() - 12
    }:${date.getMinutes()}:${date.getSeconds()}`}</h3>
    <p>{date.toLocaleDateString()}</p>
    <p>{date.toLocaleTimeString()}</p>
    <img src={image} alt="randomImage" />
    <img src={image2} alt="randomImage2" />
    <a href="https://picsum.photos/" target="_blank">
      <img src={image3} alt="randomImage2" />
    </a>
  </>,
  document.getElementById("root")
);
