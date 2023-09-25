package com.sritel.billpayment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bill-payment")
@RequiredArgsConstructor
public class TestController {

@GetMapping("/test")
public String Test() {
    return "Bill Payment Microservice Called Successfully";
}

}
