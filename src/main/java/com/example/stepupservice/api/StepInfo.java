package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StepInfo {

    private String steps;
    private String date;
    private String name;

    public StepInfo(String steps, String date) {
        this.steps = steps;
        this.date = date;
    }

    public StepInfo(String steps, String date, String name) {
        this.steps = steps;
        this.date = date;
        this.name = name;
    }
}
