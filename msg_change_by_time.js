import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const date = new Date();
const a = date.getHours();
let msg = "";
const textStyle = {
  fontWeight: "bold",
};
const box = {
  backgroundColor: "rgb(250, 246, 211)",
  padding: "20px",
  textAlign: "center",
  display: "inline",
  borderRadius: "20px",
};

if (a >= 1 && a < 12) {
  msg = "Good Morning";
  textStyle.color = "rgb(162, 224, 62)";
} else if (a >= 12 && a < 19) {
  msg = "Good Afternoon";
  textStyle.color = "rgb(230, 187, 46)";
} else {
  msg = "Good Night";
  textStyle.color = "rgb(817, 52, 28)";
}

ReactDOM.render(
  <>
    <div className="backGround">
      <h1 style={box}>
        Hello Sir, <span style={textStyle}>{msg}</span>{" "}
      </h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  </>,
  document.getElementById("root")
);
