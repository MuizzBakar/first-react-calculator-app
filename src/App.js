import "./App.css";
import { useState } from "react";
// import Input from "./Input";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clearAll = () => {
    setResult("");
  };

  const deletion = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const answer = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} placeholder="0" />
      </form>

      <div className="calc-wrapper">
        <button onClick={clearAll} id="clearAll">
          AC
        </button>
        <button onClick={deletion} id="deletion">
          &#8592;
        </button>
        <button name="/" onClick={handleClick} className="operator">
          &divide;
        </button>
        <button name="7" onClick={handleClick} className="numbers">
          7
        </button>
        <button name="8" onClick={handleClick} className="numbers">
          8
        </button>
        <button name="9" onClick={handleClick} className="numbers">
          9
        </button>
        <button name="*" onClick={handleClick} className="operator">
          &times;
        </button>
        <button name="4" onClick={handleClick} className="numbers">
          4
        </button>
        <button name="5" onClick={handleClick} className="numbers">
          5
        </button>
        <button name="6" onClick={handleClick} className="numbers">
          6
        </button>
        <button name="-" onClick={handleClick} className="operator">
          &minus;
        </button>
        <button name="1" onClick={handleClick} className="numbers">
          1
        </button>
        <button name="2" onClick={handleClick} className="numbers">
          2
        </button>
        <button name="3" onClick={handleClick} className="numbers">
          3
        </button>
        <button name="+" onClick={handleClick} className="operator">
          +
        </button>
        <button name="0" onClick={handleClick} className="numbers">
          0
        </button>
        <button name="." onClick={handleClick} className="numbers">
          .
        </button>
        <button onClick={answer} id="equator">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
