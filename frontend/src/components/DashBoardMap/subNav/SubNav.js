import React from 'react';
import './SubNav.css';
import { useHistory } from "react-router-dom";

const logo = require('../../../pic/logga.png');
const SubNav = ({setUserInfo}) => {
    const history = useHistory();
    const navigateToLeaderBoard = () => history.push('/leaderboard');
    const navigateToDashBoard = () => history.push('/dashboard');


    return (
        <div className="subnav">

            <div className="menu">
                <button type="button" onClick={navigateToLeaderBoard}>Leaderboard</button>
                <button type="button" onClick={navigateToDashBoard}>DashBoard</button>
                <button type="button" onClick={setUserInfo}>Sign Out</button>

                <ul className='navbar-items'>

                </ul>
            </div>
        </div>
    );
}

export default SubNav;