import React from 'react';



const PersonalData = ({mySteps, date, email}) => {
    const sumSteps = {}

    return(
        <>
            <h2> Your steps:</h2>
            {
                mySteps.map(step => <p> {step.date} : {step.steps} </p>)
            }
        </>
    )
};
export default PersonalData;
