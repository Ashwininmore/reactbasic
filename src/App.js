import logo from './logo.svg';
import './App.css';
import Greet from './Component/FuncComp';
import Welcome from './Component/ClassComp';
import CompLife from './Component/CompLifeCycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 style={{color: "white", backgroundColor:"#00008B"}}>Functional Component</h1>
        <Greet />
      <h1 style={{color: "white", backgroundColor:"#00008B"}}>Class Component</h1>
        <Welcome />
      <h1 style={{color: "white", backgroundColor:"#00008B"}}>Component Life Cycle</h1>
        <CompLife />
    </div>
  );
}

export default App;
