package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {

    public UserRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    private String email;
    private String password;

}
