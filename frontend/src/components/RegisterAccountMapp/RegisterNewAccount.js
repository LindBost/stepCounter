import React, {useState} from "react";
import {createUser} from "../../service/UserService";
import "./RegisterNewAccountStyle.css"


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
            <h1>Registrera nytt konto</h1>
            <div className="registerCard">
                <form onSubmit={handleRegister} className="registerForm">

                    <h5>FirstName:</h5>
                    <input required className="firstName" placeholder="Firstname.."  type="text" value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                    <input required className="lastName" placeholder="Lastname"  type="text" value={lastName}
                           onChange={(event) => setLastName(event.target.value)}/>
                    <input required className="email" placeholder="Email"  type="email" value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input required className="password" placeholder="password"  value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <select required className="teamName" onChange={(event) => setTeam(event.target.value)}>
                        <option value="sellery">Sellery</option>
                        <option value="tetris">Tetris</option>
                        <option value="raven">Raven</option>
                    </select>
                    <div className="checky">
                        <label htmlFor="approved">Approved</label>
                        <input required type="checkbox" id="approved" name="approved"/>

                    </div>
                    <button >
                        skapa konto
                    </button>
                </form>

            </div>

        </div>
    )
};

export default RegisterNewAccount;