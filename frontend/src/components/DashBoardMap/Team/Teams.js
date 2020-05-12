import React, {useEffect, useState} from 'react';
import "./Team.css";

const Teams = ({teamInfo, month}) => {

    const getTeamMemberAndSteps = () => {
       return teamInfo.info.map(info => {
            return {
                name: info.name,
                steps: info.stepInfos.reduce((total, curr) => new Date(curr.date).getMonth() +1 === month ? total + parseInt(curr.steps) : total + 0, 0)
            }
        })
    };

    console.log(getTeamMemberAndSteps())

    return (
        <div className="teamContainer">
            <h2>{teamInfo.teamName}</h2>

                {getTeamMemberAndSteps().map( teamMember => {
                    return <div className="teamMember">{teamMember.name} : {teamMember.steps}</div>
                })}




        </div>
    )
};
export default Teams;
