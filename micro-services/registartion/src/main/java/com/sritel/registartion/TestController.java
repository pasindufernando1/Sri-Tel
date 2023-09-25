package com.sritel.registartion;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/register")
@RequiredArgsConstructor
public class TestController {

@GetMapping("/test")
public String Test() {
    return "Register Microservice Called Successfully";
}

}
