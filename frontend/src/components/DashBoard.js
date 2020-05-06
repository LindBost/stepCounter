import React from 'react';
import Teams from "./Teams";
import Induvidual from './Induvidual';
import StepTracker from "./StepTracker";


const DashBoard = ({userInfo}) => {



    return (
        <div>
            {/*<Teams/>*/}
            {/*<Induvidual/>*/}
            <StepTracker userInfo={userInfo}/>




            <p>FAAAAAAAN</p>

        </div>

    )
};

export default DashBoard;