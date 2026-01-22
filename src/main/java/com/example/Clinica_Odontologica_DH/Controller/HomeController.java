package com.example.Clinica_Odontologica_DH.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HomeController {

    @GetMapping("/")
    public String index() {
        return "Backend Clinica Odontológica ONLINE 🚀";
    }

}
