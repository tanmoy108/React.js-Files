import React, { useState } from "react";

const App = () => {
  const [currentColor, updateColor] = useState("thistle");
  const [currentText, updateText] = useState("Click Me");

  const Clickone = () => {
    updateColor("rgb(114, 7, 255)");
    updateText("What ?? 😠 ");
  };

  const Mousetwice = () => {
    updateColor("rgb(253, 137, 137)");
    updateText("Hey !! 👊 ");
  };
  const Mouseout = () => {
    updateColor("thistle");
    updateText("Click Me");
  };

  return (
    <>
      <div className="part" style={{ backgroundColor: currentColor }}>
        <button
          onClick={Clickone}
          onMouseOver={Mousetwice}
          onMouseOut={Mouseout}
        >
          {currentText}
        </button>
      </div>
    </>
  );
};

export default App;
