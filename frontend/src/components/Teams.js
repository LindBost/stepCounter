import React from 'react';
import {teamMembers} from '../service/UserService';

const Teams = ({teamName}) => {

    async function fetchTeamMembers() {
        const team = await teamMembers(teamName);
        console.log(team);
    }


    fetchTeamMembers();

    return (
        <div>
            <p>TEEEAAMSS</p>
            <p>{teamName}</p>
        </div>
    )
};
export default Teams;
