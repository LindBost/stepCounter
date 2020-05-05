import React from 'react';


const DashBoard = () => {


    const handleUpdate = () => {
        console.log("laalal")
    }

    return (
        <div>
            <Teams/>
            <Individual/>

            <button onClick={handleUpdate}>
                Uppdate your information
            </button>
        </div>

    )
};

export default DashBoard;