import logo from './logo.svg';
import './App.css';
import './joke.js'

/*function App() {
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
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="main-box">
      
        <p id="joke"></p>
        <button id="btn">Get Random Joke Here</button>
    </div>
      </header>
    </div>
  );
}

export default App;

