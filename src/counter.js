import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
      <div className="my-2 p-2 fw-bold  bg-secondary-subtle">{count}
      </div>
      <button className="btn btn-success" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;