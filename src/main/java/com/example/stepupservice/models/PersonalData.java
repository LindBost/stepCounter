package com.example.stepupservice.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonalData {

    private String email;
    private String steps;
    private String date;

    public PersonalData(String email, String steps, String date) {
        this.email = email;
        this.steps = steps;
        this.date = date;
    }
}
