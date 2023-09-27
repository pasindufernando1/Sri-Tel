package com.sritel.billpayment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/bill-payment")
@RequiredArgsConstructor
public class BillPaymentController {

    private final String sampleCardNumber = "1234567812345678";
    private final String sampleCardHolderName = "Ravindu Wegiriya";
    private final String sampleCardExpiry = "12/25";
    private final String sampleCardCVV = "123";

    @PostMapping("/initiate-payment")
    public String initiatePayment(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        int paymentValue = Integer.parseInt(request.get("payment_value"));

        return "User " + username + " is making a payment of Rs. " + paymentValue;
    }

    @PostMapping("/verify-card")
    public String verifyCard(@RequestBody Map<String, String> cardDetails) {
        String cardNumber = cardDetails.get("cardNumber");
        String cardHolderName = cardDetails.get("cardHolderName");
        String cardExpiry = cardDetails.get("cardExpiry");
        String cardCVV = cardDetails.get("cardCVV");

        // Compare the received card details with the sample card
        if (cardNumber.equals(sampleCardNumber) &&
                cardHolderName.equals(sampleCardHolderName) &&
                cardExpiry.equals(sampleCardExpiry) &&
                cardCVV.equals(sampleCardCVV)) {
            return "Payment accepted";
        } else {
            return "Payment failed";
        }
    }


}
