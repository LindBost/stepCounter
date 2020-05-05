import React from 'react';
import './App.css';
import Login from "./components/Login";
import RegisterNewAccount from "./components/RegisterNewAccount";
import StepTracker from "./components/StepTracker";

function App() {
  return (
      <div className="App">
        <p>hallå hallå</p>
        <Login/>
        <RegisterNewAccount/>
        <StepTracker/>
      </div>
  );
}

export default App;
