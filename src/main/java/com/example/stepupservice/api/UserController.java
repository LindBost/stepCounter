package com.example.stepupservice.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(null);
    }
}
