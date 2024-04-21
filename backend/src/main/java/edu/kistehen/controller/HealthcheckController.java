package edu.kistehen.controller;


import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
@Tag( name = "Healthy Checks")
public class HealthcheckController {

    @GetMapping
    public String getHealth() {
        return "healthy";
    }
}
