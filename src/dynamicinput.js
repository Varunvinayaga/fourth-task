import { useState } from "react";

function DynamicInput() {
  const [input, setInput] = useState("");
  function typeHandler(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input
        className="form-check-input w-100 h-100"
        type="text"
        value={input}
        onChange={typeHandler}
      />
      <p className="bg-body-tertiary p-3 fs-5">{input}</p>
    </div>
  );
}

export default DynamicInput;
