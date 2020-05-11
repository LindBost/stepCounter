package com.example.stepupservice.api.DTOs;

import com.example.stepupservice.api.StepInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Singular;

import java.util.List;

@Getter
@Setter
@Builder(toBuilder = true)
public class SaveUserStepInfo {

    private String email;
    @Singular
    private List<StepInfo> stepInfos;
}
