package com.rajan.puparulesengine.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.service.RulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/evaluate/ruleSet")
public class RulesController {

    @Autowired
    RulesService rulesService;

    @GetMapping("/ping")
    public String pong(){
        return "pong";
    }

    // evaluation of rule level is deprecated.
//    @PostMapping("/evaluate")
//    public JsonNode evaluate(
//            @RequestBody JsonNode request,
//            @RequestParam List<String> rule
//    ) throws Exception {
//        this.rulesService.evaluate(request, rule);
//        return request;
//    }

    /**
     * A rule set is a combination of multiple rules
     * A rule has multiple condition and set of actions
     * @param request
     * @param ruleSet
     * @return
     * @throws Exception
     */
    @PostMapping
    public JsonNode evaluateRuleSet(
            @RequestBody JsonNode request,
            @RequestParam List<String> ruleSet
    ) throws Exception {
        this.rulesService.evaluate(request, ruleSet);
        return request;
    }

}
