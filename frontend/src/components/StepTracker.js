import React, {useState} from 'react';
import DatePicker from "react-datepicker/es";


const StepTracker = (props) => {

    const [steps, setSteps] = useState('');
    const [date, setDate] = useState(null);

    const handleSteps = () => {

        const personalData = {
            steps: steps,
            date: date
        };

    };

    return (
        <>
            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
            <button onClick={handleSteps}/>
        </>
    )
};

export default StepTracker;