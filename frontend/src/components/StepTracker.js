import React, {useState} from 'react';
import {login, updateUserSteps} from "../service/UserService";
import DatePicker from "react-datepicker/es";


const StepTracker = ({userInfo, fetchMySteps}) => {

    const [steps, setSteps] = useState('');
    const [date, setDate] = useState(null);

    const handleSteps = async () => {

        const personalData = {
            email: userInfo.email,
            steps: steps,
            date: date
        };

        await updateUserSteps(personalData);
        fetchMySteps();
    };

    return (
        <>
            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
            <button onClick={handleSteps}> Update your information </button>
        </>
    )
};

export default StepTracker;