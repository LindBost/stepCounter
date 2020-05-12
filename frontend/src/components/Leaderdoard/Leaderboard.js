import React from 'react';

const Leaderboard = ({teams}) => {

    console.log(teams);

    if(!teams) {
        return null;
    }

    return(
        <div>
            {
                Object.keys(teams).map(team => {
                    return <p>{team}</p>
                })
            }
        </div>
    )


}

export default Leaderboard;