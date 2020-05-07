package com.example.stepupservice.api;

import com.example.stepupservice.models.UserStepInfo;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class TeamController {

    @GetMapping("/getTeamMembers/{name}")
    public ResponseEntity<TeamInfo> getTeamMembers(@PathVariable("name") String teamName) throws IOException {
        JSONParser parser = new JSONParser();

        List<UserStepInfo> emailsAndNamesInTeam = getUserStepInfosInTeam(teamName);
        Map<String, List<StepInfo>> map = new HashMap<>();

        try (FileReader fileReader = new FileReader("src/main/resources/personalData.json")) {
            Object obj = parser.parse(fileReader);
            JSONArray users = (JSONArray) obj;

            users.forEach(user -> {
                JSONObject jsonUser = (JSONObject) user;
                String email = (String)jsonUser.get("email");

                List<StepInfo> stepInfos = map.computeIfAbsent(email, value -> new ArrayList<>());

                StepInfo info = StepInfo.builder()
                        .steps((String)jsonUser.get("steps"))
                        .date((String)jsonUser.get("date"))
                        .build();

                stepInfos.add(info);
                map.put(email, stepInfos);
            });

            List<UserStepInfo> allEmailsAndNames = emailsAndNamesInTeam.stream().map(emailsAndNames -> emailsAndNames.toBuilder()
                    .stepInfos(map.getOrDefault(emailsAndNames.getEmail(), Collections.emptyList()))
                    .build()).collect(Collectors.toList());

            return ResponseEntity.ok(new TeamInfo(teamName, allEmailsAndNames));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(null);
    }

    public List<UserStepInfo> getUserStepInfosInTeam(String teamName) {
        List<UserStepInfo> stepInfos = new ArrayList<>();

        JSONParser parser = new JSONParser();

        try (FileReader fileReader = new FileReader("src/main/resources/userInformation.json")) {
            Object obj = parser.parse(fileReader);
            JSONArray users = (JSONArray) obj;

            users.forEach(user -> {
                JSONObject jsonUser = (JSONObject) user;
                if(jsonUser.get("team").equals(teamName)) {
                    String email = (String)jsonUser.get("email");
                    UserStepInfo userStepInfo = UserStepInfo.builder()
                            .email(email)
                            .name((String)jsonUser.get("firstname"))
                            .build();

                    stepInfos.add(userStepInfo);
                }
            });
        } catch (ParseException | IOException e) {
            e.printStackTrace();
        }

        return stepInfos;
    }


}
