package com.example.stepupservice.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonalData {

    private String email;
    private String steps;
    private String date;
    private String name;

    public PersonalData(String email, String steps, String date, String name) {
        this.email = email;
        this.steps = steps;
        this.date = date;
        this.name = name;
    }
}
