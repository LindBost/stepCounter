package com.example.stepupservice.api;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder(toBuilder = true)
public class StepInfo {

    private String steps;
    private String date;


}
