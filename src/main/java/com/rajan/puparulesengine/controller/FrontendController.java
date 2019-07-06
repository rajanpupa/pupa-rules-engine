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
@RequestMapping("/ui/ruleSets")
public class FrontendController {

    @Autowired
    InMemoryRulesRepository inMemoryRulesRepository;

    public FrontendController() throws IOException {
    }

    @GetMapping
    public Collection<String> getRules(){
        return this.inMemoryRulesRepository.getRules();
    }

    @GetMapping("{ruleSetName}")
    public ResponseEntity<String> getRuleDetail(@PathVariable("ruleSetName")String ruleSetName){
        if(this.inMemoryRulesRepository.containsKey(ruleSetName)){
            return new ResponseEntity<>(this.inMemoryRulesRepository.getRule(ruleSetName), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("create/{ruleSetName}")
    public ResponseEntity<String> createNewRule(@RequestBody String ruleSet, @PathVariable String ruleSetName){
        System.out.println("=== new ruleSet being created ### ");
        this.inMemoryRulesRepository.setRule(ruleSetName, ruleSet);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
