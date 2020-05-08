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

            <h2>{team}</h2>
            {fetchedTeam.map( teamMember => {
                return <p>{teamMember.name}</p>
            })}
        </div>
    )
};
export default Teams;
