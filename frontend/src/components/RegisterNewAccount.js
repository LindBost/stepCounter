import React, {useState} from "react";
import {createUser} from "../service/UserService";


const RegisterNewAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [team, setTeam] = useState('');

    const handleRegister = () => {
        console.log("massa skit")
        const user = {
            firstname: firstName,
            lastname: lastName,
            password: password,
            email: email,
            team: team
        }
        createUser(user);
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
            <input placeholder="password" className="password" value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
                   <select onChange={(event) => setTeam(event.target.value)}>
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