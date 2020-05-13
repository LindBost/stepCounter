import React, {useEffect, useState} from 'react';
import StepTracker from "../StepTracker";
import PersonalData from "../PersonalData";
import {personalSteps, teamMembers} from "../../service/UserService";
import CalcMonthlySteps from "../CalcMonthlySteps";
import Teams from "./Team/Teams";
import "./Dash.css";
import { useHistory } from "react-router-dom";
import SubNav from "./subNav/SubNav";

const getCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth();
    return month +1;
};

const DashBoard = ({userInfo}) => {

    const [mySteps, setMySteps] = useState([]);
    const [month, setMonth] = useState(getCurrentDate());
    const [teamInfo, setTeamInfo] = useState({teamName: '', info: []});


    useEffect(() => {
        fetchMySteps();
    }, [userInfo]);

    useEffect(() => {
        fetchTeamMembers(userInfo.team)
    }, [userInfo.team]);

    async function fetchMySteps() {
        const personalData = await personalSteps(userInfo.email);
        setMySteps(personalData.stepInfoList)
    }

    async function fetchTeamMembers() {
        const team = await teamMembers(userInfo.team);
        setTeamInfo(team);
    }

    return (

        <div className="dashPage">
            <SubNav/>
        <div className="dashContainer">
                <h1>DashBoard</h1>
                <div className="fetchedInfo">
                    <div className="dashBoard">
                        <div className="card">
                            <Teams teamInfo={teamInfo} month={month}/>
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
                    <StepTracker fetchMySteps={fetchMySteps} userInfo={userInfo} fetchTeamMembers={fetchTeamMembers}/>
                </div>
            </div>
        </div>
    )
};

export default DashBoard;