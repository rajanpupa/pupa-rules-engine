package com.rajan.puparulesengine.controller;

import com.rajan.puparulesengine.repository.InMemoryRulesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/ui")
public class FrontendController {

    @Autowired
    InMemoryRulesRepository inMemoryRulesRepository;

    public FrontendController() throws IOException {
    }

    @GetMapping("/rules")
    public Collection<String> getRules(){
        return this.inMemoryRulesRepository.getRules();
    }

    @GetMapping("/rules/{ruleName}")
    public ResponseEntity<String> getRuleDetail(@PathVariable("ruleName")String ruleName){
        if(this.inMemoryRulesRepository.containsKey(ruleName)){
            return new ResponseEntity<>(this.inMemoryRulesRepository.getRule(ruleName), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/rules/create/{ruleName}")
    public ResponseEntity<String> createNewRule(@RequestBody String rule, @PathVariable String ruleName){
        System.out.println("=== new rule being created ### ");
        this.inMemoryRulesRepository.setRule(ruleName, rule);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
