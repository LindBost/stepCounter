import React from 'react';
import './App.css';
import Login from "./components/Login";
import RegisterNewAccount from "./components/RegisterNewAccount";
import StepTracker from "./components/StepTracker";
import AppRouter from "./AppRouter";

function App() {
  return (
      <div className="App">
        <p>hallå hallå</p>
          <AppRouter/>
      </div>
  );
}

export default App;
