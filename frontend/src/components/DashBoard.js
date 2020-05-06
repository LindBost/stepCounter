import React from 'react';
import Teams from "./Teams";
import Induvidual from './Induvidual';
import StepTracker from "./StepTracker";
import PersonalData from "./PersonalData";


const DashBoard = ({userInfo}) => {



    return (
        <div>
            {/*<Teams/>*/}
            {/*<Induvidual/>*/}
            <PersonalData/>
            <StepTracker userInfo={userInfo}/>




            <p>FAAAAAAAN</p>

        </div>

    )
};

export default DashBoard;