package com.rajan.puparulesengine.rulesinterpreter.rule;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.action.Action;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.Condition;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PupaRuleSet {
    String type;// ruleset
    String name;
    List<PupaRule> rules = new ArrayList<>();

    public void evaluate(JsonNode node){
        for(PupaRule rule: rules){
            rule.evaluate(node);
        }
    }

}
