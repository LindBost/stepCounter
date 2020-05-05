import React, {useState} from 'react';
import {login} from "../service/UserService";


const Login = () => {
        const [Email, setEmail] = useState('');
        const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("tadaa")
        login(Email, password);

    };

    return (
        <div>
            <p>Logga in</p>
            <input placeholder="Email" className="username" type="text" value={Email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="password" className="password" type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={handleLogin}>
                login
            </button>
        </div>
    )
};

export default Login;