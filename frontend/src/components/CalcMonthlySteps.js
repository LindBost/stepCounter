import React,{useEffect, useState} from 'react';

const CalcMonthlySteps = ({mySteps}) => {

    const getCurrentDate = () => {
        const date = new Date();
        const month = date.getMonth();
        return month +1;
    };

    const [steps,setSteps] = useState();
    const [month, setMonth] = useState(getCurrentDate());

    useEffect(() => {
        calculateMonthlySteps(month);
    }, [mySteps, month])

    const calculateMonthlySteps = () => {
        const filteredSteps = mySteps.filter(step => {
            if(new Date(step.date).getMonth() + 1 === month) {
                return true;
            }
            return false;
        });

        const totalSteps = filteredSteps.reduce((acc,curr)=>acc+parseInt(curr.steps), 0);
        setSteps(totalSteps);

    };
    console.log(steps);


    const prevMonth = () => {
        if(month === 1){
            setMonth(12)
        } else {
            setMonth(month -1);
        }

    };

    const nextMonth = () => {
        if(month === 12){
            setMonth(1)
        } else {
            setMonth((month +1) % 13);
        }

    };



    console.log('date', month);

    return(
        <div>
            <button onClick={prevMonth}>prev month</button>
            <p>{steps}</p>
            <button onClick={nextMonth}>next month</button>

        </div>
    )
};

export default CalcMonthlySteps;