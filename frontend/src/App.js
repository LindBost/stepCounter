import React, {useState} from 'react';
import './App.css';
import MainRouter from "./MainRouter";
import LoginRouter from './LoginRouter';

function App() {

    const [userInfo, setUserInfo] = useState({});
    console.log('USER', userInfo);

    const handleLoggin = () => {
        setUserInfo()
    };

  return (
      <div className="App">
        <p>hallå hallå</p>
          {userInfo.isLoggedIn ? <MainRouter userInfo={userInfo}/> : <LoginRouter setUserInfo={setUserInfo}/>}
      </div>
  );
}

export default App;
