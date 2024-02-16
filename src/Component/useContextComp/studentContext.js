/*The useContext hook in React JS
is used to access data that is 
shared across multiple components
without explicitly passing it 
through props. It is part of the 
React Context API, which is built 
into the React library.*/

import { createContext } from "react";
const studentContext = createContext();

export default studentContext;