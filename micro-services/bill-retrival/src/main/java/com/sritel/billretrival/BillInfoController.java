package com.sritel.billretrival;

import com.sritel.billretrival.adapter.Bill;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bill-retrieval")
public class BillInfoController {

    private final Bill billObject;

    public BillInfoController(Bill billCreate){
        this.billObject = billCreate;
    }

    @GetMapping("/pending-bills")
    public Map<String, Object> getPendingBills() {
        Map<String,Object> response = billObject.fetchPendingBill().block();
        return response;
    }

    @GetMapping("/paid-bills")
    public List<Map<String, Object>> getPaidBills() {
        List<Map<String, Object>> billDetailsList = new ArrayList<>();

        // Populate the list with bill details as Maps
        Map<String, Object> bill1 = new HashMap<>();
        bill1.put("billNumber", "005");
        bill1.put("billName", "Roaming Charges");
        bill1.put("dueDate", "2023-10-01");
        bill1.put("amount", 100.00);
        billDetailsList.add(bill1);

        Map<String, Object> bill2 = new HashMap<>();
        bill2.put("billNumber", "006");
        bill2.put("billName", "Data top-ups");
        bill2.put("dueDate", "2023-10-15");
        bill2.put("amount", 50.00);
        billDetailsList.add(bill2);

        Map<String, Object> bill3 = new HashMap<>();
        bill3.put("billNumber", "007");
        bill3.put("billName", "IDD Charges");
        bill3.put("dueDate", "2023-10-15");
        bill3.put("amount", 150.00);
        billDetailsList.add(bill3);

        Map<String, Object> bill4 = new HashMap<>();
        bill4.put("billNumber", "008");
        bill4.put("billName", "SMS Charges");
        bill4.put("dueDate", "2023-10-15");
        bill4.put("amount", 50.00);
        billDetailsList.add(bill4);

        return billDetailsList;
    }
}
