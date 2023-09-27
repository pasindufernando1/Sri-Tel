package com.sritel.authentication;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/authenticate")
@RequiredArgsConstructor
public class AuthenticationController {

    @GetMapping("/test")
    public String Test(@RequestParam("username") String username, @RequestParam("password") String password) {
        // Print the username and password
        System.out.println("Username: " + username);
        System.out.println("Password: " + password);

        return "Authenticate Microservice Called Successfully";
    }
}
