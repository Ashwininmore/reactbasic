/*The useEffect Hook allows you 
to perform side effects in your 
components.Some examples of side
effects are: fetching data, 
directly updating the DOM, 
and timers.useEffect accepts two
arguments. The second argument 
is optional.
useEffect(<function>, <dependency>)*/
import { useEffect, useState } from "react";


//   useEffect(() => {
//     //Runs on every render
//   });

// useEffect(() => {
//     //Runs only on the first render
//   }, []);

//   useEffect(() => {
//     //Runs on the first render
//     //And any time any dependency 
      // value changes
//   }, [prop, state]);

export default function Useeffect() {
  const [price, setPrice] = useState(0);
  const [calculateRate, setCalculateRate] = useState(1);

  useEffect(() => {
    console.log("Useeffect called..");
    setCalculateRate(() => price * 20);
  }, [price]);

  return (
    <div>
      <input type="button" 
      onClick={() => 
      setPrice((prv) => prv + 20)} 
      value="ChangePrice"/>
      <h2>Price :{price}</h2>
      <h3>Calcuated Rate: {calculateRate}</h3>
    </div>
  );
}