import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    clientId="146490553867-4qraof585vmpt92jvhib0rpd88se4cla.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);