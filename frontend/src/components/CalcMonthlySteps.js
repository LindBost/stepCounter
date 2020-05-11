import React,{useEffect, useState} from 'react';
import "./Component.css";

const CalcMonthlySteps = ({mySteps, month, setMonth}) => {



    const [steps,setSteps] = useState();

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

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[month -1];

    return(
        <div className="changeMonth">
            <button onClick={prevMonth}>prev month</button>
            <p>{steps} on {monthName}</p>
            <button onClick={nextMonth}>next month</button>

        </div>
    )
};

export default CalcMonthlySteps;