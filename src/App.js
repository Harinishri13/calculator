import React, { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "-", "+", "C"];
  const updateCalc = (value) => {
    if (value === "C") {
      setCalc("");
      setResult("");
      return;
    }
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
  };
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(calc).toString());
  };
  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator App</h1>
        <input type="text" className="display" value={calc} disabled />
        {result ? (
          <div className="result">{result}</div>
        ) : (
          <div className="result"></div>
        )}
        {/* <div className="digits">{createDigits()}</div> */}
        <div className="digits">
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("C")}>C</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => updateCalc("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
