import React from 'react';



const PersonalData = ({mySteps, date, email}) => {
    const sumSteps = {}

    return(
        <>
            <p>personlig info och så</p>
            {
                mySteps.map(step => <p> {step.date} : {step.steps} </p>)
            }
        </>
    )
};
export default PersonalData;
