import React from "react";

export const login = async (email, password) =>  {
    const response = await fetch("localhost:8080/login", {METHOD:'POST', body:JSON.stringify({email: email, password:password})});
    console.log(response);
};
