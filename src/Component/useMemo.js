/*The useMemo hook in React is a 
performance optimization tool 
that allows you to memoize 
expensive computations and 
avoid unnecessary re-renders.
It takes a function and an array 
of dependencies as arguments and 
returns a memoized value. 
The memoized value is the result 
of the function call, and it is 
cached until one of the 
dependencies changes.*/
import { useState, useMemo } from "react";

export default function Usememo() {
  const [number, setNumber] = useState(1);

  const [inc, setInc] = useState(0);

  // const factorialResult = factorialOf(number);
  const factorialResult = useMemo(() => factorialOf(number), [number]);

  const onNumberChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const incrementNum = () => setInc((prv) => prv + 1);

  return (
    <div style={{ margin: "40px", padding: "10px" }}>
      Factorial of
      <input
        type="number"
        value={number}
        onChange={onNumberChange}
        style={{ margin: "10px", padding: "10px" }}
      />
      <br />
      Factorial of {number} is {factorialResult}
      <br />
      <button
        onClick={incrementNum}
        style={{ margin: "10px", padding: "10px" }}
      >
        Re-render
      </button>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(n) called....!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

/*
Every time you change the input value, 
the factorial is calculated factorialOf(n) 
and 'factorialOf(n) called!' is logged to 
console.*/