import { useState } from "react";

function ShowHide() {
  //   const [visibility, setVisibility] = useState("block");
  //   function toggleVisibility() {
  //     visibility === "block" ? setVisibility("none") : setVisibility("block");
  //   }
  const [visibility, setVisibility] = useState(100);
  function toggleVisibility() {
    visibility === 100 ? setVisibility(0) : setVisibility(100);
  }
  return (
    <div>
      <p className={`opacity-${visibility}`}>
        Hi am varun
      </p>
      <button className="btn btn-success" onClick={toggleVisibility}>
        Toggle Visibility
      </button>
    </div>
  );
}

export default ShowHide;