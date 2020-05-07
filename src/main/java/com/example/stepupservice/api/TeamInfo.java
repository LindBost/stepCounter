package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TeamInfo {

    private List<StepInfo> info;

    public TeamInfo(List<StepInfo> info) {
        this.info = info;
    }
}
