package com.example.stepupservice.api;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
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
        JSONArray jsonArray = new JSONArray();
        jsonArray.add(jsonObject);
        FileReader fileReader = new FileReader("src/main/resources/userInformation.json");
        Object obj = fileReader
        try {
            FileWriter fileWriter = new FileWriter("src/main/resources/userInformation.json", true);

            fileWriter.write(jsonArray.toJSONString());
            fileWriter.close();

        } catch (IOException e) {
        }

        return ResponseEntity.ok(null);
    }
}
