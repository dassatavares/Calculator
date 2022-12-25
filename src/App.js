import { useState } from "react";
import "./App.css";

function App() {

  const [input, setInput] = useState("");
  const [count, setCount] = useState("");

  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  };
  const Clear = () => {
    setInput("");
    setCount("");
  };
  const Backspace = () => {
    setInput(input.slice(0, -1));
  };
  const Calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
      setCount(input);
    } 
    catch (err) {
      setInput('Error');
      setCount('Error');
    }
  };

  const [color, setColor] = useState(true);
  
  const changeColor = () => {
    setColor(!color)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Calculadora React</h3>

        <div className={color ? 'calculadora' : 'calculadora bg'}>
          <div className="input">
            <input type="text" className={color ? 'input-top' : 'input-top input-transparent'} value={count} readOnly />
            <input type="text" className={color ? 'input-bottom' : 'input-bottom input-transparent'} value={input} readOnly />
          </div>
          <div className={color ? 'buttons' : 'buttons bg-1'}>
            <button onClick={changeColor} className={color ? 'button-cyan' : 'button-white'}>
              COR
            </button>
            <button onClick={handleClick} name="%" className={color ? 'button-cyan' : 'button-white'}>
              %
            </button>
            <button onClick={handleClick} name="." className={color ? 'button-cyan' : 'button-white'}>
              .
            </button>
            <button onClick={handleClick} name="/" className={color ? 'button-cyan' : 'button-white'}>
              /
            </button><button onClick={handleClick} name="7">
              7
            </button>
            <button onClick={handleClick} name="8">
              8
            </button>
            <button onClick={handleClick} name="9">
              9
            </button>
            <button onClick={handleClick} name="+" className={color ? 'button-cyan' : 'button-white'}>
              +
            </button>
            <button onClick={handleClick} name="4">
              4
            </button>
            <button onClick={handleClick} name="5">
              5
            </button>
            <button onClick={handleClick} name="6">
              6
            </button>
            <button onClick={handleClick} name="-" className={color ? 'button-cyan' : 'button-white'}>
              -
            </button>
            <button onClick={handleClick} name="1">
              1
            </button>
            <button onClick={handleClick} name="2">
              2
            </button>
            <button onClick={handleClick} name="3">
              3
            </button>
            <button onClick={handleClick} name="*" className={color ? 'button-cyan' : 'button-white'}>
              *
            </button>
            <button onClick={Clear} className={color ? 'button-orange' : 'button-white'}>
              CC
            </button>
            <button onClick={handleClick} name="0">
              0
            </button>
            <button onClick={Backspace} className={color ? 'button-orange' : 'button-white'}>C</button>
            <button onClick={Calculate} type="submit" className={color ? 'button-cyan' : 'button-white'}>
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
