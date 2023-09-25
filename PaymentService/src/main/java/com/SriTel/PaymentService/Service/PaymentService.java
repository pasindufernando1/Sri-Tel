package com.SriTel.PaymentService.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public boolean validateCard(String cardNumber, String expirationDate, String cvv) {
        // Validate card number, expiration date, and CVV
        boolean isValidCardNumber = isValidCardNumber(cardNumber);
        boolean isValidExpirationDate = isValidExpirationDate(expirationDate);
        boolean isValidCVV = isValidCVV(cvv);

        return isValidCardNumber && isValidExpirationDate && isValidCVV;
    }

    private boolean isValidCardNumber(String cardNumber) {
        // Check if the card number has exactly 16 digits
        return cardNumber != null && cardNumber.matches("^\\d{16}$");
    }

    private boolean isValidExpirationDate(String expirationDate) {
        // Check if the expiration date is in MM/yy format and is greater than the current date
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/yyyy");
        Date currentDate = new Date();

        try {
            Date parsedDate = dateFormat.parse(expirationDate);
            return parsedDate.after(currentDate);
        } catch (ParseException e) {
            return false; // Invalid date format
        }
    }

    private boolean isValidCVV(String cvv) {
        // Check if the CVV has exactly 3 digits (adjust as needed)
        return cvv != null && cvv.matches("^\\d{3}$");
    }

}
