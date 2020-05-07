package com.example.stepupservice.api;

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
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class TeamController {

    @GetMapping("/getTeamMembers/{name}")
    public ResponseEntity<TeamInfo> getTeamMembers(@PathVariable("name") String teamName) throws IOException {
        JSONParser parser = new JSONParser();

        try (FileReader fileReader = new FileReader("src/main/resources/personalData.json")) {
            Object obj = parser.parse(fileReader);
            JSONArray users = (JSONArray) obj;

            List<StepInfo> stepInfo = new ArrayList<>();
            users.forEach(user -> {
                JSONObject jsonUser = (JSONObject) user;
                if(jsonUser.get("team").equals(teamName)) {
                    String steps = (String)jsonUser.get("steps");
                    String date = (String)jsonUser.get("date");
                    String name = (String)jsonUser.get("name");
                    stepInfo.add(new StepInfo(steps, date, name));
                }
            });
            return ResponseEntity.ok(new TeamInfo(stepInfo));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(null);
    }


}
