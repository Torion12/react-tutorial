import './App.css';
import { useState } from "react";

function App() {
  const [number, newNamber] = useState(0);
  const [textColor, newTextColor] = useState("black");
  const [text, newText] = useState(true);

  const color = () => {
    newTextColor(textColor === "black" ? "Red" : "black");
  }
  const ShowHide = () => {
    newText(!text);
  }
  const Increase = () => {
    newNamber((prevNum) => prevNum + 1);
  }
  const Decrease = () => {
    newNamber((prevNum) => prevNum - 1);
  }
  const zero = () => {
    newNamber(0);
  }

  return (
    <div className="App">
      <button onClick={Increase}> Increase</button>
      <button onClick={Decrease}> Decrease </button>
      <button onClick={zero}> Set to zero</button>
      <button onClick={color}> Change color </button>
      <button onClick={ShowHide}>Show/Hide</button>
      {text && <h1 style={{ color: textColor }}>{number}</h1>}
    </div>
  );
}

export default App;
