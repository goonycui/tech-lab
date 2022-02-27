package com.example.rest.simplesslserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SslRestController {

    @Autowired
    RestService restService;

    @GetMapping(path = "/hello")
    public String hello() {
//        return "Hello World!";
        return restService.restTrigger();
    }

}
