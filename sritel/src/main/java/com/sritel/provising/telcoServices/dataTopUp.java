package com.sritel.provising.telcoServices;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/telco/dataTopUp")
public class dataTopUp {

    @PostMapping("")
    public Map<String, Object> subRoaming(@RequestParam("userid") String userID,
                                          @RequestParam("amount") String amount) {
        HashMap response = new HashMap<>();
        response.put("UserID",userID);
        response.put("TopUp", amount);
        response.put("Message", "Topup successfully done.");
        return response;
    }

}
