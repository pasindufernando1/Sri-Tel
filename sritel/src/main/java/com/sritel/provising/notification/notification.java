package com.sritel.provising.notification;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/userNotification")
public class notification {

    @GetMapping("")
    public Map<String, Object> payBill(@RequestParam("userid") String userID){
        HashMap returnData = new HashMap<>();

        returnData.put("UserId" , userID);
        returnData.put("Notification", "User notification API Called");

        return returnData;

    }

}
