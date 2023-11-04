package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/telco/dataTopUp")
public class dataTopUp {

    @PostMapping("")
    public Map<String, Object> subRoaming(@RequestBody Map<String,String> body) {
        HashMap response = new HashMap<>();
        response.put("UserID",body.get("userid"));
        response.put("TopUp", body.get("amount"));
        response.put("Message", "Topup successfully done.");
        return response;
    }

}
