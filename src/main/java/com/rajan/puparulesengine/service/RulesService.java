package com.rajan.puparulesengine.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rajan.puparulesengine.repository.InMemoryRulesRepository;
import com.rajan.puparulesengine.rulesinterpreter.rule.PupaRule;
import com.rajan.puparulesengine.service.parser.RuleParser;
import com.rajan.puparulesengine.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class RulesService {

    @Autowired
    RuleParser ruleParser;

    @Autowired
    ObjectMapper objectMapper ;//= new ObjectMapper();

    @Autowired
    InMemoryRulesRepository inMemoryRulesRepository;

    // evaluates the business rulesinterpreter
    // returns the result
    public void evaluate(JsonNode node, List<String> rules) throws Exception {
        for(String ruleName: rules) {
            // get the rule
            PupaRule rule = loadRule(ruleName);
            // parse and prepare instance of PupaRule
            rule.evaluate(node);
        }
    }

    private PupaRule loadRule(String ruleName) throws Exception {
        //String fileName = "src/main/resources/rules/" + ruleName + ".rule";
        //String ruleJson = FileUtil.readFile(fileName);// load rule json here
        String ruleJson = this.inMemoryRulesRepository.getRule(ruleName);
        JsonNode ruleNode = objectMapper.readTree(ruleJson);
        return ruleParser.parse(ruleNode);
    }
}
