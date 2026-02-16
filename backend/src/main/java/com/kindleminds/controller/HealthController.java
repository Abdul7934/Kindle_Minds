package com.kindleminds.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String health() {
        return "Kindle Minds Backend is Running! ✅";
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "OK";
    }
}
