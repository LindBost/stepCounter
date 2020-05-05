import React, {useState} from 'react';
import {login} from "../service/UserService";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(email, password);
    };

    return (
        <div>
            <p>Logga in</p>
            <input placeholder="Email" className="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="password" className="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={handleLogin}>
                login
            </button>
        </div>
    )
};

export default Login;
