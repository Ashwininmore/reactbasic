import logo from './logo.svg';
import './App.css';
import Get from './Component/get';
import Post from './Component/post';
import Put from './Component/put';
import Delete from './Component/delete';
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
        <h1>Get Method</h1>
        <Get />
        <h1>Post Method</h1>
        <Post />
        <h1>Put Method</h1>
        <Put />
        <h1>Delete Method</h1>
        <Delete />
      </header>
    </div>
  );
}

export default App;