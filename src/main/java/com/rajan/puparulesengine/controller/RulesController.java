package com.rajan.puparulesengine.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.service.RulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rules")
public class RulesController {

    @Autowired
    RulesService rulesService;

    @PostMapping("/evaluate")
    public JsonNode evaluate(@RequestBody JsonNode request){
        String ruleName = "citizen";
        this.rulesService.evaluate(request, ruleName);
        return request;
    }

}
