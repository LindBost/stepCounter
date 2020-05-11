package com.example.stepupservice.api;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Singular;

import java.util.List;

@Getter
@Setter
@Builder(toBuilder = true)
public class PersonalStepInfo {

    List<StepInfo> stepInfoList;

}
