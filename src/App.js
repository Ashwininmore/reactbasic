import logo from './logo.svg';
import './App.css';
import Greet from './Component/FuncComp';
import Welcome from './Component/ClassComp';
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
      <h1 style={{color: "red"}}>Functional Component</h1>
        <Greet />
      <h1 style={{color: "red"}}>Class Component</h1>
        <Welcome />
    </div>
  );
}

export default App;
