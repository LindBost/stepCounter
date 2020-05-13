import React, {useState} from 'react';
import {login, personalSteps} from "../service/UserService";
import { useHistory } from "react-router-dom";
import {NotificationManager} from 'react-notifications';

const Login = ({setUserInfo}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin  = async () => {
        const result = await login(email, password);
        if(result.status === 500){
            NotificationManager.error('Login failed', 'Error');
        } else {
            setUserInfo({email: result.email, isLoggedIn: true, team: result.team});
            history.push('/dashboard');
        }
    };

    return (
        <div>
            <h2>Logga in</h2>
            <input placeholder="Email" className="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="password" className="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={ handleLogin } disabled={!password}>
                login
            </button>
            <button onClick={() => history.push('/register-new-account')}>registrera nytt konto</button>
        </div>
    )
};

export default Login;
