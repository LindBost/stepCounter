package com.example.stepupservice.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfo {

    private String email;
    //private String id;


    public UserInfo(String email) {
        this.email = email;
    }
}
