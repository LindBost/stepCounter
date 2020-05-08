import React, {useState} from 'react';
import {login, updateUserSteps} from "../service/UserService";
import DatePicker, {registerLocale} from "react-datepicker";
import sv from "date-fns/locale/sv"; // the locale you want
import moment from 'moment';
import format from "date-fns/format";
import axios from "axios";
import {GoogleLogin} from "react-google-login";

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
            date: date,
            name: userInfo.name
        };
        console.log('PERS', personalData)
        await updateUserSteps(personalData);
        fetchMySteps();
    };
    const responseGoogle = async (response) => {
        console.log(response);
        const token = response.accessToken;
        console.log('token', token);

        try {
            const result = await axios({
                method: "POST",
                headers: {
                    authorization: "Bearer " + token
                },
                "Content-type": "application/json",
                url: `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
                data: {
                    "aggregateBy": [{
                        "dataTypeName": "com.google.step_count.delta",
                        "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }],
                    "bucketByTime": {"durationMillis": 86400000},
                    "startTimeMillis": 1438705622000,
                    "endTimeMillis": 1439310422000
                },
            });
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <>

            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker locale={sv} selected={Date.parse(date)} onChange={test} dateFormat="yyyy-MM-dd"/>
            <button onClick={handleSteps}> Update your information</button>

            <GoogleLogin
                clientId="146490553867-4qraof585vmpt92jvhib0rpd88se4cla.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                scope={'https://www.googleapis.com/auth/fitness.activity.read'}
            />
        </>
    )
};

export default StepTracker;