package com.rajan.puparulesengine.service.parser;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.PupaRule;
import com.rajan.puparulesengine.rulesinterpreter.rule.PupaRuleSet;
import com.rajan.puparulesengine.service.parser.action.ActionParser;
import com.rajan.puparulesengine.service.parser.condition.ConditionParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

// parses from json to rules class
@Component
public class RuleSetParser {
    // rule fields
    static final String NAME = "name";
    static final String TYPE = "type";
    static final String RULES = "rules";


    @Autowired
    RuleParser ruleParser;

    public PupaRuleSet parse(JsonNode ruleSetJson) throws Exception {
        PupaRuleSet ruleSet = new PupaRuleSet();

        ruleSet.setName(ruleSetJson.get( NAME ).asText());
        ruleSet.setType(ruleSetJson.get( TYPE ).asText());

        JsonNode rulesNode = ruleSetJson.get(RULES);

        if(rulesNode.isArray()){
            for(JsonNode rule: rulesNode){
                ruleSet.getRules().add(ruleParser.parse(rule));
            }
        }else{
            ruleSet.getRules().add(ruleParser.parse(rulesNode));
        }

        return ruleSet;
    }

}
