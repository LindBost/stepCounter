import React, {useEffect, useState} from 'react';
import Leaderboard from './Leaderboard';
import {fetchTeams} from "../../service/UserService";
import SubNav from "../DashBoardMap/subNav/SubNav.js";

const getCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth();
    return month + 1;
};

const LeaderboardPage = ({setUserInfo}) => {

    const [teams, setTeams] = useState();
    const [month, setMonth] = useState(getCurrentDate());

    const groupArrayBy = (array, key) => {
        return array.reduce((returnValue, item) => {
            (returnValue[item[key]] = returnValue[item[key]] || []).push(item);
            return returnValue;
        }, {});
    };

    useEffect(() => {
        fetchTeamsInfo();
    }, []);


    async function fetchTeamsInfo() {
        const fetchedTeams = await fetchTeams();
        const groupedTeam = groupArrayBy(fetchedTeams.info, 'team');
        setTeams(groupedTeam);
    }

    const prevMonth = () => {
        if(month === 1){
            setMonth(12)
        } else {
            setMonth(month -1);
        }

    };

    const nextMonth = () => {
        if(month === 12){
            setMonth(1)
        } else {
            setMonth((month +1) % 13);
        }
    };

    return (
        <>
            <SubNav setUserInfo={setUserInfo}/>
            <Leaderboard teams={teams} month={month}/>
            <button onClick={prevMonth}>prev month</button>
            <button onClick={nextMonth}>next month</button>

        </>
    )
};

export default LeaderboardPage;