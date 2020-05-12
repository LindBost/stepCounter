import React, {useState}from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import DashBoard from './components/DashBoardMap/DashBoard';
import Login from "./components/Login";
import RegisterNewAccount from './components/RegisterAccountMapp/RegisterNewAccount';
import Leaderboard from './components/Leaderboard';


const MainRouter = ({userInfo, setUserInfo}) => {

    return (
            <Switch>
                {userInfo.isLoggedIn &&
                    <>
                        <Route exact path='/leaderboard' render={(props) => <Leaderboard/>}/>
                        <Route exact path='/dashboard' render={() => <DashBoard userInfo={userInfo}/>}/>
                    </>
                }
                <Route exact path='/register-new-account' render={(props) => <RegisterNewAccount {...props} />}/>
                <Route exact path='*' render={(props) => <Login {...props} setUserInfo={setUserInfo}/>}  />
            </Switch>
    )
};

export default MainRouter;