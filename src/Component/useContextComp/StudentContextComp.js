import { useState } from "react";
import studentContext from "./studentContext";
export default function StudentContextComp(props) {
  const name2 = "More";
  const [name, setName] = useState("Ashwini");
  //const [students, setStudents] = useState([]);
  return (
    <studentContext.Provider value={{ name, name2 }}>
      {props.children}
    </studentContext.Provider>
  );
}