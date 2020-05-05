
export const login = async (email, password) =>  {
    const response = await fetch("http://localhost:8080/login", {method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify({email: email, password:password})});
    console.log(response);
};

export const createUser = async (email, password, firstname, lastname, team) => {
    const response = await fetch("http://localhost:8080/createUser", {method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify(
        {  email: email,
                password:password,
                firstname: firstname,
                lastname: lastname,
                team: team})});
    console.log(response);
}