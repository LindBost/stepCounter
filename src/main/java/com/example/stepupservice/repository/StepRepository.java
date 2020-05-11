package com.example.stepupservice.repository;

import com.example.stepupservice.api.DTOs.SaveUserStepInfo;
import com.example.stepupservice.api.StepInfo;
import com.example.stepupservice.models.PersonalDataDb;
import com.example.stepupservice.utils.FileUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.json.simple.JSONArray;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StepRepository
{
    private FileUtil fileUtil;
    private String personalDataUrl = "src/main/resources/personalData.json";

    public StepRepository(FileUtil fileUtil) {
        this.fileUtil = fileUtil;
    }

    public boolean saveUserSteps(SaveUserStepInfo saveUserStepInfo) {
        JSONArray userSteps = fileUtil.readFile(personalDataUrl);
        String jsonString = userSteps.toJSONString();

        List<StepInfo> stepInfos = saveUserStepInfo.getStepInfos();
        String userEmail = saveUserStepInfo.getEmail();

        try {
            List<PersonalDataDb> list = new ObjectMapper().readValue(jsonString, new TypeReference<>() {});

            stepInfos.forEach(stepInfo -> {
                String date = stepInfo.getDate();
                String steps = stepInfo.getSteps();

                PersonalDataDb data = list.stream().filter(personalDataDb -> personalDataDb.getDate().equals(stepInfo.getDate())
                && personalDataDb.getEmail().equals(userEmail)).findFirst().orElse(null);

                if (data != null) {
                    data.setSteps(stepInfo.getSteps());
                } else {
                    PersonalDataDb infoToAdd = PersonalDataDb.builder()
                            .date(date)
                            .email(userEmail)
                            .steps(steps)
                            .build();
                    list.add(infoToAdd);
                }

                fileUtil.writeFile(personalDataUrl, new Gson().toJson(list));
            });
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return true;
    }
}
