
export const login = async (email, password) =>  {
    const response = await fetch("http://localhost:8080/login", {method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify({email: email, password:password})});
    return await response.json();
};

export const personalSteps = async (email) =>  {
    const response = await fetch(`http://localhost:8080/getSteps/${email}`, {method:'GET', headers: {'Content-Type': 'application/json'}});
    return await response.json();
};

export const teamMembers = async (name) =>  {
    const response = await fetch(`http://localhost:8080/getTeamMembers/${name}`, {method:'GET', headers: {'Content-Type': 'application/json'}});
    return await response.json();
};

export const createUser = async (user) => {
    const response = await fetch("http://localhost:8080/createUser", {method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify(user)})
    console.log(response);
};

export const updateUserSteps = async (personalData) => {
    const response = await fetch("http://localhost:8080/save" ,{method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify(personalData)})
    console.log(response);
};

export const saveUserSteps = async (personalData) => {
    const response = await fetch("http://localhost:8080/save-user-steps" ,{method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify(personalData)})
    console.log(response);
};