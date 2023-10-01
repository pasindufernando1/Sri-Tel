package com.sritel.chat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @GetMapping("/messages/{questionId}")
    public List<String> getMessages(@PathVariable Integer questionId) {
        if(questionId == 1) {
            return Arrays.asList("Hello", "How are you?");
        } else if (questionId == 2) {
            return Arrays.asList("I am fine", "How are you?");
        } else {
            return Arrays.asList("Hello have a nice day");
        }
    }

}