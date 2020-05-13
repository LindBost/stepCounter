import React from 'react';

const Leaderboard = ({teams, month}) => {

    if (!teams) {
        return null;
    }

    const getTeamStepsForMonth = (team) => {
        const stepInfos = teams[team].flatMap(teamMember => teamMember.stepInfos);
        const stepInfosInMonth = stepInfos.filter(stepInfo => new Date(stepInfo.date).getMonth() + 1 === month);
        const totalSteps = stepInfosInMonth.map(stepInfo => parseInt(stepInfo.steps)).reduce((prev, curr) => curr + prev, 0);
        return totalSteps;
    };

    return(
        <div>
            {
                Object.keys(teams).map(team => {
                    return (
                        <div key={team}>
                            <p>{team}</p>
                            <p>{getTeamStepsForMonth(team)}</p>
                        </div>
                    )
                })
            }
            <p>{month}</p>
        </div>
    )
};

export default Leaderboard;