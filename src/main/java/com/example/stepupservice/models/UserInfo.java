package com.example.stepupservice.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;

@Getter
@Setter
public class UserInfo {

    private String email;
    private String team;
    //private String id;


    public UserInfo(String email, String team) {
        this.email = email;
        this.team = team;
    }

    public UserInfo(){}
}
