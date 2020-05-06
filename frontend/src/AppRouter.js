import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Login from './components/Login';
import RegisterNewAccount from './components/RegisterNewAccount';

const AppRouter = () => {
    return (
        <Router history={createBrowserHistory({ basename: '' })}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register-new-account' component={RegisterNewAccount} />
            </Switch>
        </Router>
    )
}


export default AppRouter;