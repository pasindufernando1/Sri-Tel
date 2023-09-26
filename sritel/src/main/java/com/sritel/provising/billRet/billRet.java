package com.sritel.provising.billRet;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/getBill")
public class billRet {

    @GetMapping("")
    public Map<String, Object> getBill(@RequestParam("userid") String userID){
        HashMap response = new HashMap<>();

        response.put("UserID", userID);
        response.put("Bill Amount", 1000);

        return response;
    }

}
