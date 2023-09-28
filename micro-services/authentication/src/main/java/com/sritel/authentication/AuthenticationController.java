package com.sritel.authentication;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/authenticate")
@RequiredArgsConstructor
public class AuthenticationController {

@GetMapping("/test")
public String Test() {
    return "Authentication Service";
}

}
