import React, {useState}from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Login from './components/Login';
import RegisterNewAccount from './components/RegisterNewAccount';

const LoginRouter = ({setUserInfo}) => {


    return (
        <Router history={createBrowserHistory({ basename: '' })}>
            <Switch>
                <Route exact path='/' render={(props) => <Login {...props} setUserInfo={setUserInfo}/>}  />
                <Route exact path='/register-new-account' component={RegisterNewAccount} />
                <Route path='/' render={(props) => <Login {...props} setUserInfo={setUserInfo}/>}  />
            </Switch>
        </Router>
    )
}


export default LoginRouter;