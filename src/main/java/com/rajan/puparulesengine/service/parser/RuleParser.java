package com.rajan.puparulesengine.service.parser;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.PupaRule;
import com.rajan.puparulesengine.service.parser.action.ActionParser;
import com.rajan.puparulesengine.service.parser.condition.ConditionParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

// parses from json to rules class
@Component
public class RuleParser {
    // rule fields
    static final String NAME = "name";
    static final String TYPE = "type";
    static final String CONDITIONS = "conditions";
    static final String ACTIONS = "actions";


    @Autowired
    ConditionParser conditionParser;
    @Autowired
    ActionParser actionParser;

    public PupaRule parse(JsonNode ruleJson) throws Exception {
        PupaRule rule = new PupaRule();

        rule.setName(ruleJson.get( NAME ).asText());
        rule.setType(ruleJson.get( TYPE ).asText());

        rule.setConditions( conditionParser.parse( ruleJson.get( CONDITIONS ) ) );
        rule.setActions( actionParser.parse( ruleJson.get( ACTIONS ) ) );

        return rule;
    }

}
