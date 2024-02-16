import logo from './logo.svg';
import './App.css';
import Greet from './Component/FuncComp';
import Welcome from './Component/ClassComp';
import CompLife from './Component/CompLifeCycle';
import Stateexample from './Component/StateObj';
import Propsexample from './Component/Props';
import Simplejsx from './Component/JSXexample';
import Jsxfunction from './Component/Jsxfunction';
import JSXIf from './Component/JSXif';
import Jsxattribute from'./Component/Jsxattribute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './Component/Bootstrap';
import Usestate from './Component/Usestate';

function App() {
  const data={name:'Swami'};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 style={{color: "#87CEEB"}}>Functional Component</h1>
        <Greet />
      <h1 style={{color: "#87CEEB"}}>Class Component</h1>
        <Welcome />
      <h1 style={{color: "#87CEEB"}}>Component Life Cycle</h1>
        <CompLife />
        <h1 style={{color: "#87CEEB"}}>State Object</h1>
        <Stateexample />
        <h1 style={{color: "#87CEEB"}}>Props example</h1>
        <Propsexample data={data} />
        <h1 style={{color: "#87CEEB"}}>JSX Example</h1>
        <Simplejsx />
        <h1 style={{color: "#87CEEB"}}>JSX Function</h1>
        <Jsxfunction />
        <h1 style={{color: "#87CEEB"}}>JSX If</h1>
        <JSXIf />
        <h1 style={{color: "#87CEEB"}}>JSX Attribute</h1>
        <Jsxattribute />
        <h1 style={{color: "#87CEEB"}}>Bootstrap in React</h1>
        <Bootstrap />
        <h1 style={{color: "#87CEEB"}}>Usestate Hook</h1>
        <Usestate />
      </header>
      
    </div>
  );
}

export default App;
