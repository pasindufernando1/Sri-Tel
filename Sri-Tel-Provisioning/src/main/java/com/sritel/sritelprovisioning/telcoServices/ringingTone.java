package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/telco/ringingTone")
public class ringingTone {

    @PostMapping("/sub")
    public Map<String, Object> subRoaming() {
        HashMap response = new HashMap<>();
        response.put("message","Sub to ringingTone");
        return response;
    }

    @PostMapping("/unsub")
    public Map<String, Object> unsubRoaming() {
        HashMap response = new HashMap<>();
        response.put("message","Unsub to ringingTone");
        return response;
    }
}
