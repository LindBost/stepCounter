import React, {useState} from 'react';
import './App.css';
import MainRouter from "./MainRouter";
import NavBar from "./components/NavBar/NavBar";


function App() {

    const [userInfo, setUserInfo] = useState({});
    console.log('USER', userInfo);

  return (
      <div className="App">
          <NavBar/>
          <MainRouter userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
  );
}

export default App;
