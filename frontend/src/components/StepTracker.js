import React, {useState} from 'react';

const StepTracker = (props) => {

    const [steps, setSteps] = useState('');
    const [date, setDate] = useState(null);

    const handleSteps = () => {

    };

    return (
        <>
            <input placeholder="Steps" type="text" value={steps} onChange={(event) => setSteps(event.target.value)}/>
            <DatePicker selected={date} onChange={(event) => setDate(event.target.value)} />
            <button onClick={handleSteps}/>
        </>
    )
};

export default StepTracker;