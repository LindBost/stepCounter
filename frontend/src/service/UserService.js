
export const login = async (email, password) =>  {
    const response = await fetch("http://localhost:8080/login", {method:'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify({email: email, password:password})});
    console.log(response);
};
