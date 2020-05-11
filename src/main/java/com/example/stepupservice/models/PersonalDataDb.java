package com.example.stepupservice.models;

import lombok.*;

@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class PersonalDataDb {

    private String email;
    private String steps;
    private String date;

}
