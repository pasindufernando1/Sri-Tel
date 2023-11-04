package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/telco/ringingTone")
public class ringingTone {

    @PostMapping("/sub")
    public Map<String, Object> subRoaming(@RequestBody Map<String,String> body) {
        HashMap response = new HashMap<>();
        response.put("message","Sub to ringing tone " + body.get("toneid") + " by " + body.get("userid"));
        return response;
    }

    @PostMapping("/unsub")
    public Map<String, Object> unsubRoaming(@RequestBody Map<String,String> body) {
        HashMap response = new HashMap<>();
        response.put("message","Unsub to ringing tone " + body.get("toneid") + " by " + body.get("userid"));
        return response;
    }
}
