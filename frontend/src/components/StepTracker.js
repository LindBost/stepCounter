import React, {useState} from 'react';
import {login, saveUserSteps, updateUserSteps} from "../service/UserService";
import DatePicker, {registerLocale} from "react-datepicker";
import sv from "date-fns/locale/sv"; // the locale you want
import format from "date-fns/format";
import GoogleAPI from "../GoogleFit/googleApi";

registerLocale("sv", sv);



const StepTracker = ({userInfo, fetchMySteps, mySteps, fetchTeamMembers}) => {

    const [steps, setSteps] = useState('');
    const [date, setDate] = useState(null);

    const test = (date) => {
        setDate(format(date, "yyyy-MM-dd"));
    }

    const handleSteps = async () => {
        const personalData = {
            email: userInfo.email,
            steps: steps,
            date: date,
            name: userInfo.name
        };
        await updateUserSteps(personalData);
        fetchMySteps();
        fetchTeamMembers();
    };

    const saveSteps = async (userSteps) => {

        const saveUserStepInfo = {
            email: userInfo.email,
            stepInfos: userSteps
        };

        console.log(saveUserStepInfo);
        await saveUserSteps(saveUserStepInfo)
        fetchMySteps();
    };

    return (
        <>
            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker locale={sv} selected={Date.parse(date)} onChange={test} dateFormat="yyyy-MM-dd"/>
            <button onClick={handleSteps}> Update your information</button>
            <GoogleAPI saveSteps={saveSteps}/>
        </>
    )
};

export default StepTracker;