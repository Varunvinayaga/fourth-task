import Counter from "./counter";
import DynamicInput from "./dynamicinput";
import ToggleButton from "./ToggleButton";
import ShowHide from "./showhide";
function App() {
  return (
    <div className="p-5 d-flex justify-content-around text-center">
      <p>
        <h3>Task - 1</h3>
        <Counter />
      </p>
      <p>
        <h3>Task - 2</h3>
        <DynamicInput />
      </p>
      <p>
        <h3>Task - 3</h3>
        <ToggleButton />
      </p>
      <p>
        <h3>Task - 4</h3>
        <ShowHide />
      </p>
    </div>
  );
}

export default App;
