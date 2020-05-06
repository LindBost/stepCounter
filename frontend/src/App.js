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
          <MainRouter userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
  );
}

export default App;
