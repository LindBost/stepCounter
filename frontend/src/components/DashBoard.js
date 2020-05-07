import React, {useEffect, useState} from 'react';
import StepTracker from "./StepTracker";
import PersonalData from "./PersonalData";
import {personalSteps} from "../service/UserService";
import CalcMonthlySteps from "./CalcMonthlySteps"


const DashBoard = ({userInfo}) => {

    const [mySteps, setMySteps] = useState([]);

    useEffect(() => {
        fetchMySteps();
    }, [userInfo])

    async function fetchMySteps() {
        const personalData = await personalSteps(userInfo.email);
        console.log('res', personalData);
        setMySteps(personalData.stepInfoList)
    }

    return (
        <div>
            {/*<Teams/>*/}
            {/*<Induvidual/>*/}
            <PersonalData mySteps={mySteps}/>
            <CalcMonthlySteps mySteps={mySteps}/>
            <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo} mySteps={mySteps} />




            <p>FAAAAAAAN</p>

        </div>

    )
};

export default DashBoard;