package com.sritel.provising.authentication;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/authenticate")
public class authentication {

    @PostMapping("")
    public Map<String, Object> authHeader(@RequestHeader Map<String, String> headers) {
        String authHeaderValue = headers.get("auth");
        HashMap response = new HashMap<>();

        if (Objects.equals(authHeaderValue, "abcd")) {
            response.put("Message", "User Authenticated");
        } else {
            response.put("Message", "User Not Authenticated");
        }

        return response;

    }
}
