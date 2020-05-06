import React from 'react';
import Teams from "./Teams";
import Induvidual from './Induvidual';


const DashBoard = () => {


    const handleUpdate = () => {
        console.log("laalal")
    }

    return (
        <div>
            <Teams/>
            <Induvidual/>
            <p>FAAAAAAAN</p>
            <button onClick={handleUpdate}>
                Uppdate your information
            </button>
        </div>

    )
};

export default DashBoard;