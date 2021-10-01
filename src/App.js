import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const aRef = useRef();
  const bRef = useRef();
  const [result, setResult] = useState(0);

  const calculate = (a, b, op) => {
    if (op === "add") {
      setResult(Number(a) + Number(b));
    } else if (op === "minus") {
      setResult(Number(a) - Number(b));
    } else if (op === "divide") {
      setResult(Number(a) / Number(b));
    } else if (op === "min") {
      setResult(Math.min(Number(a), Number(b)));
    } else if (op === "max") {
      setResult(Math.max(Number(a), Number(b)));
    } else {
      setResult(Number(a) * Number(b));
    }
  };

  const handleCalculation = (e) => {
    const a = aRef.current.value;
    const b = bRef.current.value;
    const op = e.target.value;
    if (a !== "" && b !== "") {
      calculate(a, b, op);
    }
    aRef.current.value = "";
    bRef.current.value = "";
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1>Calculate</h1>
        <input ref={aRef} placeholder="Enter A.." />
        <input ref={bRef} placeholder="Enter B.." />
        <select onChange={handleCalculation}>
          <option value="none" defaultValue hidden>
            Select Operation
          </option>
          <option value="add">A+B</option>
          <option value="minus">A-B</option>
          <option value="divide">A/B</option>
          <option value="multiply">A*B</option>
          <option value="max">max(A,B)</option>
          <option value="min">min(A,B)</option>
        </select>
        <h1 id="result">{result}</h1>
      </div>
    </div>
  );
}
