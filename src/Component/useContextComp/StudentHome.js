import { useContext } from "react";
import studentContext from "./studentContext";

export default function StudentHome() {
  const studentdata = useContext(studentContext);
  return (
    <div>
      <h1>Student Information</h1>
      <h2>Welcome {studentdata.name} </h2>
      <h2>Welcome {studentdata.name2} </h2>
    </div>
  );
}