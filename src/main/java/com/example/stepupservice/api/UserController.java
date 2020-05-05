package com.example.stepupservice.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody UserRequest userRequest) throws IOException {
      try {
        FileWriter fileWriter = new FileWriter("src/main/resources/userInformation.txt" , true);
        fileWriter.write(userRequest.getEmail() + ":" + userRequest.getPassword() + "\n" );
        fileWriter.close();

      } catch (IOException e) {
      }

      return ResponseEntity.ok(null);


    }

  //Write to txt file
}
