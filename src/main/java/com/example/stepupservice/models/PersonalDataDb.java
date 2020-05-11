package com.example.stepupservice.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder(toBuilder = true)
public class PersonalDataDb {

    private String email;
    private String steps;
    private String date;

}
