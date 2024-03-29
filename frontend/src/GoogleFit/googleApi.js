import { GoogleLogin } from 'react-google-login';
import React from "react";
import axios from "axios";
import format from "date-fns/format";

const clientId = "146490553867-4qraof585vmpt92jvhib0rpd88se4cla.apps.googleusercontent.com"

function GoogleAPI({saveSteps, fetchTeamMembers, fetchMySteps}) {

    const saveStepsFromGoogleAPI = async(steps) => {

        let userSteps = steps.map(step => {
            let date = new Date(parseInt(step.startTimeMillis));
            let totalSteps = 0;
            step.dataset.map(data => {
                data.point.map(p => {
                    p.value.map(v => {
                        totalSteps += v.intVal;
                    })
                })
            });
            return {
                date: format(date, "yyyy-MM-dd"),
                steps: totalSteps
            }
        });

        await saveSteps(userSteps)
        fetchTeamMembers();

    }



    const responseGoogle = async (response) => {
        const token = response.accessToken;
        console.log("token " + token)
        try {
            const now = new Date();
            const startTime = new Date();

            if(now.getMonth() === 1){
               startTime.setMonth(12);
            } else {
                startTime.setMonth(now.getMonth() -1);
            }
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
                    "startTimeMillis": startTime.getTime(),
                    "endTimeMillis": now.getTime()
                },
            });
            console.log(Date.now())
            const steps = result.data.bucket;
            saveStepsFromGoogleAPI(steps);
        } catch (e) {
            console.log(e);
        }
    };



    return(
        <GoogleLogin
            clientId={clientId}
            buttonText="Fetch Steps"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            scope={'https://www.googleapis.com/auth/fitness.activity.read'}
        />
    )
}

export default GoogleAPI;
