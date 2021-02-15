import logo from './logo.svg';
import './App.css';

// If this was node, we'd do:
// const HelloCullen = require('./HelloCullen');

// Client side (react) we'll do:
import HelloCullen from './HelloCullen';

// App is a Component
// React is made up of Components
// A Component is a function that returns JSX
// You can next Components
// Components are the main unit of work inside of React\
// React convention is to use UpperCamelCase (PascalCase) for Components
function App() {
  let name = 'William';

  let myH1 = <h1>Go home, {name}, you're drunk!!!!</h1>;

  // "HTML" is actually "JSX" === "Javascript eXtended"
  // as in App.jsx
  return (
    <div className="App">
      {myH1}
      <header className="App-header">
        {/* HelloCullen is a React Component */}
        {/* self closing */}
        <HelloCullen />
        <HelloCullen />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to win!!!.
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

export default App;
