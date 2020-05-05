package com.example.stepupservice.api;


import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody UserRequest userRequest) throws IOException {
        try {
            FileWriter fileWriter = new FileWriter("src/main/resources/userInformation.txt", true);
            fileWriter.write(userRequest.getEmail() + ":" + userRequest.getPassword() + "\n");
            fileWriter.close();

        } catch (IOException e) {
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
}
