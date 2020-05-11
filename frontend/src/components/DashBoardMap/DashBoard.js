import React, {useEffect, useState} from 'react';
import StepTracker from "../StepTracker";
import PersonalData from "../PersonalData";
import {personalSteps} from "../../service/UserService";
import CalcMonthlySteps from "../CalcMonthlySteps";
import Teams from "./Team/Teams";
import "./Dash.css";


const getCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth();
    return month +1;
};

const DashBoard = ({userInfo}) => {

    const [mySteps, setMySteps] = useState([]);
    const [month, setMonth] = useState(getCurrentDate());


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
                        <h2> Your steps:</h2>
                            <div className="cardContent">
                                <PersonalData mySteps={mySteps} month={month}/>
                            </div>

                            <CalcMonthlySteps mySteps={mySteps} month={month} setMonth={setMonth}/>
                        </div>


                    </div>

                </div>
                <div className="wideCard">
                    <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo} mySteps={mySteps} />
                </div>
            </div>
        </div>

    )
};

export default DashBoard;