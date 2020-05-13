import React, {useState}from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import DashBoard from './components/DashBoardMap/DashBoard';
import Login from "./components/Login";
import RegisterNewAccount from './components/RegisterAccountMapp/RegisterNewAccount';
import LeaderboardPage from './components/Leaderdoard/LeaderboardPage';


const MainRouter = ({userInfo, setUserInfo}) => {

    return (
            <Switch>
                {userInfo.isLoggedIn &&
                    <>
                        <Route exact path='/leaderboard' render={(props) => <LeaderboardPage setUserInfo={setUserInfo}/>}/>
                        <Route exact path='/dashboard' render={() => <DashBoard userInfo={userInfo} setUserInfo={setUserInfo}/>}/>
                    </>
                }
                <Route exact path='/register-new-account' render={(props) => <RegisterNewAccount {...props} />}/>
                <Route exact path='*' render={(props) => <Login {...props} setUserInfo={setUserInfo}/>}  />
            </Switch>
    )
};

export default MainRouter;