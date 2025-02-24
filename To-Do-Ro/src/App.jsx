import React, { useState } from 'react';
import './App.css';
import ToDo from './toDo.jsx';
import Timer from './Timer.jsx';
import Preset from './Presets.jsx';

function App() {
  const [showPresets, setShowPresets] = useState(false);

  function show() {
    setShowPresets(prevState => !prevState);
  }

  return (
    <>
      <header>
        <nav>
          <h2>To-Do-Ro</h2>
          <button onClick={show}>
            Color
          </button>
          {showPresets && (
            <div style={{ display: 'flex' }} id="color-presets">
              <Preset primary="red" secondary="black" />
              <Preset primary="white" secondary="black" />
            </div>
          )}
        </nav>
      </header>
      <Timer />
      <ToDo />
    </>
  );
}

export default App;