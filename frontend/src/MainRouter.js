import React, {useState}from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DashBoard from "./components/DashBorad";

const MainRouter = () => {

    return (
        <Router history={createBrowserHistory({ basename: '' })}>
            <Switch>
                <Route exact path='/dashboard' component={DashBoard} />
            </Switch>
        </Router>
    )
}


export default MainRouter;