import React, {useEffect, useState} from 'react';
import {teamMembers} from '../../../service/UserService';
import "./Team.css";

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
        <div className="teamContainer">
            <h2>{team}</h2>

                {fetchedTeam.map( teamMember => {
                    return <div className="teamMember">{teamMember.name}</div>
                })}




        </div>
    )
};
export default Teams;
