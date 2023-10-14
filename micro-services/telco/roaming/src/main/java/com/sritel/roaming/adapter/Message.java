package com.sritel.roaming.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface Message {
    Mono<Map<String, Object>> activateRingingTone(String username);
    Mono<Map<String, Object>> deactivateRingingTone(String username);
}
