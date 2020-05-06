package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StepInfo {

    private String steps;
    private String date;

    public StepInfo(String steps, String date) {
        this.steps = steps;
        this.date = date;
    }
}
