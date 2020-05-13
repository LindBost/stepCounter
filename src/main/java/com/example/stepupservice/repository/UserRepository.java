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
import com.google.gson.Gson;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Repository;

import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository
{
    private FileUtil fileUtil;
    private String userInformationUrl = "src/main/resources/userInformation.json";
    private String personalDataUrl = "src/main/resources/personalData.json";

    public UserRepository(FileUtil fileUtil) {
        this.fileUtil = fileUtil;
    }

    public UserInfo login(UserRequest userRequest) {
        JSONArray users = fileUtil.readFile(userInformationUrl);

        UserInfo userInfo = new UserInfo();

        users.forEach(user -> {
            JSONObject jsonUser = (JSONObject)user;
            // TODO password validation
            if(jsonUser.get("email").equals(userRequest.getEmail())) {
                String email = (String)jsonUser.get("email");
                String team = (String)jsonUser.get("team");

                userInfo.setEmail(email);
                userInfo.setTeam(team);
            }

        });
        return userInfo;
    }

    public PersonalStepInfo getStepsForUser(String email) {

        JSONArray personalData = fileUtil.readFile(personalDataUrl);
        List<StepInfo> stepInfo = new ArrayList<>();

        personalData.forEach(data -> {
            JSONObject jsonUser = (JSONObject) data;
            if(jsonUser.get("email").equals(email)) {
                String steps = (String)jsonUser.get("steps");
                String date = (String)jsonUser.get("date");
                stepInfo.add(StepInfo.builder().steps(steps).date(date).build());
            }
        });

        return PersonalStepInfo.builder().stepInfoList(stepInfo).build();
    }

    public boolean createUser(CreateUserRequest createUserRequest) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", createUserRequest.getEmail());
        jsonObject.put("password", createUserRequest.getPassword());
        jsonObject.put("firstname", createUserRequest.getFirstname());
        jsonObject.put("lastname", createUserRequest.getLastname());
        jsonObject.put("team", createUserRequest.getTeam());


        JSONArray users = fileUtil.readFile(userInformationUrl);
        if(!users.toString().contains("\"email\":\""+createUserRequest.getEmail()+"\"")){
            users.add(jsonObject);

            return fileUtil.writeFile(userInformationUrl, users);
        }

        return false;
    }

    public boolean saveStepsForUser(PersonalData personalData) {
        JSONArray userSteps = fileUtil.readFile(personalDataUrl);
        String jsonString = userSteps.toJSONString();
        try {
            List<PersonalDataDb> list = new ObjectMapper().readValue(jsonString, new TypeReference<>() {});



            PersonalDataDb data = list.stream().filter(personalDataDb -> personalDataDb.getDate().equals(personalData.getDate())
                    && personalDataDb.getEmail().equals(personalData.getEmail())).findFirst().orElse(null);

            if (data != null) {
                data.setSteps(personalData.getSteps());
            } else {
                PersonalDataDb infoToAdd = PersonalDataDb.builder()
                        .date(personalData.getDate())
                        .email(personalData.getEmail())
                        .steps(personalData.getSteps())
                        .build();
                list.add(infoToAdd);
            }


            boolean success = fileUtil.writeFile(personalDataUrl, new Gson().toJson(list));
        } catch (JsonProcessingException e){
            e.printStackTrace();
        }

        return true;
    }

}
