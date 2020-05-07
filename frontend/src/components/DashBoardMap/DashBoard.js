import React, {useEffect, useState} from 'react';
import StepTracker from "../StepTracker";
import PersonalData from "../PersonalData";
import {personalSteps} from "../../service/UserService"
import CalcMonthlySteps from "../CalcMonthlySteps"
import Teams from "../Teams";
import "./Dash.css"


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
        <div className="dashPage">
            <p>DashBoard</p>
            <div className="dashContainer">

                <div className="dashBoard">
                    <div className="card">
                        <Teams team={userInfo.team}/>
                    </div>

                    <div className="card">
                        <PersonalData mySteps={mySteps}/>
                        <CalcMonthlySteps mySteps={mySteps}/>
                    </div>

                    <div className="card">
                        <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo} mySteps={mySteps} />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default DashBoard;