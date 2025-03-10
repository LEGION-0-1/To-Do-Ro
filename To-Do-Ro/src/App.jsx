import React, { useState } from "react";
import "./App.css";
import ToDo from "./toDo.jsx";
import Timer from "./Timer.jsx";
import Preset from "./Presets.jsx";

function App() {
  const [showPresets, setShowPresets] = useState(false);
  const [bgColor, setBgColor] = useState("#242424");
  const [textColor, setTextColor] = useState("white");

  function show() {
    setShowPresets((prevState) => !prevState);
  }

  function handleClick(Text, BG) {
    setBgColor(BG);
    setTextColor(Text);
  }

  return (
    <div id="page" style={{ backgroundColor: bgColor, color: textColor}}>
      <header>
        <nav>
          <h2>To-Do-Ro</h2>
          <button onClick={show}>Color</button>
          {showPresets && (
            <div style={{ display: "flex" }} id="color-presets">
              <Preset primary="red" secondary="black" onClick={() => handleClick("red", "black")} />
              <Preset primary="white" secondary="black" onClick={() => handleClick("white", "black")} />
              <Preset primary="white" secondary="black" onClick={() => handleClick("white", "#242424")} />
            </div>
          )}
        </nav>
      </header>
      <Timer style={{borderColor: textColor}} />
      <ToDo style={{}} />
    </div>
  );
}

export default App;
