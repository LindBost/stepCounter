import React, {useEffect, useState} from 'react';
import StepTracker from "../StepTracker";
import PersonalData from "../PersonalData";
import {personalSteps} from "../../service/UserService";
import CalcMonthlySteps from "../CalcMonthlySteps";
import Teams from "../Teams";
import "./Dash.css";


const DashBoard = ({userInfo}) => {

    const [mySteps, setMySteps] = useState([]);

    useEffect(() => {
        fetchMySteps();
    }, [userInfo])

    async function fetchMySteps() {
        const personalData = await personalSteps(userInfo.email);
        console.log('res', personalData);
        setMySteps(personalData.stepInfoList)
        console.log('ta bort kommentar')
    }

    return (
        <div className="dashPage">
        <div className="dashContainer">
                <h1>DashBoard</h1>
                <div className="fetchedInfo">

                    <div className="dashBoard">
                        <div className="card">
                            <Teams team={userInfo.team}/>
                        </div>

                        <div className="card">
                            <PersonalData mySteps={mySteps}/>
                            <CalcMonthlySteps mySteps={mySteps}/>
                        </div>


                    </div>

                </div>
                <div className="stepCard">
                    <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo} mySteps={mySteps} />
                </div>
            </div>
        </div>

    )
};

export default DashBoard;