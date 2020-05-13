import React from 'react';
import '../DashBoardMap/Dash.css';
import '../DashBoardMap/Team/Team.css';

const Leaderboard = ({teams, month}) => {

    if (!teams) {
        return null;
    }

    const getTeamStepsForMonth = team => {
        const stepInfos = teams[team].flatMap(teamMember => teamMember.stepInfos);
        const stepInfosInMonth = stepInfos.filter(stepInfo => new Date(stepInfo.date).getMonth() + 1 === month);
        const totalSteps = stepInfosInMonth.map(stepInfo => parseInt(stepInfo.steps)).reduce((prev, curr) => curr + prev, 0);
        return totalSteps;
    };

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month - 1];

    const getTeamSteps = () => {
        const teamSteps = Object.keys(teams).map(team => {
            return {
                teamName: team,
                steps: getTeamStepsForMonth(team)
            }
        });

        teamSteps.sort(function (x, y) {
            return y.steps - x.steps;
        });

        return teamSteps;
    };

    return (
        <>
            {
                getTeamSteps().map((team, index) => {
                    return (
                        <div className='teamMember' key={team}>
                            <p>{`${team.teamName.toUpperCase()} ${team.steps}`}</p>
                            {(index === 0 && team.steps !== 0) && <p>{"🏆"}</p>}
                            {(index === (getTeamSteps().length -1) || team.steps === 0) && <p>🍔</p>}
                        </div>
                    )
                })
            }
            <h2>{monthName}</h2>
        </>
    )
};

export default Leaderboard;