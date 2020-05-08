import React, {useState} from 'react';
import {login, personalSteps} from "../service/UserService";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const Login = ({setUserInfo}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

    const handleLogin  = async () => {
        const result = await login(email, password);
        setUserInfo({email: result.email, isLoggedIn: true, team: result.team});
        history.push('/dashboard');

    };

    const responseGoogle = (response) => {
        console.log(response);
        const token = response.accessToken;
        console.log('token', token);
    }

    return (
        <div>
            <p>Logga in</p>
            <input placeholder="Email" className="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="password" className="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={ handleLogin }>
                login
            </button>
            <button onClick={() => history.push('/register-new-account')}>registrera nytt konto</button>

            <GoogleLogin
                clientId="146490553867-4qraof585vmpt92jvhib0rpd88se4cla.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
};

export default Login;
