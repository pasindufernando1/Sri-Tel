package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/telco/dataTopUp")
public class dataTopUp {

    @PostMapping("/sub")
    public Map<String, Object> subTopUp() {
        HashMap response = new HashMap<>();
        response.put("message","Topup successfully done.");
        return response;
    }

    @PostMapping("/unsub")
    public Map<String, Object> unsubTopUp() {
        HashMap response = new HashMap<>();
        response.put("message","Automatic Topup successfully done.");
        return response;
    }
}