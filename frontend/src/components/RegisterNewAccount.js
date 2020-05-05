import React, {useState} from "react";


const RegisterNewAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        console.log("massa skit")
    };


    return (
        <div>
            <p>Registrera nytt konto</p>
            <input placeholder="Firstname" className="firstName" type="text" value={firstName}
                   onChange={(event) => setFirstName(event.target.value)}/>
            <input placeholder="Lastname" className="lastName" type="text" value={lastName}
                   onChange={(event) => setLastName(event.target.value)}/>
            <input placeholder="Email" className="email" type="text" value={email}
                   onChange={(event) => setEmail(event.target.value)}/>
                   <select>
                       <option value="sellery">Sellery</option>
                       <option value="tetris">Tetris</option>
                       <option value="raven">Raven</option>
                   </select>

            <div>
                <label htmlFor="approved">Approved</label>
                <input type="checkbox" id="approved" name="approved"/>

            </div>
            <button onClick={handleRegister}>
                skapa konto
            </button>
        </div>
    )
};

export default RegisterNewAccount;