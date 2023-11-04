package com.sritel.authentication;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/authenticate")
@RequiredArgsConstructor
public class AuthenticationController {

    // Predefined set of usernames and passwords
    private static final Map<String, String> userCredentials = new HashMap<>();

    static {
        userCredentials.put("user1", "password1");
        userCredentials.put("user2", "password2");
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthenticationModel authenticationModel) {
        String username = authenticationModel.getEmail();
        String password = authenticationModel.getPassword();

        if (username == null || password == null) {
            return "Login failed. Please provide both username and password.";
        }

        String storedPassword = userCredentials.get(username);
        if (storedPassword != null && storedPassword.equals(password)) {
            return "Login successful for User: " + username;
        } else {
            return "Login Failed. Invalid username or password.";
        }
    }
}
