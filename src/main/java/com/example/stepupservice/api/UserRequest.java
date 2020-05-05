package com.example.stepupservice.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
  private String email;
  private String password;

  public UserRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

}
