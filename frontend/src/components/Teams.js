import React, {useEffect, useState} from 'react';
import {teamMembers} from '../service/UserService';

const Teams = ({team}) => {

    const [fetchedTeam, setFetchedTeam] = useState([]);


    useEffect(() => {
        fetchTeamMembers(team);
    }, [team])

    async function fetchTeamMembers(teamName) {
        const team = await teamMembers(teamName);
        setFetchedTeam(team.info);
        console.log(team);
    }

    return (
        <div>
            <p>TEEEAAMSS</p>
            <p>{team}</p>
            {fetchedTeam.map( teamMember => {
                return <p>{teamMember.name}</p>
            })}
        </div>
    )
};
export default Teams;
