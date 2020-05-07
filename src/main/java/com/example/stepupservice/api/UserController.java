package com.example.stepupservice.api;


import com.example.stepupservice.models.PersonalData;
import com.example.stepupservice.models.UserInfo;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<UserInfo> login(@RequestBody UserRequest userRequest) throws IOException, ParseException {

        JSONParser parser = new JSONParser();

        UserInfo userInfo = new UserInfo();
        try(FileReader fileReader = new FileReader("src/main/resources/userInformation.json")) {
            Object obj = parser.parse(fileReader);

            JSONArray users = (JSONArray) obj;
            users.forEach(user -> {
                JSONObject jsonUser = (JSONObject) user;
                if(jsonUser.get("email").equals(userRequest.getEmail())) {
                    String email = (String)jsonUser.get("email");
                    String team = (String)jsonUser.get("team");

                    userInfo.setEmail(email);
                    userInfo.setTeam(team);

                }

            });
          //  if (users.toString().contains("\"email\":\"" + userRequest.getEmail() + "\"")) {
            //    return ResponseEntity.ok(new UserInfo(userRequest.getEmail()));
            //}
        }

        return ResponseEntity.ok(userInfo);
    }

    @GetMapping("/getSteps/{email}")
    public ResponseEntity<PersonalStepInfo> getSteps(@PathVariable("email") String email) throws IOException {
        JSONParser parser = new JSONParser();

        try (FileReader fileReader = new FileReader("src/main/resources/personalData.json")) {
            Object obj = parser.parse(fileReader);

            JSONArray users = (JSONArray) obj;


            List<StepInfo> stepInfo = new ArrayList<>();
            users.forEach(user -> {
                JSONObject jsonUser = (JSONObject) user;
                if(jsonUser.get("email").equals(email)) {
                    String steps = (String)jsonUser.get("steps");
                    String date = (String)jsonUser.get("date");
                    stepInfo.add(new StepInfo(steps, date));
                }
            });
            return ResponseEntity.ok(new PersonalStepInfo(stepInfo));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(null);
    }

        @PostMapping("/createUser")
    public ResponseEntity<Void> createUser(@RequestBody CreateUserRequest userRequest) throws IOException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", userRequest.getEmail());
        jsonObject.put("password", userRequest.getPassword());
        jsonObject.put("firstname", userRequest.getFirstname());
        jsonObject.put("lastname", userRequest.getLastname());
        jsonObject.put("team", userRequest.getTeam());

        JSONParser parser = new JSONParser();


        try(FileReader fileReader = new FileReader("src/main/resources/userInformation.json")) {
            Object obj = parser.parse(fileReader);

            JSONArray users = (JSONArray)obj;
            //users.stream().filter(user -> (JSONObject)user.equals(users.) )
            if(!users.toString().contains("\"email\":\""+userRequest.getEmail()+"\"")){
                users.add(jsonObject);
            }



            FileWriter fileWriter = new FileWriter("src/main/resources/userInformation.json");

            fileWriter.write(users.toJSONString());
            fileWriter.flush();

        } catch(ParseException ex) {
            log.info(ex.toString());
        }
        return ResponseEntity.ok(null);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> save(@RequestBody PersonalData personalData) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email", personalData.getEmail());
        jsonObject.put("steps", personalData.getSteps());
        jsonObject.put("date", personalData.getDate());

        JSONParser parser = new JSONParser();

        try(FileReader fileReader = new FileReader("src/main/resources/personalData.json")){
            //hämta från fil
            Object obj = parser.parse(fileReader);

            //skapa array
            JSONArray users = (JSONArray)obj;

            users.add(jsonObject);

            FileWriter fileWriter = new FileWriter("src/main/resources/personalData.json");

            fileWriter.write(users.toJSONString());
            fileWriter.flush();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(null);

    }
}
