import React from 'react';



const PersonalData = ({mySteps, month}) => {


    return(
        <>

            {
                mySteps.filter(step => new Date(step.date).getMonth() +1 === month)
                    .map(step => <p>{step.date} : {step.steps}</p>)
            }
        </>
    )
};
export default PersonalData;
