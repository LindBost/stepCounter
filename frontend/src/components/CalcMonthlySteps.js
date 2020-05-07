import React,{useEffect, useState} from 'react';

const CalcMonthlySteps = ({mySteps}) => {

    const [steps,setSteps] = useState();

    useEffect(() => {
        calculateMonthlySteps(4);
    }, [mySteps])

    const calculateMonthlySteps = (month) => {
        const filteredSteps = mySteps.filter(step => {
            if(new Date(step.date).getMonth() + 1 === month) {
                return true;
            }
            return false;
        });

        const totalSteps = filteredSteps.reduce((acc,curr)=>acc+parseInt(curr.steps), 0)
        setSteps(totalSteps);

    };
    console.log(steps);
    return(
        <p></p>
    )
};

export default CalcMonthlySteps;