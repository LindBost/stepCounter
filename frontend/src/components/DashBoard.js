import React from 'react';
import Teams from "./Teams";
import Induvidual from './Induvidual';
import StepTracker from "./StepTracker";


const DashBoard = ({userInfo}) => {


    const handleUpdate = () => {
        console.log('blalala', userInfo);
    }

    return (
        <div>
            {/*<Teams/>*/}
            {/*<Induvidual/>*/}
            <StepTracker userInfo={userInfo}/>

            <button onClick={handleUpdate}>
                Uppdate your information
            </button>



            <p>FAAAAAAAN</p>

        </div>

    )
};

export default DashBoard;