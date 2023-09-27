package com.sritel.billpayment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/bill-payment")
@RequiredArgsConstructor
public class BillPaymentController {

    @PostMapping("/initiate-payment")
    public String initiatePayment(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        int paymentValue = Integer.parseInt(request.get("payment_value"));

        return "User " + username + " is making a payment of Rs. " + paymentValue;
    }

}
