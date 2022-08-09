import React from 'react';
import './App.css';
import {Expenses} from "./pages/expenses";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Expenses App
      </header>
        <Expenses />
    </div>
  );
}

export default App;
