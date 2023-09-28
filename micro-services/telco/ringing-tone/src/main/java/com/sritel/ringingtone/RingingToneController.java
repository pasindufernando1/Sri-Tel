package com.sritel.ringingtone;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ringing-tone")
@RequiredArgsConstructor
public class RingingToneController {

    private final RingingToneActivationService activationService;  // Assuming you have a service/adapter

    @PostMapping("/activate-ringing-tone")
    public ResponseEntity<String> activateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("username");
        String ringingToneId = (String) requestData.get("ringingToneId");

        // Call a service or adapter to handle ringing tone activation
        String activationResponse = activationService.activateRingingTone(username, ringingToneId);

        // Return the response from the activation service
        return ResponseEntity.ok(activationResponse);
    }
}
