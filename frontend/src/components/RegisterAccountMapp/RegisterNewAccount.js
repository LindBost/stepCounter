import React, {useState} from "react";
import {createUser} from "../../service/UserService";
import "./RegisterNewAccountStyle.css"
import { NotificationManager} from 'react-notifications';


const RegisterNewAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [team, setTeam] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();
        const user = {
            firstname: firstName,
            lastname: lastName,
            password: password,
            email: email,
            team: team
        };
        const response = await createUser(user);

        if(response === 'OK'){
            NotificationManager.success('woho', 'användare skapad');
        } else {
            NotificationManager.error('Buu', 'något gick fel');
        }
    };


    return (
            <div>
                <h1>Registrera nytt konto</h1>
                <div className="flexyBox">
                    <div className="registerCard">
                        <form onSubmit={handleRegister} className="registerForm">
                            <div className="userInfo">
                                <h5>FirstName: </h5>
                                <input required className="firstName" placeholder="Firstname.."  type="text" value={firstName}
                                       onChange={(event) => setFirstName(event.target.value)}/>
                            </div>
                            <div className="userInfo">
                                <h5>LastName: </h5>
                                <input required className="lastName" placeholder="Lastname"  type="text" value={lastName}
                                       onChange={(event) => setLastName(event.target.value)}/>
                            </div>
                            <div className="userInfo">
                                <h5>Email: </h5>
                                <input required className="email" placeholder="Email"  type="email" value={email}
                                       onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className="userInfo">
                                <h5>FirstName: </h5>
                                <input required className="password" placeholder="password"  value={password}
                                       onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <div className="userInfo"><h5>Your Team :</h5>
                                <select required className="teamName" onChange={(event) => setTeam(event.target.value)}>
                                    <option value="sellery">Sellery</option>
                                    <option value="tetris">Tetris</option>
                                    <option value="raven">Raven</option>
                                </select>
                            </div>
                            <div className="userInfo">
                                <div className="checky">
                                    <input required type="checkbox" id="approved" name="approved"/>
                                    <label htmlFor="approved">I Approve that the application will share my steps with anyone that wan't to see!</label>
                                </div>
                            </div>

                            <button>
                                skapa konto
                            </button>
                        </form>

                    </div>
            </div>
        </div>

    )
};

export default RegisterNewAccount;