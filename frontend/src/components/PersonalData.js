import React from 'react';



const PersonalData = ({mySteps, month}) => {

    return(
        <>

            {
                mySteps.filter(step => new Date(step.date).getMonth() + 1 === month)
                    .sort(function (x, y) {
                        return new Date(y.date).getTime() - new Date(x.date).getTime();
                    })
                    .map(step => <p>{step.date} : {step.steps}</p>)
            }
        </>
    )
};
export default PersonalData;
