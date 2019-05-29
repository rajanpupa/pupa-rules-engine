package com.rajan.puparulesengine.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/ui")
public class FrontendController {

    Map<String, String> rules = new HashMap<>();

    static final String RULES_FOLDER = "src/main/resources/rules/";

    public FrontendController() throws IOException {
        // load the rules in the rules resource folder
        for( String fileName :  Arrays.asList("Nepali_citizen_rule", "Nepali_citizen_rule2") ){
            rules.put(fileName, readFile(RULES_FOLDER + fileName));
        }
    }

    @GetMapping("/rules")
    public Collection<String> getRules(){
        return rules.keySet();
    }

    @GetMapping("/rules/{ruleName}")
    public ResponseEntity<String> getRuleDetail(@PathVariable("ruleName")String ruleName){
        if(rules.containsKey(ruleName)){
            return new ResponseEntity<>(rules.get(ruleName), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public static String readFile(String path) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return new String(encoded, Charset.defaultCharset());
    }

}
