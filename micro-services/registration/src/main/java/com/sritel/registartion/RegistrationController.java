package com.sritel.registartion;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/register")
public class RegistrationController {

    @GetMapping("/register")
    public String Register(@RequestBody RegisterModel RegisterModel) {
        String firstName = RegisterModel.getFirstName();
        String lastName = RegisterModel.getLastName();
        String email = RegisterModel.getEmail();
        String password = RegisterModel.getPassword();
        String contactNumber = RegisterModel.getContactNumber();

        if (firstName == null || lastName == null || email == null || password == null || contactNumber == null) {
            return "Registration failed. Please provide all the details.";
        } else {
            return "Registration successful for User: " + firstName + " " + lastName;
        }

    }
}
