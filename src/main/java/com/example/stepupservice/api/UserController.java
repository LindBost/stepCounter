package com.example.stepupservice.api;


import com.example.stepupservice.models.PersonalData;
import com.example.stepupservice.models.UserInfo;
import com.example.stepupservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<UserInfo> login(@RequestBody UserRequest userRequest) {
        UserInfo userInfo = userRepository.login(userRequest);
        return ResponseEntity.ok(userInfo);
    }

    @GetMapping("/getSteps/{email}")
    public ResponseEntity<PersonalStepInfo> getSteps(@PathVariable("email") String email) {
        PersonalStepInfo stepsForUser = userRepository.getStepsForUser(email);
        return ResponseEntity.ok(stepsForUser);
    }

    @PostMapping("/createUser")
    public HttpStatus createUser(@RequestBody CreateUserRequest userRequest) {
            boolean createdUserSuccess = userRepository.createUser(userRequest);

            return createdUserSuccess ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }

    @PostMapping("/save")
    public HttpStatus save(@RequestBody PersonalData personalData) {
        boolean saveStepsSuccess = userRepository.saveStepsForUser(personalData);
        return saveStepsSuccess ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }
}
