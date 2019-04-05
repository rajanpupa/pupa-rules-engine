package com.rajan.puparulesengine.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.service.RulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rules")
public class RulesController {

    @Autowired
    RulesService rulesService;

    @GetMapping("/ping")
    public String pong(){
        return "pong";
    }

    @PostMapping("/evaluate")
    public JsonNode evaluate(@RequestBody JsonNode request,
                             @RequestParam List<String> rule) throws Exception {
        //String ruleName = "citizen";
        this.rulesService.evaluate(request, rule);
        return request;
    }

}
