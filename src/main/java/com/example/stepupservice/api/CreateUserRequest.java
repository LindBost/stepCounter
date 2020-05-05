package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRequest {

    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private String team;

    public CreateUserRequest(String email, String password, String firstname, String lastname, String team) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.team = team;
    }
}
