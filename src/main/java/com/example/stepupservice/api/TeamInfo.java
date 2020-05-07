package com.example.stepupservice.api;

import com.example.stepupservice.models.UserStepInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class TeamInfo {

    private String teamName;

    private List<UserStepInfo> info;

}
