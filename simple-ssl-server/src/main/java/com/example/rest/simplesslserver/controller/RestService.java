package com.example.rest.simplesslserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService {

    @Autowired
    RestTemplate restTemplate;

    public String restTrigger() {
        String urlOverHttps
                = "https://localhost:8443/test";
        ResponseEntity<String> response = restTemplate.
                exchange(urlOverHttps, HttpMethod.GET, null, String.class);
        return response.getBody();
    }
}
