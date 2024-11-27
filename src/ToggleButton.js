import { useState } from "react";

function ToggleButton() {
  const [mode, setMode] = useState("ON");
  function toggleMode() {
    mode === "ON" ? setMode("OFF") : setMode("ON");
  }
  return (
    <div>
      <div className="p-2 bg-body-secondary my-2 fw-bold">{mode}</div>
      <button className="btn btn-success" onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ToggleButton;