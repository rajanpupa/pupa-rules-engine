package com.rajan.puparulesengine.service.parser;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.PupaRule;
import com.rajan.puparulesengine.service.parser.condition.ConditionParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

// parses from json to rules class
@Component
public class RuleParser {

    @Autowired
    ConditionParser conditionParser;

    public PupaRule parse(JsonNode ruleJson) throws Exception {
        PupaRule rule = new PupaRule();

        rule.setName(ruleJson.get("name").asText());
        rule.setType(ruleJson.get("type").asText());
        rule.setConditions(conditionParser.parse(ruleJson.get("conditions")));

        return rule;
    }

}
