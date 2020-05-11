package com.example.stepupservice.repository;

import com.example.stepupservice.api.CreateUserRequest;
import com.example.stepupservice.api.DTOs.SaveUserStepInfo;
import com.example.stepupservice.api.PersonalStepInfo;
import com.example.stepupservice.api.StepInfo;
import com.example.stepupservice.api.UserRequest;
import com.example.stepupservice.models.PersonalData;
import com.example.stepupservice.models.PersonalDataDb;
import com.example.stepupservice.models.UserInfo;
import com.example.stepupservice.utils.FileUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class StepRepository
{
    private FileUtil fileUtil;
    private String userInformationUrl = "src/main/resources/userInformation.json";
    private String personalDataUrl = "src/main/resources/personalData.json";

    public StepRepository(FileUtil fileUtil) {
        this.fileUtil = fileUtil;
    }

    public boolean saveStepsForUser(PersonalData personalData) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", personalData.getEmail());
        jsonObject.put("steps", personalData.getSteps());
        jsonObject.put("date", personalData.getDate());
        jsonObject.put("name", personalData.getName());

        JSONArray personalUserData = fileUtil.readFile(personalDataUrl);
        personalUserData.add(jsonObject);

        boolean success = fileUtil.writeFile(personalDataUrl, personalUserData);
        return success;
    }

    public boolean saveUserSteps(SaveUserStepInfo saveUserStepInfo) {
        JSONArray userSteps = fileUtil.readFile(personalDataUrl);
        String jsonString = userSteps.toJSONString();

        List<StepInfo> stepInfos = saveUserStepInfo.getStepInfos();
        String userEmail = saveUserStepInfo.getEmail();




        try {
            List<PersonalDataDb> list = new ObjectMapper().readValue(jsonString, new TypeReference<>() {
            });


            stepInfos.forEach(stepInfo -> {
                String date = stepInfo.getDate();
                String steps = stepInfo.getSteps();




                PersonalDataDb infoToAdd = PersonalDataDb.builder()
                        .date(date)
                        .email(userEmail)
                        .steps(steps)
                        .build();
                list.add(infoToAdd);

            });


            list.stream().map(personalDataDb -> {
                String date = personalDataDb.getDate();
                String email = personalDataDb.getEmail();
                StepInfo stepInfoFounded = stepInfos.stream().filter(stepInfo -> stepInfo.getDate().equals(date) && userEmail.equals(email))
                        .findFirst().orElse(null);

                if(stepInfoFounded != null) {
                    return personalDataDb.toBuilder()
                            .steps(stepInfoFounded.getSteps())
                            .build();
                }
                return personalDataDb;
            }).collect(Collectors.toList());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        return true;
    }
}
