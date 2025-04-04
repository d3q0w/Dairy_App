//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.assignment.DairyApp.controller;

import com.assignment.DairyApp.dto.LoginRequest;
import com.assignment.DairyApp.dto.Response;
import com.assignment.DairyApp.entity.User;
import com.assignment.DairyApp.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/auth"})
public class AuthController {
    @Autowired
    private IUserService userService;

    public AuthController() {
    }

    @PostMapping({"/register"})
    public ResponseEntity<Response> register(@RequestBody User user) {
        Response response = this.userService.register(user);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PostMapping({"/login"})
    public ResponseEntity<Response> login(@RequestBody LoginRequest loginRequest) {
        Response response = this.userService.login(loginRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
