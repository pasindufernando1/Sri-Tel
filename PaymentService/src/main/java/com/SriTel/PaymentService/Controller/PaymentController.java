package com.SriTel.PaymentService.Controller;

import com.SriTel.PaymentService.Model.PaymentRequest;
import com.SriTel.PaymentService.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/validate-card")
    public String validateCard(@RequestBody PaymentRequest paymentRequest) {
        boolean isValid = paymentService.validateCard(
                paymentRequest.getCardNumber(),
                paymentRequest.getExpirationDate(),
                paymentRequest.getCvv()
        );

        if (isValid) {
            return "Card is valid.";
        } else {
            return "Invalid card details.";
        }
    }

}