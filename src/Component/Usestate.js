/*useState is React Hook that allows you
to add state to a functional component. 
It returns an array with two values: 
the current state and a function to 
update it. The Hook takes an initial 
state value as an argument and returns 
an updated state value whenever the 
setter function is called.*/
import React from "react";
import { useState } from "react";

export default function Usestate() {
  //defining state using react hook
  //hook -useState
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
    <form>
      Enter Your Name:
      <input type="text" onChange={updateName} />
      <br />
      <h2> NAME: {name}</h2>
      <button type="reset" value="reset">reset</button>
      </form>
    </div>
  );
}