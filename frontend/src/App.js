import React, {useState} from 'react';
import './App.css';
import MainRouter from "./MainRouter";
import NavBar from "./components/NavBar/NavBar";
import {NotificationContainer} from 'react-notifications';


function App() {

    const [userInfo, setUserInfo] = useState({});
    console.log('USER', userInfo);

  return (
      <div className="App">
          <NavBar/>
          <MainRouter userInfo={userInfo} setUserInfo={setUserInfo} />
          <NotificationContainer />
      </div>
  );
}

export default App;
