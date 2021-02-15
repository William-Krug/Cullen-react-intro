import logo from './logo.svg';
import './App.css';

// Fancy import syntax
// "Object destructuring"
import { useState } from 'react';

// Same as
// import React from 'react';
// const useState = React.useState;

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
  // This won't render!
  // let drinkCount = 1;

  // Fancy useState syntax!
  // I'll explain this later

  // Array destructuring
  const returnValueOfUseState = useState(1);
  const drinkCount = returnValueOfUseState[0];
  const setDrinkCount = returnValueOfUseState[1];

  // useState is a hook (a fancy tool used inside of react components)
  // tracking the value of something across multiple calls of something
  //
  // drinkCount is the current value of my state
  // setDrinkCount let me change the value of my state
  const [drinkCount, setDrinkCount] = useState(1);

  let name = 'William';

  let myH1 = <h1>Go home, {name}, you're drunk!!!!</h1>;

  // "HTML" is actually "JSX" === "Javascript eXtended"
  // as in App.jsx
  return (
    // <div className="App">
    //   {myH1}
    //   <header className="App-header">
    //     {/* HelloCullen is a React Component */}
    //     {/* self closing */}
    //     <HelloCullen />
    //     <HelloCullen />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to win!!!.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h1>Cullen Happy Hour!</h1>
      <p>
        {name} has had {drinkCount} drink
      </p>

      <button onClick={() => setDrinkCount(drinkCount + 1)}>Drink up</button>

      <button onClick={() => setDrinkCount(0)}>Sober up</button>
    </div>
  );
}

export default App;
