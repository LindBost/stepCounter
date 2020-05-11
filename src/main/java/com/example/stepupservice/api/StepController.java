package com.example.stepupservice.api;

import com.example.stepupservice.api.DTOs.SaveUserStepInfo;
import com.example.stepupservice.repository.StepRepository;
import com.example.stepupservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "api")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class StepController {

    private StepRepository stepRepository;

    public StepController(StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    @PostMapping("/save-user-steps")
    public HttpStatus save(@RequestBody SaveUserStepInfo saveUserStepInfo) {
        boolean saveStepsSuccess = stepRepository.saveUserSteps(saveUserStepInfo);
        return saveStepsSuccess ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }
}
