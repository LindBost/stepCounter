import React, {useEffect, useState} from 'react';
import Leaderboard from './Leaderboard';
import {fetchTeams} from "../../service/UserService";

const LeaderboardPage = (props) => {

    const [teams, setTeams] = useState();

   const groupArrayBy = (array, key) => {
        return array.reduce((returnValue, item) => {
            (returnValue[item[key]] = returnValue[item[key]] || []).push(item);
            return returnValue;
        }, {});
    };

    useEffect(() => {
        fetchTeamsInfo();
    },[]);


    async function fetchTeamsInfo() {
        const fetchedTeams = await fetchTeams();
        const groupedTeam = groupArrayBy(fetchedTeams.info, 'team');
        setTeams(groupedTeam);
    }

    return <Leaderboard teams={teams}/>
};

export default LeaderboardPage;