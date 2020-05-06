import React, {useState}from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DashBoard from "./components/DashBoardy";
import Login from "./components/Login";
import RegisterNewAccount from "./components/RegisterNewAccount";


const MainRouter = ({userInfo, setUserInfo}) => {

    return (
        <Router history={createBrowserHistory({ basename: '' })}>
            <Switch>
                {userInfo.isLoggedIn && <Route exact path='/dashboard' render={() => <DashBoard userInfo={userInfo}/>}/> }

                <Route exact path='/register-new-account' render={(props) => <RegisterNewAccount {...props} />}/>
                <Route exact path='*' render={(props) => <Login {...props} setUserInfo={setUserInfo}/>}  />


            </Switch>
        </Router>
    )
}


export default MainRouter;