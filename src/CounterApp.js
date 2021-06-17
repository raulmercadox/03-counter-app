import { Fragment, useState } from "react";

const CounterApp = ({ valor = 100 }) => {
  const [counter, setCounter] = useState(valor);

  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };

  const resetHandler = () => {
    setCounter(valor);
  };

  return (
    <Fragment>
      <label>{counter}</label>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
    </Fragment>
  );
};

export default CounterApp;
