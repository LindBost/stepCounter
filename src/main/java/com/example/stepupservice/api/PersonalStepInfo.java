package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PersonalStepInfo {

    List<StepInfo> stepInfoList;

    public PersonalStepInfo(List<StepInfo> stepInfoList) {
        this.stepInfoList = stepInfoList;
    }
}
