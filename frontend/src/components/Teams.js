import React, {useEffect} from 'react';
import {teamMembers} from '../service/UserService';

const Teams = ({team}) => {


    useEffect(() => {
        fetchTeamMembers(team);
    }, [team])

    async function fetchTeamMembers(teamName) {
        const team = await teamMembers(teamName);
        console.log(team);
    }

    return (
        <div>
            <p>TEEEAAMSS</p>
            <p>{team}</p>
        </div>
    )
};
export default Teams;
