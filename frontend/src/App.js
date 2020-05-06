import React, {useState} from 'react';
import './App.css';
import MainRouter from "./MainRouter";


function App() {

    const [userInfo, setUserInfo] = useState({});
    console.log('USER', userInfo);


  return (
      <div className="App">
        <p>hallå hallå</p>
          <MainRouter userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
  );
}

export default App;
