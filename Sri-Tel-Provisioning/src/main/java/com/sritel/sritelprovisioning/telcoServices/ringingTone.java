package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/telco/ringingTone")
public class ringingTone {

    @PostMapping("/sub/{toneid}")
    public Map<String, Object> subRingTone(@PathVariable String toneid) {
        HashMap response = new HashMap<>();
        if(toneid.equals("1"))
            response.put("message","Subscribed to ringing tone Song 1") ;
        else if(toneid.equals("2"))
            response.put("message","Subscribed to ringing tone Song 2") ;
        else if(toneid.equals("3"))
            response.put("message","Subscribed to ringing tone Song 3") ;
        else
            response.put("message","Did not subscribe to ringing tone") ;

        return response;
    }

    @PostMapping("/unsub/{toneid}")
    public Map<String, Object> unsubRingTone(@PathVariable String toneid) {
        HashMap response = new HashMap<>();
        response.put("message","Unsubscribed to ringing tone " + toneid);
        return response;
    }
}
