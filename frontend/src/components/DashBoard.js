import React, {useEffect, useState} from 'react';
import StepTracker from "./StepTracker";
import PersonalData from "./PersonalData";
import {personalSteps} from "../service/UserService";


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
            <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo}/>




            <p>FAAAAAAAN</p>

        </div>

    )
};

export default DashBoard;