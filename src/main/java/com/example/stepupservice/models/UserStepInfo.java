package com.example.stepupservice.models;

import com.example.stepupservice.api.StepInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Singular;

import java.util.List;

@Getter
@Setter
@Builder(toBuilder = true)
public class UserStepInfo {

    private String name;
    private String email;
    private String team;
    @Singular
    private List<StepInfo> stepInfos;
}
