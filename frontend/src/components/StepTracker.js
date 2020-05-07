import React, {useState} from 'react';
import {login, updateUserSteps} from "../service/UserService";
import DatePicker, { registerLocale } from "react-datepicker";
import sv from "date-fns/locale/sv"; // the locale you want
import moment from 'moment';
import format from "date-fns/format";
registerLocale("sv", sv);


const StepTracker = ({userInfo, fetchMySteps, mySteps}) => {

    const [steps, setSteps] = useState('');
    const [date, setDate] = useState(null);

    const test = (date) => {

        setDate(format(date, "yyyy-MM-dd"));

    }
    const handleSteps = async () => {

        const personalData = {
            email: userInfo.email,
            steps: steps,
            date: date
        };
        console.log('PERS', personalData)
        await updateUserSteps(personalData);
        fetchMySteps();
    };

    const calculateMonthlySteps = (month) => {
        const filteredSteps = mySteps.filter(step => {
            if(new Date(step.date).getMonth() + 1 === month) {
                return true;
            }
            return false;
        });
        console.log(filteredSteps);
    };


    return (
        <>
            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker locale={sv} selected={Date.parse(date)} onChange={test} dateFormat="yyyy-MM-dd"/>
            <button onClick={handleSteps}> Update your information </button>
            <button onClick={() => calculateMonthlySteps(4)}> calculate</button>
        </>
    )
};

export default StepTracker;